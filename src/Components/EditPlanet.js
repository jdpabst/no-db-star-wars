import React, { useState, useEffect } from 'react';
import './EditPlanet.css';

function EditPlanet(props){
    const { selectedPlanet, id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, url } = props;
    const { editPlanet, setSelectedPlanet } = props;
    const [ isOpen, setIsOpen ] = useState(false);
    const [ inputs, setInputs ] = useState({});

    useEffect(() => {
        setInputs({
            id, 
            name, 
            rotation_period, 
            orbital_period, 
            diameter, 
            climate, 
            gravity, 
            terrain, 
            surface_water, 
            population, 
            url
        })
    }, [])
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
//    START HERE, TRYING TO FIGURE OUT HOW TO EDIT THE PLANETS -- THE CONTENT IN THE INPUT BOXES IS NOT CHANGING -- WORK ON THE EDIT PLANET FUNCTION //
    return (
        <div>
            { isOpen && (
                <div className='edit-planet-popup'>
                    <form className='edit-planet-container'>
                        <label> Enter Planet Name:
                            <input
                                type='text'
                                name='name'
                                value={inputs.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Rotation Period:
                            <input
                                type='text'
                                name='rotation_period'
                                value={inputs.rotation_period}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Orbital Period:
                            <input
                                type='text'
                                name='orbital_period'
                                value={inputs.orbital_period}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Diameter:
                            <input
                                type='text'
                                name='diameter'
                                value={inputs.diameter}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Climate:
                            <input
                                type='text'
                                name='climate'
                                value={inputs.climate}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Gravity:
                            <input
                                type='text'
                                name='gravity'
                                value={inputs.gravity}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Terrain:
                            <input
                                type='text'
                                name='terrain'
                                value={inputs.terrain}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Surface Water:
                            <input
                                type='text'
                                name='surface_water'
                                value={inputs.surface_water}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Population:
                            <input
                                type='text'
                                name='population'
                                value={inputs.population}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Image URL:
                            <input
                                type='text'
                                name='url'
                                value={inputs.url}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                    <button className='cancel-edit edit-button' onClick={() => setIsOpen(false)}>Cancel</button>
                    <button className='save-edit edit-button' onClick={() => {setIsOpen(false); editPlanet(inputs.name, inputs.rotation_period, inputs.orbital_period, inputs.diameter, inputs.climate, inputs.gravity, inputs.terrain, inputs.surface_water, inputs.population, inputs.url); setSelectedPlanet(inputs) }}>Save</button>
                </div>
            )}
            <button className="planet-edit-bttn" onClick={ () => setIsOpen(true)}>Edit</button>
        </div>
    )
}

export default EditPlanet;
import React, { useState } from 'react';
import './NewPlanet.css';

function NewPlanet(props){
    const [ isOpen, setIsOpen ] = useState(false);
    const [ inputs, setInputs ] = useState({});

    const { addPlanet } = props;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <div className='new-planet-bttn-container'>
            <button className='new-planet-bttn edit-button' onClick={() => setIsOpen(true) }>Create New Planet</button>
            { isOpen && (
                <div className='new-planet-popup'>
                    <form className='edit-planet-container'>
                        <label> Enter Planet Name:
                            <input
                                type='text'
                                name='name'
                                value={inputs.name || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Rotation Period:
                            <input
                                type='text'
                                name='rotation_period'
                                value={inputs.rotation_period || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Orbital Period:
                            <input
                                type='text'
                                name='orbital_period'
                                value={inputs.orbital_period || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Diameter:
                            <input
                                type='text'
                                name='diameter'
                                value={inputs.diameter || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Climate:
                            <input
                                type='text'
                                name='climate'
                                value={inputs.climate || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Gravity:
                            <input
                                type='text'
                                name='gravity'
                                value={inputs.gravity || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Terrain:
                            <input
                                type='text'
                                name='terrain'
                                value={inputs.terrain || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Surface Water:
                            <input
                                type='text'
                                name='surface_water'
                                value={inputs.surface_water || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Population:
                            <input
                                type='text'
                                name='population'
                                value={inputs.population || ''}
                                onChange={handleChange}
                            />
                        </label>
                        <label> Enter Image URL:
                            <input
                                type='text'
                                name='url'
                                value={inputs.url || ''}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                    <button className='new-planet-bttn edit-button' onClick={() => setIsOpen(false)}>Cancel</button>
                    <button className='new-planet-bttn edit-button' onClick={() => {setIsOpen(false); addPlanet(inputs.name, inputs.rotation_period, inputs.orbital_period, inputs.diameter, inputs.climate, inputs.gravity, inputs.terrain, inputs.surface_water, inputs.population, inputs.url) }}>Save</button>
                </div>
            )}
        </div>
    )
}

export default NewPlanet;
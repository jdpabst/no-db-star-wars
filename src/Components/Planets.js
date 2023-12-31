import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditPlanet from './EditPlanet.js';
import DeletePlanet from './DeletePlanet.js';
import NewPlanet from './NewPlanet.js';
import { randomString } from '../helpers.js';
import './Planets.css';

function Planets(props) {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        getPlanets();
    }, [])
    // DON'T PUT PLANETS IN THE ARRAY - IT WILL BE AN INFINITE LOOP

    function getPlanets(){
        axios.get('http://localhost:3001/api/planets').then(results => {
            setPlanets(results.data)
        }).catch(error => {
            console.error('Error fetching planets:', error);
        });
    }

    function handlePlanetClick(planet){
        setSelectedPlanet(planet);
        setIsOpen(true);
    }

    function closePopUp(){
        setIsOpen(false);
    }

    function editPlanet(name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, url){
        const updatedPlanet = planets.map(planet => {
            if(planet.id === selectedPlanet.id){
                const updatedPlanet = {
                    ...planet, 
                    name: name,
                    rotation_period: rotation_period,
                    orbital_period: orbital_period,
                    diameter: diameter,
                    climate: climate,
                    gravity: gravity,
                    terrain: terrain,
                    surface_water: surface_water,
                    population: population,
                    url: url
                };
                setSelectedPlanet(updatedPlanet);
                return updatedPlanet
            } else {
                return planet;
            }
        })
        setPlanets(updatedPlanet);
    }

    function deletePlanet(id) {
        const currentIndex = planets.findIndex((planet) => planet.id === id);
        if (currentIndex !== -1) {
          const updatedPlanets = planets.filter((planet) => planet.id !== id);
          const newCurrentIndex =
            currentIndex >= updatedPlanets.length ? updatedPlanets.length - 1 : currentIndex;
      
          setPlanets(updatedPlanets);
          setCurrentIndex(newCurrentIndex);
        }
      }

    function addPlanet(name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, url){
        setPlanets([...planets, {
            id: randomString(16), 
            name: name, 
            rotation_period: 
            rotation_period, 
            orbital_period:orbital_period,
            diameter: diameter,
            climate: climate,
            gravity: gravity,
            terrain: terrain,
            surface_water: surface_water,
            population: population,
            url: url
        }])
    }

    return (
        <div className="planets-create-planet-bttn-container">
            <div className="main-planets-container">
                {planets.map((item) => {
                    console.log(item.id);
                    return (
                        <div className="planet-holder" key={ item.id } onClick={() => handlePlanetClick(item)}>
                            <img src={`http://localhost:3001/${item.url}`} alt={item.name} />
                        </div>
                    )
                })}
                {isOpen && selectedPlanet && (
                    <div className="planet-pop-up">
                        <img src={`http://localhost:3001/${selectedPlanet.url}`} />
                        <div className="planet-pop-up-content">
                            <h1 className="planet-name">{ selectedPlanet.name }</h1>
                            <p>Rotation Period: { selectedPlanet.rotation_period }</p>
                            <p>Orbital Period: { selectedPlanet.orbital_period }</p>
                            <p>Diameter: { selectedPlanet.diameter }</p>
                            <p>Climate: { selectedPlanet.climate }</p>
                            <p>Gravity: { selectedPlanet.gravity }</p>
                            <p>Terrain: { selectedPlanet.terrain }</p>
                            <p>Surface Water: { selectedPlanet.surface_water }</p>
                            <p>Population: { selectedPlanet.population }</p>
                            <div className="bttn-holder">
                                <button className="planet-pop-up-close-bttn" onClick={ () => closePopUp() }>Close</button>
                                <EditPlanet 
                                    editPlanet={ editPlanet } 
                                    terrain={ selectedPlanet.terrain } 
                                    surface_water={ selectedPlanet.surface_water } 
                                    url={ selectedPlanet.url } population={ selectedPlanet.population } 
                                    climate={ selectedPlanet.climate } 
                                    gravity={ selectedPlanet.gravity } 
                                    name={ selectedPlanet.name }
                                    rotation_period={ selectedPlanet.rotation_period } 
                                    orbital_period={ selectedPlanet.orbital_period } 
                                    diameter={ selectedPlanet.diameter }
                                    selectedPlanet={ selectedPlanet }
                                    setSelectedPlanet={ setSelectedPlanet }
                                    />
                                <DeletePlanet deletePlanet={ deletePlanet } selectedPlanet={ selectedPlanet } closePopUp={ closePopUp }/>
                            </div>
                            
                        </div>
                    </div>
                )}
        </div>
                <NewPlanet addPlanet={ addPlanet }/>
        </div>
    )
}

export default Planets;
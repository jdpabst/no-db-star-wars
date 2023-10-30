import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditPlanet from './EditPlanet.js';
import './Planets.css';

function Planets(props) {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div className="main-planets-container">
                {planets.map((item) => (
                    <div className="planet-holder" key={ item.id } onClick={() => handlePlanetClick(item)}>
                        <img src={`http://localhost:3001/${item.url}`} alt={item.name} />
                    </div>
                ))}
                {isOpen && selectedPlanet && (
                    <div className="planet-pop-up">
                        <div className="planet-pop-up-content">
                            {/* START STYLING AND GETTING ALL OF THE INFO ON THE POP UP HERE */}
                            <img src={`http://localhost:3001/${selectedPlanet.url}`} />
                            <h1>{selectedPlanet.name}</h1>
                            <button className="planet-pop-up-close-bttn" onClick={ () => closePopUp() }>Close</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Planets;
import React, { useState } from 'react';
import './DeletePlanet.css';

function DeletePlanet(props){
    const { deletePlanet, selectedPlanet, closePopUp } = props;
    let id = selectedPlanet.id;

    return(
        <div>
            <button className='edit-button deletebttn' onClick={ () => {deletePlanet(id); closePopUp() }}>Delete</button>
        </div>
    )

}

export default DeletePlanet;
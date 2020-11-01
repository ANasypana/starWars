import React from 'react';


export const PlanetAbout = ({planet}) => {
    return(
        <div className='element-about bg-white p-2'>
            <h2 className='text-primary'>Planet Details</h2>
            <div className='container-about'>
                <p><strong>Population: </strong>{planet.population}</p>
                <p><strong>Rotation Period: </strong>{planet['rotation_period']}</p>
                <p><strong>Gravity: </strong>{planet.gravity}</p>
                <p><strong>Diameter: </strong>{planet.diameter}</p>
                <p><strong>Climate: </strong>{planet.climate}</p>
                <p><strong>Terrain: </strong>{planet.terrain}</p>
            </div>
        </div>
    )
}
import React from 'react';
import {Link} from 'react-router-dom';
import planet from '../../img/Tatooine.jpg';


export const PlanetItem =  ({ planet:{id, name, population, climate}}) => {

    return (
        <>
            <div className='planet bg-light'>
                <img src={planet} alt={name} className='round-img'/>
                <div>
                    <h2>{name}</h2>
                    <p>Population: <span>{population}</span></p>
                    <p className='mb-1'>Climate: <span>{climate}</span></p>
                    <Link
                        className='btn btn-primary'
                        to={`/planets/${id}`}>
                        Learn more</Link>
                </div>
            </div>
        </>
    )
};

import React from 'react';
import planet from '../../img/Tatooine.jpg';

export const PlanetTop = ({name}) => {
    return (
        <div className='element-top bg-primary p-2'>
            <img
                className='round-img my-1'
                src={planet}
                alt={name}
            />
            <h1 className='large'>{name}</h1>
        </div>
    )
}
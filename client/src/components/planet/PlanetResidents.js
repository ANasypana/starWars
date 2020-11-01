import React from 'react';
import {Link} from 'react-router-dom';

export const PlanetResidents = ({residents}) => {
    return(
        <div className='planet-residents bg-light p-2'>
            <h2 className='text-primary'>Famous residents</h2>
            <div className='line'></div>
            <div className='residents'>
                {residents.map(person => (
                    <div key={person.id}>
                        <Link
                            to={`/people/${person.id}`}
                             className="p-1">
                            <i className='fas fa-user-shield'></i> {'  '}
                            {person.name}
                        </Link>
                    </div>
                    ))}
            </div>
        </div>
    )
}

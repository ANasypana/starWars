import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Spinner } from '../layout/Spinner';
import { getPerson } from '../../actions/people';
import hero from '../../img/heroes.jpg';


const mapStateToProps = state => ({
    people: state.people,
    isAlerts: state.alert.isAlerts,
})

export const Person = connect(mapStateToProps, { getPerson })(({match, getPerson, isAlerts, people: {person, loading}}) => {
    useEffect(() => {
        getPerson(match.params.id)

    }, [getPerson]);

    return (
        <>
            {loading  ? <Spinner/> :
                <>
                    {!isAlerts &&
                    <>
                        {person !== null ?
                            <>
                                <div className='element-grid my-1'>
                                    <div className='element-top bg-primary p-2'>
                                        <img
                                            className='round-img my-1'
                                            src={hero}
                                            alt={person.name}
                                        />
                                        <h1 className="large">{person.name}</h1>
                                    </div>

                                    <div className='element-about bg-white p-2'>
                                        <h2 className='text-primary'>Physical Characteristics</h2>
                                        <p className='text-center'><strong>Height: </strong>{person.height}</p>
                                        <p className='text-center'><strong>Weight: </strong>{person.mass}</p>
                                    </div>
                                </div>
                            </> :
                            <p className='large text-danger'>Sorry, this hero does not exist</p>
                        }
                    </>}
              </>
            }
        </>
    )
});
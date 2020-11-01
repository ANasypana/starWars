import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../layout/Spinner';
import { PlanetItem } from './PlanetItem';
import { getPlanets, getMorePlanets } from '../../actions/planets';


const mapStateToProps = state => ({
    planets: state.planets,
    isAlerts: state.alert.isAlerts,
})

export const Planets = connect(mapStateToProps, {getPlanets, getMorePlanets})(
    ({getPlanets, getMorePlanets, isAlerts, planets: {planets, loading, next}}) => {
        useEffect(() => {
                getPlanets()
            },
            [getPlanets]);

    return (
        <>
            {loading ? <Spinner/> :
                <>
                    {
                        !isAlerts &&
                        <>
                            <h1 className='large text-primary'>Planets</h1>
                            <p className='lead'>
                                <i className='fab fa-connectdevelop'></i>{'  '}
                                Learn more about planets
                            </p>
                            <div className='planets'>
                                {planets.length > 0 ?
                                    (
                                        planets.map(planet =>
                                            (<PlanetItem
                                                key={planet.id}
                                                planet={planet}
                                            />))
                                    ) :
                                    (<h4>No profiles found ...</h4>)
                                }

                            </div>
                            <div className='btn-container'>
                                {next !== null ?

                                    <a
                                        className='btn btn-primary my-2'
                                        onClick={ () => getMorePlanets(next)}
                                    >
                                        Load more...
                                    </a> : null
                                }
                            </div>
                        </>
                    }
                </>
            }
        </>
    )
});

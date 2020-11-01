import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../layout/Spinner';
import {Link} from 'react-router-dom';
import { getPlanet } from '../../actions/planets';
import { PlanetTop } from "./PlanetTop";
import { PlanetResidents } from "./PlanetResidents";
import {PlanetAbout} from './PlanetAbout';


const mapStateToProps = state => ({
    planets: state.planets,
    isAlerts: state.alert.isAlerts
})

export const Planet = connect(mapStateToProps, { getPlanet })(({match, getPlanet, planets: {planet, loading}, isAlerts}) => {

    useEffect(() => {
        getPlanet(match.params.id)

    }, [getPlanet]);

    return (
        <>
            {loading   ? <Spinner/> :
                <>
                    {
                        !isAlerts &&
                        <>
                            {planet !== null ?
                                <div className='element-grid my-1'>
                                    <PlanetTop name={planet.name}/>
                                    {planet.residents.length > 0 ? <PlanetResidents residents={planet.residents}/> : null}
                                    <PlanetAbout planet={planet}/>
                                </div> :
                                <p className='large text-danger'>Sorry, this planet does not exist</p>
                            }
                        </>
                    }
                </>
            }
        </>
    )
});


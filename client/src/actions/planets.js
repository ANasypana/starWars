import { setAlert } from './alert';
import axios from "axios";
import { transformDataToStore, getNumber } from '../utils/transformData';

import { GET_PLANETS, GET_MORE_PLANETS, GET_PLANET, PLANETS_ERROR } from './types';

const URL = 'https://swapi.dev/api/';

//Get planets
export const getPlanets = (page=1) => async dispatch => {
    try {
        const res = await axios.get(URL +`planets/?page=${page}`);
        dispatch({
            type: GET_PLANETS,
            payload: transformDataToStore(res.data)
        })

    }catch (err){
        dispatch(setAlert(err.message, "danger"));
        dispatch({
            type: PLANETS_ERROR,
            payload: {
                msg: err.message,
                status: err.response.status
            }
        })
    }
};

//Get more planets
export const getMorePlanets = page => async dispatch => {
    try {
        const res = await axios.get(URL + `planets/?page=${page}`);
        dispatch({
            type: GET_MORE_PLANETS,
            payload: transformDataToStore(res.data)
        })

    }catch (err){
        dispatch(setAlert(err.message, "danger"));
        dispatch({
            type: PLANETS_ERROR,
            payload: {
                msg: err.message,
                status: err.response.status
            }
        })
    }
};


//Get planet
export const getPlanet = number => async dispatch =>{
    try {
        const res = await axios.get(URL + `planets/${number}/`);
        const data = res.data;
        if(data.residents.length > 0) {
            const residents = await Promise.all(data.residents.map(async per => {
                const id = getNumber(per, 'people');
                const res = await axios.get(URL+`people/${id}/`);
                return {id, name: res.data.name}
            }));
            data.residents = residents;
        }

        dispatch({
            type: GET_PLANET,
            payload: {...data, id: getNumber(data.url, 'planets') }
        });

    }catch (err){
        dispatch(setAlert(err.message, "danger"));
        dispatch({
            type: PLANETS_ERROR,
            payload: {
                msg: err.message,
                status: err.response.status
            }
        })
    }
};

import {setAlert} from './alert';
import axios from "axios";

import { GET_PEOPLE, PEOPLE_ERROR } from './types';

const URL = 'https://swapi.dev/api/';

//Get person
export const getPerson = number => async dispatch => {
    try {
        const res = await axios.get(URL +`people/${number}/`);

        dispatch({
            type: GET_PEOPLE,
            payload: {...res.data, id: number}
        })

    }catch (err){
        dispatch(setAlert(err.message, "danger"));
        dispatch({
            type: PEOPLE_ERROR,
            payload: {
                msg: err.message,
                status: err.response.status
            }
        })
    }
};
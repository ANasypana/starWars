import {
    GET_PEOPLE,
    PEOPLE_ERROR
} from '../actions/types';

const initialState = {
    person: null,
    loading: true,
    error: null
}

export const peopleReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case GET_PEOPLE:{
            return {...state, person: payload,
                loading: false, error: null}
        }
        case PEOPLE_ERROR:{
            return {...state, error: payload, loading: false}
        }
        default: return state
    }
}
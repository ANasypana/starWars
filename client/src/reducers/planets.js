import {
    GET_PLANETS,
    GET_MORE_PLANETS,
    GET_PLANET,
    PLANETS_ERROR
} from '../actions/types';

const initialState = {
    planets: [],
    planet: null,
    total: 0,
    next: null,
    previous: null,
    loading: true,
    error: null
}

export const planetsReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case GET_PLANETS: {
            return {...state, planets: payload.results, total: payload.count,
                next: payload.next,
                previous: payload.previous,
                loading: false, error: null}
        }
        case GET_MORE_PLANETS:{
            return {...state, planets: [...state.planets, ...payload.results],
                total: payload.count,
                next: payload.next,
                previous: payload.previous,
                loading: false, error: null}
        }
        case GET_PLANET:{
            return {...state, planet: payload,
                loading: false, error: null}
        }
        case PLANETS_ERROR:{
            return {...state, error: payload, loading: false}
        }
        default: return state
    }
}
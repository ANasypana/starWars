import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

const initialState = {
    alerts: [],
    isAlerts: false,
};

export const alterReduser = (state= initialState, action) =>{
    const {type, payload} = action;
    switch (type){
        case SET_ALERT:{
            return {...state, alerts: [...state.alerts, payload], isAlerts: true}

        }
        case REMOVE_ALERT:{
            const newAlerts = state.alerts.filter(alter => alter.id !== payload);
            return {...state, alerts: newAlerts, isAlerts: newAlerts.length > 0}
        }
        default:
            return state
    }
}
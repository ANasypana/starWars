import { combineReducers } from 'redux';
import { alterReduser } from './alert';
import { planetsReducer } from './planets';
import { peopleReducer } from './people';


export default combineReducers({
    alert: alterReduser,
    planets: planetsReducer,
    people: peopleReducer,

})
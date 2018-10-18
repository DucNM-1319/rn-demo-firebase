import { combineReducers } from 'redux';
import userReducer from './user/reducer'

const allReducers = combineReducers({
    user: userReducer,
})

export default allReducers
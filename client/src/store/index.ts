import { combineReducers } from 'redux'
import { ridesReducer } from './rides/reducers'

export const rootReducer = combineReducers({
    rides: ridesReducer
});
export type AppState = ReturnType<typeof rootReducer>
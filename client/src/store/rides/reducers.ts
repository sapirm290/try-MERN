import { GET_RIDES, ADD_RIDE, RidesState, RidesAction } from './types'
const initialState: RidesState = {
    rides: []
}

export function ridesReducer(state = initialState, action: RidesAction):
    RidesState {
    switch (action.type) {
        case GET_RIDES:
            return {
                rides: action.payload
            }
        case ADD_RIDE:
            return {
                rides: [...state.rides, action.payload]
            }
        default:
            return state;
    }

}
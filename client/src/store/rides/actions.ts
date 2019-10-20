import { GetRidesAction, AddRideAction, DeleteRideAction, GET_RIDES, ADD_RIDE, DELETE_RIDE, RideData } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function getRides(rides: RideData[]): GetRidesAction {
    return {
        type: GET_RIDES,
        payload: rides
    }
}
export function addRide(ride: RideData): AddRideAction {
    return {
        type: ADD_RIDE,
        payload: ride
    }
}
export function deleteRide(id: string): DeleteRideAction {
    return {
        type: DELETE_RIDE,
        payload: id
    }
}
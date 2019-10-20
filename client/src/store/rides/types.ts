export const GET_RIDES = "GET_RIDES";
export const ADD_RIDE = "ADD_RIDE";
export const DELETE_RIDE = "DELETE_RIDE";


export interface RideData {
    _id: string;
    message: string;
    authorName: string;
    authorPhone: string;
    createdAt: string;
}
export interface AcceptedRideInfo {
    message: string;
    authorName: string;
    authorPhone: string;
}
export interface RidesState {
    rides: RideData[]
}

export interface GetRidesAction {
    type: typeof GET_RIDES
    payload: RideData[]
}

export interface AddRideAction {
    type: typeof ADD_RIDE
    payload: RideData
}
export interface DeleteRideAction {
    type: typeof DELETE_RIDE
    payload: string
}
export type RidesAction = AddRideAction | GetRidesAction | DeleteRideAction
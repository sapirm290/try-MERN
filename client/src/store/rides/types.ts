import { AddRidesAction, GetRidesAction } from './types';
export const GET_RIDES = "GET_RIDES";
export const ADD_RIDE = "ADD_RIDE";


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

export interface AddRidesAction {
    type: typeof ADD_RIDE
    payload: RideData
}
export type RidesAction = AddRidesAction | GetRidesAction
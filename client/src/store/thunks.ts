import { Action } from 'redux';
import { ThunkAction, ThunkDispatch, } from 'redux-thunk';
import { getRides, addRide } from './rides/actions'
import { AppState } from '.'
import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

export const thunkGetRides = (): ThunkAction<void, AppState, null, Action<string>> =>
    async (dispatch: ThunkDispatch<AppState, null, Action<string>>): Promise<void> => {
        const response = await axios.get('api/getData')
        const data = await response.data.data;
        dispatch(getRides(data))
    }
export const thunkAddRide = (acceptedVerifiedRide: any): ThunkAction<void, AppState, null, Action<string>> =>
    async (dispatch: ThunkDispatch<AppState, null, Action<string>>): Promise<void> => {
        console.log('soon will post to bed')
        const body = JSON.stringify(acceptedVerifiedRide);
        const response = await axios
            .post("/api/putData", body, config)
        console.log(response)
        dispatch(addRide(response.data.item))
    }

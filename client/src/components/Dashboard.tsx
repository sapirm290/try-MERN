import React, { useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch, ThunkAction } from 'redux-thunk'
import { rootReducer, AppState } from '../store'
import { Container, List, Paper } from '@material-ui/core';
import Ride from './Ride'
import { thunkGetRides } from '../store/thunks'
import { RideData } from '../store/rides/types';
import { getRides } from '../store/rides/actions'

const Dashboard = () => {

    let messages = useSelector((state: AppState) => state.rides.rides)
    let rides = messages.map((message: RideData) => <Ride key={message._id}>{message}</Ride>)
    const dispatch = useDispatch()

    useEffect(() => {
        // props.getRides()
        dispatch(thunkGetRides())
        return () => {
        };
    }, [])

    return (
        < Container >
            <Paper>
                <List>
                    {rides}
                </List>
            </Paper>
        </Container >
    )
}
export default Dashboard
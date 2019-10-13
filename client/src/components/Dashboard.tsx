import React from 'react'
import { Container, List, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Ride from './Ride'
import { RideProps } from '../types';
const useStyles = makeStyles(theme => ({
    dashboard: {
        paddingTop: theme.spacing(12),
    },
}))
const Dashboard = ({ rides }: { rides: Array<RideProps> }) => {
    const classes = useStyles()
    const messages = rides.map((message: RideProps) => <Ride key={message._id}>{message}</Ride>)
    return (

        < Container className={classes.dashboard} >
            <Paper>
                <List>
                    {messages}
                </List>
            </Paper>

        </Container >
    )
}

export default Dashboard

import React from 'react'
import { Container } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    dashboard: {
        paddingTop: theme.spacing(12),
    },
}))
const Dashboard = ({ rides: rides }: { rides: any }) => {
    const classes = useStyles()
    const messages = rides.map((m: any) => <p>>{m.message}</p>)
    return (

        < Container className={classes.dashboard} >
            {messages}

        </Container >

    )
}

export default Dashboard

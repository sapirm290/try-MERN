import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { fontWeight } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    appbar: {
        padding: theme.spacing(2),
    },
    header: {
        fontWeight: 400

    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appbar} position='fixed' color='primary'>
            <Typography className={classes.header} align='center' variant='h2'>
                לוח טרמפים ירושלים
        </Typography>
        </AppBar>
    )
}

export default Header

import React, { useState } from 'react'
import { Box, Button, InputLabel, Input, FormControl, Typography } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import { thunkGetRides, thunkAddRide } from '../store/thunks'
import { useDispatch, } from 'react-redux'

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: 'center'
    },
    input: {
        display: 'flex',
        maxWidth: '500px',
        margin: 'auto'
    },

}))

const AddRide = () => {
    const classes = useStyles()
    const [authorName, setAuthorName] = useState('')
    const [authorPhone, setAuthorPhone] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(thunkAddRide({ authorName, authorPhone, message }))
    }
    return (
        <Box color="secondary" p={3}  >
            <form action="" className={classes.center}>
                <Typography variant='h4' className={classes.center}>הצע טרמפ</Typography>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor="authorName">Name: </InputLabel>
                    <Input
                        autoFocus={true}
                        onChange={e => { setAuthorName(e.target.value) }}
                        value={authorName}
                        placeholder={"your name goes here"}
                    // input={<Input name="username" />}
                    />
                </FormControl>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor="authorPhone">Phone: </InputLabel>
                    <Input
                        onChange={e => { setAuthorPhone(e.target.value) }}
                        type='authorPhone'
                        value={authorPhone}
                        placeholder={"your phone goes here"}
                    // input={<Input name="AuthorPhone" />}
                    />
                </FormControl>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor="message">Message:</InputLabel>
                    <Input
                        onChange={e => { setMessage(e.target.value) }}
                        type='message'
                        value={message}
                        placeholder={"your messsage goes here"}
                    // input={<Input name="message" />}
                    />
                </FormControl>
                <Button variant="contained" type='submit' color="secondary" onClick={onSubmit}>Add Message</Button>
            </form>
        </Box>

    );
}

export default AddRide
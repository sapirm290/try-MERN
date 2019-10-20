import React from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { DirectionsCarSharp } from '@material-ui/icons';
import { isToday, format } from 'date-fns'
import { RideData } from '../store/rides/types'
import DeleteIcon from '@material-ui/icons/Delete';
import { thunkDeleteRide } from '../store/thunks'
import { deleteRide } from '../store/rides/actions';
const Ride = ({ children }: { children: RideData }) => {
    const { message, createdAt, authorName, authorPhone } = children
    const itemCreateDate = new Date(children.createdAt)
    const createDateForShow = isToday(itemCreateDate) ? `Today at ${format(itemCreateDate, 'HH:mm')}` : format(itemCreateDate, 'MM/dd/yyyy')
    const dispatch = useDispatch()
    const onDelete = () => {
        dispatch(thunkDeleteRide(children._id))
    }
    return (
        <ListItem divider={true}>
            <ListItemAvatar>
                <Avatar>
                    <DirectionsCarSharp />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={message} secondary={`הועלה בתאריך: ${createDateForShow}, נהג: ${authorName} טלפון: ${authorPhone}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Delete" onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Ride

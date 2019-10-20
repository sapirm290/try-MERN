import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { DirectionsCarSharp } from '@material-ui/icons';
import { isToday, format } from 'date-fns'
import { RideData } from '../store/rides/types'
const Ride = ({ children }: { children: RideData }) => {
    const { message, createdAt, authorName, authorPhone } = children
    const itemCreateDate = new Date(children.createdAt)
    const createDateForShow = isToday(itemCreateDate) ? `Today at ${format(itemCreateDate, 'HH:mm')}` : format(itemCreateDate, 'MM/dd/yyyy')
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <DirectionsCarSharp />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={message} secondary={`הועלה בתאריך: ${createDateForShow}, נהג: ${authorName} טלפון: ${authorPhone}`} />
        </ListItem>
    )
}

export default Ride

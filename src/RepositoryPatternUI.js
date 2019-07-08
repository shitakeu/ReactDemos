import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import InMemoryEventRepository from './Backend/InMemoryEventRepository'
import events from './events'

class Event {
    constructor(title, desc, start, end, url) {
        this.title = title
        this.desc = desc
        this.start = start
        this.end = end
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

function load() {
    return events.map(event => (
        new Event(event.title, event.desc, event.start, event.end)
    ))
}

export default function RepositoryPatternUI() {
    const classes = useStyles();
    var eventlist = load()
    return (
        <List className={classes.root}>
            {eventlist.map(event => (
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={event.title}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {event.desc}
                                </Typography>
                                2019/7/7
                            </React.Fragment>
                        }
                    />
                    <Divider variant="inset" component="li" />
                </ListItem>
            ))}
        </List>
    );
}

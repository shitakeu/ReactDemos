import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

import events from './events'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={4} >
                    {events.map(event => (
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} >
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar>E</Avatar>
                                    </Grid>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {event.title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {event.desc}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {/*{event.start} ~ {event.end}*/}
                                                test
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1"> </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
}
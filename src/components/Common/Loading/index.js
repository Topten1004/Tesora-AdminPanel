import React from 'react';

import { useStyles } from './LoadingStyleDiv';

import {
    Box,
    CircularProgress
} from '@mui/material';


const Loading = (props) => {

    const classes = useStyles();

    const {
        status
    } = props;

    return (
        <Box className={classes.root}>
            <Box className={classes.status}>
                {
                    status
                }
            </Box>
            <CircularProgress />
        </Box>
    )
}

export default Loading;
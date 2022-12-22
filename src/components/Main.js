import React, { useState, useRef, createContext } from 'react';

import Routing from './Routes';

import {
    Box
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        overflowX: 'auto',
        overflowY: 'scroll',
    },
}))


const Main = (props) => {
    const classes = useStyles();

    const scrollTop = useRef({
        current: {
            innerText: "efefef"
        }
    });

    return (
        <Box className={classes.root} ref={scrollTop}>
            <Routing />
        </Box>
    )
}

export default Main;
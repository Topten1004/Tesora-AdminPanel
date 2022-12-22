import React from "react";

import { useStyles } from "./SettingsStyleDiv";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import {
    Box, Button, Paper, TextField
} from '@mui/material';

const Settings = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.header}>
                    <PersonOutlineIcon />
                    Settings
                </Box>

                <Box className={classes.body}>
                    <Box className={classes.commission}>
                        Admin Commission
                    </Box>
                    <TextField
                        fullWidth
                    />
                    <Button variant='contained'>
                        Save
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default Settings;
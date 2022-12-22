import React from "react";

import { useNavigate } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

        "& .MuiOutlinedInput-root": {
            height: '40px',
            marginBottom: '10px'
        },
        "& .MuiButton-root": {
            width: '200px',
            display: 'flex',
            fontSize: '16px',
            textTransform: 'unset',
            marginTop: '30px'
        }
    },
    loginForm: {
        width: '600px',
        background: 'white',
        backgroundClip: 'border-box',
        boxShadow: "10px 6px 8px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)",
        border: '1px solid #c8ced3',
        borderRadius: '4px',
        padding: '36px',
        margin: 'auto',
    },
    title: {
        fontSize: '35px',
        color: 'black',
        marginBottom: '8px'
    },
    text: {
        marginBottom: '16px'
    }
}))

const Login = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Box className={classes.root}>
            <Box className={classes.loginForm}>
                <Box className={classes.title}>
                    Login
                </Box>

                <Box className={classes.text}>
                    Sign In to your account
                </Box>

                <TextField
                    fullWidth
                    placeholder="Enter Username"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <TextField
                    fullWidth
                    placeholder="Enter Password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <Button variant="contained" onClick={() => navigate('/dashboard/users')}>
                    Login
                </Button>
            </Box>
        </Box>
    )
}

export default Login;
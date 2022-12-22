import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useStyles } from './StyleDiv/UserAddStyleDiv'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { Box, Button, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";

const item_list = [
    {
        title: 'Username',
        label: 'username',
    },
    {
        title: 'Email',
        label: 'email',
    },
    {
        title: 'First name',
        label: 'first_name',
    },
    {
        title: 'Last name',
        label: 'last_name',
    },
    {
        title: 'Password',
        label: 'password',
    },
    {
        title: 'Confirm Password',
        label: 'confirm_password',
    },
]

const UserAdd = () => {

    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [list_data, setListData] = useState("");
    const [profileImage, setProfileImage] = useState({ preview: "", raw: "" })

    const handleChangeImage = e => {
        if (e.target.files[0]) {
            setProfileImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    useEffect(() => {
        if (location.state) {
            setListData(location.state.data);
        }
    }, [location.state])

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <PersonOutlineIcon />
                Add User
            </Box>

            <Box className={classes.content}>
                <Grid container spacing={3}>
                    {
                        item_list.map((element, index) => {
                            return (
                                <Grid item xs={6} key={index}>
                                    <InputLabel> {element.title} </InputLabel>
                                    <TextField
                                        type={(index === 4 || index === 5) ? "password" : "text"}
                                        fullWidth
                                        placeholder="Enter Username"
                                        value={list_data[element.label] || ''}
                                    />
                                </Grid>
                            )
                        })
                    }
                    <Grid item xs={6}>
                        <InputLabel> Status </InputLabel>
                        <RadioGroup
                            row
                            value={list_data.status || ''}
                        >
                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                            <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                        </RadioGroup>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel> Profile Image </InputLabel>
                        <Box className={classes.profile}>
                            <Button variant="contained"
                                onChange={(e) => handleChangeImage(e)}
                                component="label"
                            >
                                <PhotoCameraIcon />
                                Choose Profile Image
                                <input
                                    type='file'
                                    id='import-image'
                                    hidden
                                />
                            </Button>

                            <InputLabel
                                className={classes.fileInput}
                            >
                                {
                                    profileImage.preview && <img src={profileImage.preview} />
                                }
                            </InputLabel>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained">
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default UserAdd;
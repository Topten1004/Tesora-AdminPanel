import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { GetUserInfoById } from "../../../redux/actions/getInfo";
import { UpdateUserInfo } from "../../../redux/actions/updateInfo";

import { useStyles } from './StyleDiv/UserEditStyleDiv'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { Box, Button, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";

const item_list = [
    {
        title: 'Username',
        label: 'userName',
    },
    {
        title: 'Email',
        label: 'email',
    },
    {
        title: 'First name',
        label: 'firstName',
    },
    {
        title: 'Last name',
        label: 'lastName',
    },
    // {
    //     title: 'Password',
    //     label: 'password',
    // },
    // {
    //     title: 'Confirm Password',
    //     label: 'confirm_password',
    // },
]

const UserEdit = (props) => {

    const {
        GetUserInfoById,
        UpdateUserInfo,
        userInfo
    } = props;

    const classes = useStyles();
    const { masterUserId } = useParams();

    const [profileImage, setProfileImage] = useState({ preview: "", raw: "" })

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'file'
                        ? event.target.files[0]
                        : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            }
        }))
    }

    const handleChangeImage = e => {
        handleChange(e);
        if (e.target.files[0]) {
            setProfileImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleUpdate = () => {
        UpdateUserInfo(formState.values)
    }

    useEffect(() => {
        if (masterUserId)
            GetUserInfoById(masterUserId);
    }, [masterUserId])

    useEffect(() => {
        if (userInfo) {
            setFormState(formState => ({
                ...formState,
                values: userInfo
            }))
        }
    }, [userInfo])

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <PersonOutlineIcon />
                Update User
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
                                        name={element.label}
                                        placeholder="Enter Username"

                                        value={formState.values[element.label] || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            )
                        })
                    }
                    <Grid item xs={6}>
                        <InputLabel> Status </InputLabel>
                        <RadioGroup
                            row
                            name="status"
                            value={formState.values.status || ''}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="active" control={<Radio />} label="Active" />
                            <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
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
                                    name="profileImage"
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
                        <Button variant="contained" onClick={() => handleUpdate()}>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
    userInfo: state.users.userInfo
})

const mapDispatchToProps = {
    GetUserInfoById,
    UpdateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
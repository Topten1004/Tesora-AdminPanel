import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { AddCategoryInfo } from "../../../redux/actions/addInfo";

import { useStyles } from './StyleDiv/CategoryAddStyleDiv'
import { routeContext } from "../../../context";

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { Box, Button, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";

const CategoryAdd = (props) => {

    const {
        AddCategoryInfo
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [categoryImage, setCategoryImage] = useState({ preview: "", raw: "" })

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
        handleChange(e)
        if (e.target.files[0]) {
            setCategoryImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleCategoryList = () => {
        setRoute('Categories');
        navigate(-1);
    }

    const handleSubmit = async () => {
        await AddCategoryInfo(formState.values);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                Add Category
                <Button variant="contained" onClick={() => handleCategoryList()}>
                    Go to Category List
                </Button>
            </Box>

            <Box className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <InputLabel> Title </InputLabel>
                        <TextField
                            fullWidth
                            name="title"
                            placeholder="Enter Title"

                            value={formState.values.title || ''}
                            onChange={handleChange}
                        />
                    </Grid>

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
                        <InputLabel> Category Image </InputLabel>
                        <Box className={classes.profile}>
                            <Button variant="contained"
                                onChange={(e) => handleChangeImage(e)}
                                component="label"
                            >
                                <PhotoCameraIcon />
                                Choose Category Image
                                <input
                                    type='file'
                                    name="image"
                                    id='import-image'
                                    hidden
                                />
                            </Button>

                            <InputLabel
                                className={classes.fileInput}
                            >
                                {
                                    categoryImage.preview && <img src={categoryImage.preview} />
                                }
                            </InputLabel>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={() => handleSubmit()}>
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    AddCategoryInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdd);
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { GetCategoryInfoById } from "../../../redux/actions/getInfo";
import { UpdateCategoryInfo } from "../../../redux/actions/updateInfo";

import { useStyles } from './StyleDiv/CategoryEditStyleDiv'
import Loading from '../../../components/Common/Loading'
import { routeContext } from "../../../context";
import { TESORA_IMAGE_API } from "../../../static/constants";

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { Box, Button, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";

const CategoryEdit = (props) => {

    const {
        categoryInfo,
        GetCategoryInfoById,
        UpdateCategoryInfo,
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    const [route, setRoute] = useContext(routeContext);
    const { categoryId } = useParams();

    const [loading, setLoading] = useState(false);
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
        handleChange(e);

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

    const handleUpdate = () => {
        UpdateCategoryInfo(formState.values, categoryId, navigate)
    }

    useEffect(() => {
        if (categoryId) {
            async function getCategoryInfo() {
                await GetCategoryInfoById(categoryId)
                setLoading(true);
            }

            getCategoryInfo();
        }
    }, [categoryId])

    useEffect(() => {
        if (categoryInfo) {
            setFormState(formState => ({
                ...formState,
                values: {
                    ...categoryInfo,
                    categoryImage: `${TESORA_IMAGE_API}${categoryInfo.categoryImage}`
                }
            }))
        }
    }, [categoryInfo])

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                Update Category
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
                            value={loading && formState.values.title || ''}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel> Status </InputLabel>
                        <RadioGroup
                            row
                            name="status"
                            value={loading && formState.values.status || ''}
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
                                    name="categoryImage"
                                    id='image'
                                    hidden
                                />
                            </Button>

                            <InputLabel
                                className={classes.fileInput}
                            >
                                {
                                    <img src={categoryImage.preview ? categoryImage.preview : `${formState.values.categoryImage}`} />
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

            {
                !loading &&
                <Loading />
            }
        </Box >
    )
}

const mapStateToProps = state => ({
    categoryInfo: state.categories.categoryInfo
})

const mapDispatchToProps = {
    GetCategoryInfoById,
    UpdateCategoryInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEdit);
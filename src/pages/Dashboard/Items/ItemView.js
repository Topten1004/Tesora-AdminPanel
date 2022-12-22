import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useStyles } from './StyleDiv/ItemViewStyleDiv';

import {
    Box, Paper, Button, Grid
} from '@mui/material';

const item_list = [
    {
        title: 'Name',
        label: 'name',
    },
    {
        title: 'Description',
        label: 'description',
    },
    {
        title: 'Price',
        label: 'price',
    },
    {
        title: 'Like Count',
        label: 'likeCount',
    },
    {
        title: 'Status',
        label: 'status',
    },
    {
        title: 'Created Date',
        label: 'createDate',
    },
]

const ItemView = () => {

    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [list_data, setListData] = useState("sss");

    useEffect(() => {
        if (location.state) {
            setListData(location.state.data);
        }
    }, [location.state])

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.header}>
                    View Item
                    <Button variant="contained" onClick={() => navigate(-1)}>
                        Go to Item List
                    </Button>
                </Box>

                <Box className={classes.body}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <img src={list_data.image} />
                        </Grid>
                        <Grid item xs={9}>
                            {
                                item_list.map((element, index) => {
                                    return (
                                        <Box key={index} className={classes.listItem}>
                                            <Box className={classes.title}>
                                                <Box>
                                                    {element.title}
                                                </Box>
                                                <Box>
                                                    :
                                                </Box>
                                            </Box>
                                            <Box className={classes.data}>
                                                {list_data[element.label]}
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}

export default ItemView;

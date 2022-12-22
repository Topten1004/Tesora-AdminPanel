import React, { useState, useEffect, useContext } from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useStyles } from './StyleDiv/CollectionViewStyleDiv';
import { routeContext } from "../../../context";

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
        title: 'Royalties',
        label: 'royalties',
    },
]

const CollectionView = () => {

    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [list_data, setListData] = useState("");

    const handleCollectionList = () => {
        setRoute("Collections")
        navigate(-1)
    }

    useEffect(() => {
        if (location.state) {
            setListData(location.state.data);
        }
    }, [location.state])

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.header}>
                    View Collection
                    <Button variant="contained" onClick={() => handleCollectionList()}>
                        Go to Collection List
                    </Button>
                </Box>

                <Box className={classes.body}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <img src={list_data.banner} />
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

export default CollectionView;

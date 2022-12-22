import React, { useState, useEffect, useContext } from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useStyles } from './StyleDiv/ContractViewStyleDiv';
import { routeContext } from "../../../context";

import {
    Box, Paper, Button, Grid
} from '@mui/material';

const item_list = [
    {
        title: 'Name',
        label: 'contractName',
    },
    {
        title: 'Version',
        label: 'contractVersion',
    },
    {
        title: 'Interface',
        label: 'contractInterface',
    },
    {
        title: 'ByteCode',
        label: 'contractByteCode',
    },
]

const ContractView = () => {

    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [list_data, setListData] = useState("");

    const handleContractList = () => {
        setRoute("Contracts")
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
                    View Contract
                    <Button variant="contained" onClick={() => handleContractList()}>
                        Go to Contract List
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
                                                {list_data[element.label]?.length >= 100
                                                    ? list_data[element.label].substring(0, 20) + ' ... ' + list_data[element.label].substring(list_data[element.label]?.length - 10)
                                                    : list_data[element.label]
                                                }
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

export default ContractView;

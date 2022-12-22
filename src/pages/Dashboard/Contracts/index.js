import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useStyles } from './StyleDiv/ContractsStyleDiv';
import ContractList from "./ContractList";
import { routeContext } from "../../../context";

import GavelIcon from '@mui/icons-material/Gavel';

import {
    Box, Button, Paper
} from '@mui/material';

const mockHead = [
    {
        name: 'Name',
        width: '100px'
    },
    {
        name: 'Version',
        width: '50px'
    },
    {
        name: 'Interface',
        width: '200px'
    },
    {
        name: 'Byte Code',
        width: '200px'
    },
    {
        name: 'Created Date',
        width: '100px'
    },
    {
        name: 'Actions',
        width: '40px'
    },
]

const mockData = [
    {
        name: "Sailing",
        version: 'ChCatch The Wind',
        interface: 2,
        byte_code: 'ssdfwerwe',
        createDate: '2002.5.13'
    },
    {
        name: "Sailing",
        version: 'ChCatch The Wind',
        interface: 2,
        byte_code: 'ssdfwerwe',
        createDate: '2002.5.13'
    },
    {
        name: "Sailing",
        version: 'ChCatch The Wind',
        interface: 2,
        byte_code: 'ssdfwerwe',
        createDate: '2002.5.13'
    },
    {
        name: "Sailing",
        version: 'ChCatch The Wind',
        interface: 2,
        byte_code: 'ssdfwerwe',
        createDate: '2002.5.13'
    },
]

const Contracts = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [searchText, setSearchText] = useState('');

    const handleAddContract = () => {
        setRoute('Add Contracts');
        navigate('/dashboard/contracts/add')
    }

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <GavelIcon />
                    Contract List
                </Box>

                <Button variant="contained" onClick={() => handleAddContract()}>
                    Add Contract
                </Button>

                <ContractList
                    mockHead={mockHead}
                    mockData={mockData}
                    searchText={searchText}
                />
            </Paper>
        </Box>
    )
}

export default Contracts;
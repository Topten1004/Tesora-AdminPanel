import React from "react";

import { useStyles } from "./ActivitiesStyleDiv";
import ActivityList from "./ActivityList";

import SwapVertIcon from '@mui/icons-material/SwapVert';

import {
    Box, Paper
} from '@mui/material';

const mockHead = [
    {
        name: 'Collection',
        width: '80px'
    },
    {
        name: 'Item',
        width: '80px'
    },
    {
        name: 'Event',
        width: '80px'
    },
    {
        name: 'Price',
        width: '80px'
    },
    {
        name: 'From',
        width: '80px'
    },
    {
        name: 'To',
        width: '80px'
    },
    {
        name: 'Transaction Hash',
        width: '100px'
    },
    {
        name: 'Created Date',
        width: '120px'
    },
]

const mockData = [
    {
        collection: '',
        item: '',
        event: 'mined',
        price: 0.01,
        from: '',
        to: 'James Abbas',
        transaction_hash: '0xc212064d6bbd02ef04eae5209e35c707551d4d6e216d7af6f84866d4fcaa50ff',
        created_date: 'July 21, 2022',
    },
    {
        collection: '',
        item: '',
        event: 'mined',
        price: 0.0001,
        from: '',
        to: 'James Abbas',
        transaction_hash: '0x76c642ed278930849ab990c4206806b7c5a17750f7f1536e54e31a62fff26239',
        created_date: 'January 10, 2022',
    },
    {
        collection: '',
        item: '',
        event: 'mined',
        price: 0.001,
        from: '',
        to: 'James Abbas',
        transaction_hash: '0xf6b2b6e92058b4625aff0c748c246e2c3549d417f2af758445e267a6a051b994',
        created_date: 'December 13, 2021',
    },
    {
        collection: '',
        item: '',
        event: 'bids',
        price: 0.001,
        from: 'James Abbas',
        to: 'Jammy H',
        transaction_hash: '',
        created_date: 'December 6, 2021',
    },
]

const Activities = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <SwapVertIcon />
                    Activity List
                </Box>

                <ActivityList
                    mockHead={mockHead}
                    mockData={mockData}
                />
            </Paper>
        </Box>
    )
}

export default Activities;
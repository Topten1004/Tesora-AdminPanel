import React from "react";

import { useStyles } from "./OffersStyleDiv";
import OfferList from "./OfferList";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
    Box, Paper
} from '@mui/material';

const mockHead = [
    {
        name: 'Image',
        width: '80px'
    },
    {
        name: 'Item name',
        width: '100px'
    },
    {
        name: 'Price',
        width: '100px'
    },
    {
        name: 'Sender name',
        width: '100px'
    },
    {
        name: 'Reciever name',
        width: '250px'
    },
    {
        name: 'Created Date',
        width: '200px'
    },
]

const mockData = [
    {
        image: '',
        item_name: "Diamonds",
        price: 4,
        sender_name: 'James Abbas',
        reciever_name: 'Jammy H',
        created_date: '2021-12-01T13:39:14.633Z'
    },
    {
        image: '',
        item_name: "Unique",
        price: 5,
        sender_name: 'James Abbas',
        reciever_name: 'Jammy H',
        created_date: '2021-11-30T12:30:37.667Z'
    },
    {
        image: '',
        item_name: "ANTIQUES",
        price: 5,
        sender_name: 'Dweio Dicu',
        reciever_name: 'Jammy H',
        created_date: '2021-11-24T08:21:56.474Z'
    },
    {
        image: '',
        item_name: "Demoitemnft",
        price: 2,
        sender_name: 'Ranjith Kumar',
        reciever_name: 'Ran Jith',
        created_date: '2021-10-29T11:41:43.471Z'
    },
]

const Offers = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <ShoppingCartIcon />
                    Offer List
                </Box>

                <OfferList
                    mockHead={mockHead}
                    mockData={mockData}
                />
            </Paper>
        </Box>
    )
}

export default Offers;
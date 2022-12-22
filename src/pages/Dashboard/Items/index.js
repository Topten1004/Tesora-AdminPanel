import React, { useState } from "react";

import { useStyles } from "./StyleDiv/ItemsStyleDiv";
import ItemList from "./ItemList";
import SearchBar from "../../../components/Common/SearchBar";

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import {
    Box, Paper
} from '@mui/material';

const mockHead = [
    {
        name: 'Image',
        width: '80px'
    },
    {
        name: 'Name',
        width: '120px'
    },
    {
        name: 'Description',
        width: '120px'
    },
    {
        name: 'Price',
        width: '80px'
    },
    {
        name: 'Like Count',
        width: '100px'
    },
    {
        name: 'Status',
        width: '60px'
    },
    {
        name: 'Created Date',
        width: '150px'
    },
    {
        name: 'Action',
        width: '100px'
    },
]

const mockData = [
    {
        image: '',
        name: "Muzeumnft",
        description: 'Muzeumnft',
        price: 0.01,
        like_count: 0,
        status: 'Active',
        created_date: 'July 21, 2022',
    },
    {
        image: '',
        name: "Dsfedf",
        description: 'Wedfedfwe',
        price: 0.0001,
        like_count: 0,
        status: 'Inactive',
        created_date: 'January 11, 2022',
    },
    {
        image: '',
        name: "Testimage",
        description: 'Wsfrf',
        price: 0.0001,
        like_count: 1,
        status: 'Active',
        created_date: 'December 11, 2021',
    },
    {
        image: '',
        name: "Trends",
        description: 'Unique Collection',
        price: 6,
        like_count: 1,
        status: 'Active',
        created_date: 'November 26, 2021',
    },
]

const Items = () => {

    const classes = useStyles();

    const [searchText, setSearchText] = useState('');
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <FeaturedPlayListIcon />
                    Item List
                </Box>

                <SearchBar
                    search_bar={true}
                    search_btn={"Search"}
                    reset_btn={"Reset"}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <ItemList
                    mockHead={mockHead}
                    mockData={mockData}
                />
            </Paper>
        </Box>
    )
}

export default Items;
import React, { useState } from "react";

import { useStyles } from "./StyleDiv/CollectionsStyleDiv";
import CollectionList from "./CollectionList";
import SearchBar from "../../../components/Common/SearchBar";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

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
        width: '100px'
    },
    {
        name: 'Description',
        width: '100px'
    },
    {
        name: 'Banner',
        width: '100px'
    },
    {
        name: 'Royalties',
        width: '100px'
    },
    {
        name: 'Action',
        width: '100px'
    },
]

const mockData = [
    {
        image: '',
        name: "Sailing",
        description: 'ChCatch The Wind',
        banner: '',
        royalties: 2,
    },
    {
        image: '',
        name: "Dfgdfhfdghdff",
        description: 'Fdgfdgdf',
        banner: '',
        royalties: 56,
    },
    {
        image: '',
        name: "Trends",
        description: 'Trends',
        banner: '',
        royalties: 3,
    },
    {
        image: '',
        name: "Sailing",
        description: 'ChCatch The Wind',
        banner: '',
        royalties: '2',
    },
]

const Collections = () => {

    const classes = useStyles();

    const [searchText, setSearchText] = useState('');

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <LibraryBooksIcon />
                    Collection List
                </Box>

                <SearchBar
                    search_bar={true}
                    search_btn={"Search"}
                    reset_btn={"Reset"}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <CollectionList
                    mockHead={mockHead}
                    mockData={mockData}
                    searchText={searchText}
                />
            </Paper>
        </Box>
    )
}

export default Collections;
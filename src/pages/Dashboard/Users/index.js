import React, { useState } from "react";

import { useStyles } from "./StyleDiv/UsersStyleDiv";
import UserList from "./UserList";
import SearchBar from "../../../components/Common/SearchBar";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import {
    Box, Paper
} from '@mui/material';

const mockHead = [
    {
        name: 'Image',
        width: '80px'
    },
    {
        name: 'Username',
        width: '100px'
    },
    {
        name: 'First name',
        width: '100px'
    },
    {
        name: 'Last name',
        width: '100px'
    },
    {
        name: 'Email',
        width: '250px'
    },
    {
        name: 'Status',
        width: '60px'
    },
    {
        name: 'Action',
        width: '100px'
    },
]

const mockData = [
    {
        image: '',
        username: "Cjmcgorty",
        first_name: 'Chris',
        last_name: 'McGorty',
        email: 'chris@mycom.global',
        status: 'Active',
    },
    {
        image: '',
        username: "Ranjithtest",
        first_name: 'Ranjith',
        last_name: 'Test',
        email: 'ranjithtest@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "JamesMcG",
        first_name: 'James',
        last_name: 'McGorty',
        email: 'james.mcgorty@jmcreativedesigns.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Tesorauser",
        first_name: 'Tsfirst',
        last_name: 'Tslast',
        email: 'tersorauser@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Update",
        first_name: 'Update',
        last_name: 'Test',
        email: 'update444@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Cjmcgorty",
        first_name: 'Chris',
        last_name: 'McGorty',
        email: 'chris@mycom.global',
        status: 'Active',
    },
    {
        image: '',
        username: "Ranjithtest",
        first_name: 'Ranjith',
        last_name: 'Test',
        email: 'ranjithtest@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "JamesMcG",
        first_name: 'James',
        last_name: 'McGorty',
        email: 'james.mcgorty@jmcreativedesigns.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Tesorauser",
        first_name: 'Tsfirst',
        last_name: 'Tslast',
        email: 'tersorauser@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Update",
        first_name: 'Update',
        last_name: 'Test',
        email: 'update444@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Cjmcgorty",
        first_name: 'Chris',
        last_name: 'McGorty',
        email: 'chris@mycom.global',
        status: 'Active',
    },
    {
        image: '',
        username: "Ranjithtest",
        first_name: 'Ranjith',
        last_name: 'Test',
        email: 'ranjithtest@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "JamesMcG",
        first_name: 'James',
        last_name: 'McGorty',
        email: 'james.mcgorty@jmcreativedesigns.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Tesorauser",
        first_name: 'Tsfirst',
        last_name: 'Tslast',
        email: 'tersorauser@yopmail.com',
        status: 'Active',
    },
    {
        image: '',
        username: "Update",
        first_name: 'Update',
        last_name: 'Test',
        email: 'update444@yopmail.com',
        status: 'Active',
    },
]

const Users = () => {

    const classes = useStyles();

    const [searchText, setSearchText] = useState('');

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <PersonOutlineIcon />
                    User List
                </Box>

                <SearchBar
                    search_bar={true}
                    search_btn={"Search"}
                    reset_btn={"Reset"}
                    add_user_btn={"Add User"}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <UserList
                    mockHead={mockHead}
                    mockData={mockData}
                    searchText={searchText}
                />
            </Paper>
        </Box>
    )
}

export default Users;
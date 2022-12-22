import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./StyleDiv/CategoriesStyleDiv";
import CategoryList from "./CategoryList";
import { routeContext } from "../../../context";

import CategoryIcon from '@mui/icons-material/Category';

import {
    Box, Button, Paper
} from '@mui/material';

const mockHead = [
    {
        name: 'Image',
        width: '80px'
    },
    {
        name: 'Title',
        width: '200px'
    },
    {
        name: 'Status',
        width: '60px'
    },
    {
        name: 'Created',
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
        title: "METAVERSO",
        status: 'Inactive',
        created_date: 'April 22, 2022'
    },
    {
        image: '',
        title: "PRIMARY SCULPTUR ARTISTS",
        status: 'Active',
        created_date: 'April 22, 2022'
    },
    {
        image: '',
        title: "CERTIFICATES-UTILITY",
        status: 'Active',
        created_date: 'April 22, 2022'
    },
    {
        image: '',
        title: "PRIMARY PAINTERS ARTISTS",
        status: 'Active',
        created_date: '	April 21, 2022'
    },
]

const Categories = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);

    const handleAddCategory = () => {
        setRoute('Add Category');
        navigate('/dashboard/categories/add')
    }

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    <CategoryIcon />
                    Category List
                </Box>

                <Button variant="contained" onClick={() => handleAddCategory()}>
                    Add Category
                </Button>

                <CategoryList
                    mockHead={mockHead}
                    mockData={mockData}
                />
            </Paper>
        </Box>
    )
}

export default Categories;
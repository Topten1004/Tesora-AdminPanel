import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './StyleDiv/NavBarDrawerStyleDiv';
import { routeContext } from '../../../context';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import CategoryIcon from '@mui/icons-material/Category';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

import {
    Box, List, ListItem,
} from '@mui/material';

const list_items = [
    {
        text: 'Users',
        icon: <PersonOutlineIcon />,
        link: '/dashboard/users'
    },
    {
        text: 'Collections',
        icon: <LibraryBooksIcon />,
        link: '/dashboard/collections'
    },
    {
        text: 'Items',
        icon: <FeaturedPlayListIcon />,
        link: '/dashboard/items'
    },
    {
        text: 'Categories',
        icon: <CategoryIcon />,
        link: '/dashboard/categories'
    },
    {
        text: 'Activities',
        icon: <SwapVertIcon />,
        link: '/dashboard/activities'
    },
    {
        text: 'Offers',
        icon: <ShoppingCartIcon />,
        link: '/dashboard/offers'
    },
    {
        text: 'Settings',
        icon: <SettingsIcon />,
        link: '/dashboard/settings'
    },
]


export const NavBarDrawer = (props) => {

    const {
        handleClose,
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext)

    const handleItemClick = (element) => {
        setRoute(element.text);
        navigate(element.link);
    }

    return (
        <Box
            sx={{ width: "auto" }}
            onClick={handleClose}
            onKeyDown={handleClose}
            className={classes.sidebar}
            ModalProps={{ sx: { border: '1px solid red' } }}
        >
            <List>
                {
                    list_items.map((element, index) => {
                        return (
                            <ListItem key={index}
                                onClick={() => handleItemClick(element)}
                                sx={{
                                    background: route === element.text ? '#3a4248' : '',
                                    "& .MuiSvgIcon-root": { color: route === element.text ? '#008cff !important' : '' }
                                }}
                            >
                                {element.icon}

                                {element.text}

                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    )
};
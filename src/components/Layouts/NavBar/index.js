
import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import clsx from "clsx";

import { useStyles } from './StyleDiv/NavBarStyleDiv';
import { routeContext } from '../../../context';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import CategoryIcon from '@mui/icons-material/Category';
import GavelIcon from '@mui/icons-material/Gavel';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
        text: 'Contracts',
        icon: <GavelIcon />,
        link: '/dashboard/contracts'
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

const NavBar = (props) => {

    const {
        isOpen,
        setIsOpen
    } = props;

    const classes = useStyles()
    const navigate = useNavigate();
    const location = useLocation();

    const [route, setRoute] = useContext(routeContext)

    const handleItemClick = (element) => {
        setRoute(element.text);
        navigate(element.link);
    }

    useEffect(() => {
        if (location.pathname) {
            if (location.pathname.includes('users'))
                setRoute('Users')
            if (location.pathname.includes('collections'))
                setRoute('Collections')
            if (location.pathname.includes('items'))
                setRoute('Items')
            if (location.pathname.includes('categories'))
                setRoute('Categories')
            if (location.pathname.includes('contracts'))
                setRoute('Contracts')
            if (location.pathname.includes('activities'))
                setRoute('Activities')
            if (location.pathname.includes('offers'))
                setRoute('Offers')
            if (location.pathname.includes('settings'))
                setRoute('Settings')
        }
    }, [location.pathname])

    return (
        <Box className={clsx(classes.sidebar, isOpen && classes.sidebarClose)}>
            <Box className={classes.mainSidebar}>
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

                                    <div
                                        className={clsx(classes.description, isOpen && classes.showDescription)}
                                    >
                                        {element.text}
                                    </div>

                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>

            <Box className={classes.minimizer} onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
            </Box>
        </Box>
    );
}

export default NavBar;
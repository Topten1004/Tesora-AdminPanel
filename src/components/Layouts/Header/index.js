
import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './StyleDiv/HeaderStyleDiv';
import ProfilePopover from './ProfilePopover';
import { routeContext } from '../../../context';
import Logo_Image from '../../../assets/Header/nft-logo.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import {
    Box, IconButton, useMediaQuery,
} from '@mui/material';

const Header = (props) => {

    const {
        isNavBar,
        setIsNavBar,
        isDrawer,
        setIsDrawer,
    } = props;

    const classes = useStyles();
    const profileAnchorRef = useRef(null);
    const match900 = useMediaQuery('(min-width : 900px)');
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext)
    const [profileOpen, setProfileOpen] = useState(false);

    const handleChangeProfile = (type) => {
        setProfileOpen(type);
    };

    const handleNavBarOpen = () => {
        if (match900)
            setIsNavBar(!isNavBar)
        else
            setIsDrawer(!isDrawer)
    }

    const handleLogoClick = () => {
        navigate('/dashboard/users')
        setRoute('Users')
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.menu}>
                <Box component={'img'}
                    src={Logo_Image}
                    className={classes.logoImage}
                    onClick={() => handleLogoClick()}
                />

                <IconButton onClick={() => handleNavBarOpen()}>
                    <MenuIcon />
                </IconButton>
            </Box>

            <IconButton ref={profileAnchorRef} onClick={() => handleChangeProfile(true)}>
                <AccountCircleIcon />
            </IconButton>

            <ProfilePopover
                open={profileOpen}
                anchorRef={profileAnchorRef}
                handleClosePopOver={() => handleChangeProfile(false)}
            />
        </Box>
    );
}

Header.propTypes = {
}

export default Header;
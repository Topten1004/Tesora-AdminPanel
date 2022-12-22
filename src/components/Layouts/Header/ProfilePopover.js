import React, { useContext } from "react";

import { useNavigate } from 'react-router-dom';

import { useStyles } from "./StyleDiv/ProfileStyleDiv";
import { routeContext } from "../../../context";

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import {
    Box, List, ListItem, Popover
} from '@mui/material';

const ProfilePopover = (props) => {

    const {
        open,
        anchorRef,
        handleClosePopOver,
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);

    const handleProfileClick = () => {
        setRoute('Edit Users')
        navigate('/dashboard/users/edit/0')
        handleClosePopOver();
    }

    const handleLogoutClick = () => {
        navigate('/')
    }

    return (
        <>
            <Popover
                open={open}
                anchorEl={anchorRef ? anchorRef.current : null}
                onClose={handleClosePopOver}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Box className={classes.popOver}>
                    <List>
                        <ListItem className={classes.settings}>
                            Settings
                        </ListItem>
                        <ListItem className={classes.list} onClick={() => handleProfileClick()}>
                            <PersonIcon />
                            Edit Profile
                        </ListItem>
                        <ListItem className={classes.list} onClick={() => handleLogoutClick()}>
                            <LockIcon />
                            Logout
                        </ListItem>
                    </List>
                </Box>

            </Popover>
        </>
    )
}

export default ProfilePopover;
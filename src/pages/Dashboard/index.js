import React, { useState, useEffect, useContext, memo } from "react";
// import PropTypes from "prop-types";

import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

// Pages
import Header from "../../components/Layouts/Header";
import NavBar from "../../components/Layouts/NavBar";
import { NavBarDrawer } from "../../components/Layouts/NavBar/NavBarDrawer";
import Users from "./Users";
import UserView from "./Users/UserView";
import UserEdit from "./Users/UserEdit";
import UserAdd from "./Users/UserAdd";
import Collections from "./Collections";
import CollectionView from "./Collections/CollectionView";
import Items from "./Items";
import ItemView from "./Items/ItemView";
import Categories from "./Categories";
import CategoryAdd from "./Categories/CategoryAdd";
import CategoryView from "./Categories/CategoryView";
import CategoryEdit from "./Categories/CategoryEdit";
import Contracts from "./Contracts";
import ContractView from "./Contracts/ContractView";
import ContractAdd from "./Contracts/ContractAdd";
import Activities from "./Activities";
import Offers from "./Offers";
import Settings from "./Settings";
import { routeContext } from "../../context";

import {
    Box, Drawer, useMediaQuery
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        overflowX: 'auto',
        overflowY: 'scroll',
        fontSize: '14px',
        "& .MuiPaper-root": {
            border: '1px solid red'
        }
    },
    appBody: {
        display: 'flex',
        marginTop: '55px'
    },
    content: {
        width: '100%',
        height: 'calc(100vh - 55px)',
        overflowX: 'auto',
        overflowY: 'scroll',
    },
    routeContent: {
        display: 'flex',
        borderBottom: '1px solid #c8ced3',
        padding: '12px 16px',
        marginBottom: '24px'
    },
    home: {
        cursor: 'pointer',
        color: '#008cff'
    },
    mainContent: {
        padding: '0px 30px 30px 30px',

        "@media (max-width:600px)": {
            padding: '30px 10px',
        }
    }
}))

const Routing = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isNavBar, setIsNavBar] = useState(false);
    const [isDrawer, setIsDrawer] = useState(false);

    const classes = useStyles({ isOpen: isOpen, isNavBar: isNavBar });
    const navigate = useNavigate();
    const match900 = useMediaQuery('(min-width : 900px)');

    const [route, setRoute] = useContext(routeContext);

    const handleChangeNavigate = () => {
        setRoute('Users')
        navigate('/dashboard/users')
    }

    useEffect(() => {
        setIsNavBar(match900)
        if (match900)
            setIsDrawer(false)
    }, [match900])

    return (
        <>
            <Header
                isNavBar={isNavBar}
                setIsNavBar={setIsNavBar}
                isDrawer={isDrawer}
                setIsDrawer={setIsDrawer}
            />
            <Box className={classes.appBody}>
                {
                    !isDrawer && isNavBar &&
                    <NavBar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                }
                <Box className={classes.content}>
                    <Box className={classes.routeContent}>
                        <Box onClick={() => handleChangeNavigate()} className={classes.home}>
                            Home
                        </Box>
                        &nbsp;/ {route}
                    </Box>
                    <Box className={classes.mainContent}>
                        <Routes>
                            <Route path="/*" element={<Users />} />
                            <Route path="/users/view" element={<UserView />} />
                            <Route path="/users/edit/:masterUserId" element={<UserEdit />} />
                            <Route path="/users/add" element={<UserAdd />} />
                            <Route path="/collections" element={<Collections />} />
                            <Route path="/collections/view" element={<CollectionView />} />
                            <Route path="/items" element={<Items />} />
                            <Route path="/items/view" element={<ItemView />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/categories/add" element={<CategoryAdd />} />
                            <Route path="/categories/view" element={<CategoryView />} />
                            <Route path="/categories/edit/:categoryId" element={<CategoryEdit />} />
                            <Route path="/contracts" element={<Contracts />} />
                            <Route path="/contracts/view" element={<ContractView />} />
                            <Route path="/contracts/add" element={<ContractAdd />} />
                            <Route path="/activities" element={<Activities />} />
                            <Route path="/offers" element={<Offers />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </Box>
                </Box>
            </Box>

            <Drawer
                anchor="left"
                open={isDrawer}
                onClose={() => setIsDrawer(false)}
            >
                <NavBarDrawer
                    handleClose={() => setIsDrawer(false)}
                />
            </Drawer>
        </>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);

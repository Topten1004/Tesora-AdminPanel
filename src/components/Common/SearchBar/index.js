import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useStyles } from './SearchBarStyleDiv';
import { routeContext } from '../../../context';

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { Box, Button, TextField } from "@mui/material";

const SearchBar = (props) => {

    const {
        search_bar,
        search_btn,
        reset_btn,
        add_user_btn,
        searchText,
        setSearchText
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);

    const handleAddList = () => {
        setRoute('Add Users')
        navigate('/dashboard/users/add')
    }

    const handleChange = e => {
        setSearchText(e.target.value)
    }

    return (
        <Box className={classes.root}>
            {
                search_bar &&
                <TextField
                    placeholder="Search"
                    value={searchText}
                    onChange={handleChange}
                    className={classes.searchBar}
                />
            }
            <Box className={classes.btnGroup}>
                {
                    search_btn &&
                    <Button variant="contained">
                        <SearchIcon />
                        {search_btn}
                    </Button>
                }
                {
                    reset_btn &&
                    <Button variant="contained">
                        <RestartAltIcon />
                        {reset_btn}
                    </Button>
                }
                {
                    add_user_btn &&
                    <Button variant="contained" onClick={() => handleAddList()}>
                        <GroupAddIcon />
                        {add_user_btn}
                    </Button>
                }
            </Box>
        </Box>
    )
}

export default SearchBar;
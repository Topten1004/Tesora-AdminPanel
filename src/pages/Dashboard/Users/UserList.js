import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { GetUsersInfo } from "../../../redux/actions/getInfo";

import { useStyles } from "./StyleDiv/UsersStyleDiv";
import { routeContext } from "../../../context";
import BlockDialog from "../../../components/Common/BlockDialog";
import { TESORA_IMAGE_API } from "../../../static/constants";
import ImageModal from "../../../components/Common/ImageModal";

import EditIcon from '@mui/icons-material/Edit';
import HideSourceIcon from '@mui/icons-material/HideSource';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {
    Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TableFooter, TablePagination
} from '@mui/material';

const UserList = (props) => {

    const {
        mockHead,
        GetUsersInfo,
        usersInfo,
        searchText
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [showImage, setShowImage] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleShowImage = () => {
        setShowImage(true);
    }

    const handleUserView = (element) => {
        setRoute('View User')
        navigate('/dashboard/users/view', { state: { data: element } })
    }

    const handleUserEdit = (element) => {
        setRoute('Edit Users')
        navigate(`/dashboard/users/edit/${element.masterUserId}`)
    }

    const handleUserDelete = (type) => {
        setOpenDialog(type);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

    useEffect(() => {
        GetUsersInfo()
    }, [])

    return (
        <Box className={classes.tableContent}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                mockHead?.map((element, index) => {
                                    return (
                                        <TableCell key={index} sx={{ minWidth: element.width }}>
                                            {element.name}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            usersInfo && usersInfo.filter(list => list.userName.toLowerCase().search(searchText) >= 0)
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box component={'img'}
                                                    src={`${TESORA_IMAGE_API}${element.profileImage}`}
                                                    onClick={handleShowImage}
                                                    className={classes.collectionImage}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {element.userName}
                                            </TableCell>
                                            <TableCell>
                                                {element.firstName}
                                            </TableCell>
                                            <TableCell>
                                                {element.lastName}
                                            </TableCell>
                                            <TableCell>
                                                {element.email}
                                            </TableCell>
                                            <TableCell>
                                                <Box className={classes.active}
                                                    sx={{
                                                        background: element.status === 'active' ? '#4dbd74' : '#c8ced3',
                                                        color: element.status === 'active' ? 'white' : '#23282c'
                                                    }}
                                                >
                                                    {element.status}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box className={classes.action}>
                                                    <IconButton onClick={() => handleUserEdit(element)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleUserDelete(true)}>
                                                        <HideSourceIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleUserView(element)}>
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                count={usersInfo
                                    ? usersInfo.filter(list => list.userName.toLowerCase().search(searchText) >= 0).length
                                    : 0
                                }
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>

            <BlockDialog
                open={openDialog}
                handleClose={() => handleUserDelete(false)}
                list_name={'user'}
            />

            {/* <ImageModal isOpen={showImage} closeModal={handleCloseImage}>
                <Box component={'img'}
                    src={`${TESORA_IMAGE_API}${element.profileImage}`}
                    className={classes.collectionImage}
                />
            </ImageModal> */}

        </Box>
    )
}

const mapStateToProps = state => ({
    usersInfo: state.users.usersInfo
})

const mapDispatchToProps = {
    GetUsersInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
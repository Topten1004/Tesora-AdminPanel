import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { GetCollectionsInfo } from "../../../redux/actions/getInfo";

import { routeContext } from "../../../context";
import { useStyles } from "./StyleDiv/CollectionsStyleDiv";
import Loading from "../../../components/Common/Loading";

import VisibilityIcon from '@mui/icons-material/Visibility';

import {
    Box, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow,
} from '@mui/material';
import { TESORA_IMAGE_API } from "../../../static/constants";

const CollectionList = (props) => {

    const {
        mockHead,
        collectionsInfo,
        GetCollectionsInfo,
        searchText
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [route, setRoute] = useContext(routeContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleCollectionView = (element) => {
        setRoute("Collection View")
        navigate('/dashboard/collections/view', { state: { data: element } })
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

    useEffect(() => {
        async function getCollections() {
            await GetCollectionsInfo()
            setLoading(false)
        }

        getCollections()
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
                            collectionsInfo && collectionsInfo.filter(list => list.name.toLowerCase().search(searchText) >= 0)
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box component={'img'} src={`${TESORA_IMAGE_API}${element.collectionImage}`} className={classes.collectionImage} />
                                            </TableCell>
                                            <TableCell>
                                                {element.name}
                                            </TableCell>
                                            <TableCell>
                                                {element.description}
                                            </TableCell>
                                            <TableCell>
                                                <Box component={'img'} src={`${TESORA_IMAGE_API}${element.banner}`} className={classes.collectionImage} />
                                            </TableCell>
                                            <TableCell>
                                                {element.royalties}
                                            </TableCell>
                                            <TableCell>
                                                <Box className={classes.action}>
                                                    <IconButton onClick={() => handleCollectionView(element)}>
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
                                count={collectionsInfo
                                    ? collectionsInfo.filter(list => list.name.toLowerCase().search(searchText) >= 0).length : 0
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

            {
                loading &&
                <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    collectionsInfo: state.collections.collectionsInfo
})

const mapDispatchToProps = {
    GetCollectionsInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
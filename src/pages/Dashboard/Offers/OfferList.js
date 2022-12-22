import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { GetOffersInfo } from "../../../redux/actions/getInfo";

import { useStyles } from "./OffersStyleDiv";
import Loading from "../../../components/Common/Loading";

import {
    Box, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow,
} from '@mui/material';

const OfferList = (props) => {

    const {
        mockHead,
        offersInfo,
        GetOffersInfo
    } = props;

    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

    useEffect(() => {
        async function getOffers() {
            await GetOffersInfo()
            setLoading(false)
        }

        getOffers();
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
                            offersInfo && offersInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box component={'img'} src={element.image} className={classes.collectionImage} />
                                            </TableCell>
                                            <TableCell>
                                                {element.item_name}
                                            </TableCell>
                                            <TableCell>
                                                {element.price}
                                            </TableCell>
                                            <TableCell>
                                                {element.sender_name}
                                            </TableCell>
                                            <TableCell>
                                                {element.reciever_name}
                                            </TableCell>
                                            <TableCell>
                                                {element.createDate}
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
                                count={offersInfo ? offersInfo.length : 0}
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
    offersInfo: state.offers.offersInfo
})

const mapDispatchToProps = {
    GetOffersInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
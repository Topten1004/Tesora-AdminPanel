import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { GetActivitiesInfo } from "../../../redux/actions/getInfo";

import { useStyles } from "./ActivitiesStyleDiv";
import Loading from "../../../components/Common/Loading";

import {
    Box, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow,
} from '@mui/material';

const ActivityList = (props) => {

    const {
        mockHead,
        activitiesInfo,
        GetActivitiesInfo
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
        if (!activitiesInfo) {
            async function getActivities() {
                await GetActivitiesInfo()
                setLoading(false)
            }

            getActivities();
        } else {
            setLoading(false)
        }
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
                            activitiesInfo && activitiesInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Box component={'img'} src={element.collection} className={classes.collectionImage} />
                                            </TableCell>
                                            <TableCell>
                                                {element.item}
                                            </TableCell>
                                            <TableCell>
                                                {element.event}
                                            </TableCell>
                                            <TableCell>
                                                {element.price}
                                            </TableCell>
                                            <TableCell>
                                                {element.from}
                                            </TableCell>
                                            <TableCell>
                                                {element.to}
                                            </TableCell>
                                            <TableCell>
                                                {String(element.transaction_hash).substring(0, 4) + "..." + String(element.transaction_hash).substring(String(element.transaction_hash).length - 4)}
                                            </TableCell>
                                            <TableCell>
                                                {element.created_date}
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
                                count={activitiesInfo ? activitiesInfo.length : 0}
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
    activitiesInfo: state.activities.activitiesInfo
})

const mapDispatchToProps = {
    GetActivitiesInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
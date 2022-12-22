import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { GetContractsInfo } from "../../../redux/actions/getInfo";

import { useStyles } from "./StyleDiv/ContractsStyleDiv";
import { routeContext } from "../../../context";
import Loading from "../../../components/Common/Loading";

import VisibilityIcon from '@mui/icons-material/Visibility';

import {
    Box, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow,
} from '@mui/material';

const ContractList = (props) => {

    const {
        mockHead,
        GetContractsInfo,
        contractsInfo,
        searchText
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleContractView = (element) => {
        setRoute("Contract View")
        navigate('/dashboard/contracts/view', { state: { data: element } })
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

    const formatDBDate = (date) => {
        const removeT_db_datetime = date.replace("T", " ")
        const removeTail_db_datetime = removeT_db_datetime.split(".")[0]

        return removeTail_db_datetime
    }

    useEffect(() => {
        async function getContracts() {
            await GetContractsInfo();
            setLoading(false)
        }

        getContracts();
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
                            contractsInfo && contractsInfo.filter(list => list.contractName.toLowerCase().search(searchText) >= 0)
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {element.contractName}
                                            </TableCell>
                                            <TableCell>
                                                {element.contractVersion}
                                            </TableCell>
                                            <TableCell>
                                                {element.contractInterface.substring(0, 20) + ' ... ' + element.contractInterface.substring(element.contractInterface.length - 10)}
                                            </TableCell>
                                            <TableCell>
                                                {element.contractByteCode.substring(0, 20) + ' ... ' + element.contractByteCode.substring(element.contractByteCode.length - 10)}
                                            </TableCell>
                                            <TableCell>
                                                {formatDBDate(element.createDate)}
                                            </TableCell>
                                            <TableCell>
                                                <Box className={classes.action}>
                                                    <IconButton onClick={() => handleContractView(element)}>
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
                                count={
                                    contractsInfo ? contractsInfo.filter(list => list.contractName.toLowerCase().search(searchText) >= 0).length : 0
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
    contractsInfo: state.contracts.contractsInfo
})

const mapDispatchToProps = {
    GetContractsInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractList);
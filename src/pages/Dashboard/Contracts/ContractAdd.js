import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { AddContractInfo } from "../../../redux/actions/addInfo";

import { useStyles } from './StyleDiv/ContractAddStyleDiv'
import { routeContext } from "../../../context";
import ABI_IMAGE from '../../../assets/abi.png';

import QrCodeIcon from '@mui/icons-material/QrCode';

import { Box, Button, Grid, InputLabel, Radio, RadioGroup, TextField } from "@mui/material";

const item_list = [
    {
        title: 'Name',
        label: 'name',
    },
    {
        title: 'Version',
        label: 'version',
    }
]

const ContractAdd = (props) => {

    const {
        AddContractInfo
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [route, setRoute] = useContext(routeContext);
    const [abi, setABI] = useState('');
    const [byteCode, setByteCode] = useState('');

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    const handleContractList = () => {
        setRoute('Contracts');
        navigate(-1);
    }

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'file'
                        ? event.target.files[0] : event.target.value
            }
        }))
    }

    const handleChangeABI = e => {
        handleChange(e);

        if (e.target.files[0]) {
            setABI(e.target.files[0])
        }
    }

    const handleChangeByteCode = e => {
        handleChange(e);

        if (e.target.files[0]) {
            setByteCode(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        AddContractInfo(formState.values);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                Add Contract
                <Button variant="contained" onClick={() => handleContractList()}>
                    Go to Contract List
                </Button>
            </Box>

            <Box className={classes.content}>
                <Grid container spacing={3}>
                    {
                        item_list.map((element, index) => {
                            return (
                                <Grid item xs={6} key={index}>
                                    <InputLabel> {element.title} </InputLabel>
                                    <TextField
                                        type="text"
                                        name={element.label}
                                        fullWidth
                                        placeholder={element.title}
                                        value={formState.values[element.label] || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            )
                        })
                    }

                    <Grid item xs={6}>
                        <InputLabel> Contract Byte Code </InputLabel>
                        <Box className={classes.profile}>
                            <Button variant="contained"
                                onChange={(e) => handleChangeByteCode(e)}
                                component="label"
                            >
                                <QrCodeIcon />
                                Choose Byte Code
                                <input
                                    type='file'
                                    name="byte_code"
                                    hidden
                                />
                            </Button>

                            <InputLabel className={classes.fileInput} >
                                {byteCode.name}
                            </InputLabel>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel> Contract Interface </InputLabel>
                        <Box className={classes.profile}>
                            <Button variant="contained"
                                onChange={(e) => handleChangeABI(e)}
                                component="label"
                            >
                                <Box component={'img'} src={ABI_IMAGE} className={classes.abiLogo} />
                                Choose Contract ABI
                                <input
                                    type='file'
                                    name="interface"
                                    hidden
                                />
                            </Button>

                            <InputLabel className={classes.fileInput} >
                                {abi.name}
                            </InputLabel>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={() => handleSubmit()}>
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    AddContractInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractAdd);
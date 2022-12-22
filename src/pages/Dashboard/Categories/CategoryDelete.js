import * as React from 'react';

import { connect } from 'react-redux';
import { DeleteCategory } from '../../../redux/actions/getInfo';

import {
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiDialog-container": {
            height: '300px'
        },
        "& .MuiDialogTitle-root": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '24px',
            borderBottom: '1px solid lightgrey'
        },
        "& .MuiPaper-root": {
            width: '600px',
            margin: '10px'
        },
        "& .MuiDialogContent-root": {
            paddingTop: '20px !important'
        },
        "& .MuiDialogActions-root": {
            borderTop: '1px solid lightgrey',
            padding: '20px 24px 20px 24px'
        }
    }
}))

const Transition = React.forwardRef(function Transition(props, ref,) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const CategoryDelete = (props) => {

    const {
        open,
        handleClose,
        DeleteCategory,
        categoryId,
    } = props;

    const classes = useStyles();

    const handleConfirm = async () => {
        await DeleteCategory(categoryId);
        handleClose();
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            className={classes.root}
        >
            <DialogTitle >
                Confirmation
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                Are you sure to delete this category?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> Cancel </Button>
                <Button variant='contained' onClick={() => handleConfirm()}> Confirm </Button>
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    DeleteCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDelete);
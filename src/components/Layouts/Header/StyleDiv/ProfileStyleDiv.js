

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    popOver: {
        fontSize: '14px',
        color: 'rgba(44, 56, 74, 0.68)',

        "& .MuiList-root": {
            paddingTop: '0px',
            paddingBottom: '0px'
        },
        "& .MuiSvgIcon-root": {
            width: '20px',
            marginLeft: '-10px',
            marginRight: '10px'
        }
    },
    settings: {
        background: '#e4e7ea',
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(44, 56, 74, 0.68)',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderTop: '1px solid #c8ced3',
        padding: '8px 20px',

        "&:hover": {
            background: '#d8dbe0'
        }
    }
}));

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        height: '55px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: "white",
        boxShadow: "10px 6px 8px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)",
        padding: "0px 20px",

        "& .MuiSvgIcon-root": {
            width: '40px',
            height: '40px'
        },

        ['@media (max-width:600px)']: {
            padding: '0px',
            paddingLeft: '10px'
        }
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        "& .MuiSvgIcon-root": {
            width: '35px',
            height: '35px',
        },
    },
    logoImage: {
        height: "55px",
        cursor: 'pointer',
        marginRight: '20px',

        "@media (max-width:600px)": {
            width: "100px",
            height: "60px",
        },
    },
}));
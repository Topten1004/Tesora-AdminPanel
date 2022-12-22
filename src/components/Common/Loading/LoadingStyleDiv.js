
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1500,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        width: '100vw',
        height: '100vh',

        backdropFilter: "blur(1px)",

        "& span": {
            width: '100px !important',
            height: '100px !important'
        },
        "& svg": {
            width: '100px',
            height: '100px'
        }
    },
    status: {
        fontSize: 40,
        fontWeight: 600,
        marginBottom: 10
    }
}));
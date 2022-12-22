import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    sidebar: {
        background: '#2f353a',
        width: '3rem',
        display: 'flex',
        flexDirection: 'column',
        transition: '0.3s width',
        color: 'white',

        "& .MuiSvgIcon-root": {
            width: '18px',
            color: '#73818f',
            marginRight: '15px',
        },
    },
    sidebarClose: {
        width: '200px',
        alignItems: 'flex-start',
    },
    mainSidebar: {
        flex: 1,
        width: '100%',

        "& .MuiListItem-root": {
            fontSize: '14px',
            cursor: 'pointer',

            "&:hover": {
                background: '#008cff',
                "& .MuiSvgIcon-root": {
                    color: 'white !important'
                }
            }
        }
    },
    minimizer: {
        position: 'relative',
        flex: '0 0 50px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        width: '100%',
    },
    description: {
        opacity: 0,
        left: '5rem',
        zIndex: 10,
        margin: 0,
        transition: '0.5s opacity',
    },
    showDescription: {
        opacity: 1,
        transition: '0.5s opacity',
    }
}));
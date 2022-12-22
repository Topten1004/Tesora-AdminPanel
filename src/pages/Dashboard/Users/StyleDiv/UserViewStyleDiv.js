
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',
        border: '1px solid lightgrey',
        borderRadius: '8px',

        "& .MuiPaper-root": {
            borderRadius: '8px',
        },
        "& .MuiButton-root": {
            background: '#2f353a',
            textTransform: 'unset',
            "&:hover": {
                background: '#2f3111'
            }
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        background: theme.palette.primary.main,
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        padding: '12px 20px',

        "& .MuiSvgIcon-root": {
            marginRight: '10px'
        }
    },
    body: {
        padding: '20px',

        "& .MuiOutlinedInput-root": {
            height: '40px',
            marginBottom: '20px'
        },
        "& .MuiButton-root": {
            textTransform: 'unset',
            padding: '6px 24px'
        }
    },
    listItem: {
        display: 'flex',
        borderBottom: '1px solid lightgrey',
        padding: '10px 0px',
    },
    title: {
        width: '25%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    data: {
        marginLeft: '24px'
    }
}))
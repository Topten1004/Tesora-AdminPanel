
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',
        border: '1px solid lightgrey',
        borderRadius: '8px',

        "& .MuiPaper-root": {
            borderRadius: '8px',
        }
    },
    header: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        background: theme.palette.primary.main,
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        paddingLeft: '20px',

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
    commission: {
        marginBottom: '8px'
    }
}))
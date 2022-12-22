
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        padding: '20px 20px 0px 20px',

        "& .MuiButton-root": {
            display: 'flex',
            alignItems: 'center',
            textTransform: 'unset',
            padding: '4px 8px',
        },

        "@media (max-width:900px)": {
            display: 'grid',
            gap: '20px',
        },
    },
    searchBar: {
        flex: 1,
        marginRight: '20px !important',

        "& .MuiOutlinedInput-root": {
            height: '40px !important',
        },

        "@media (max-width:900px)": {
            marginRight: '0px !important',
        },
    },
    btnGroup: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    }
}))
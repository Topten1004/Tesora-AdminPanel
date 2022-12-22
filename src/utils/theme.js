import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import * as locale from '@mui/material/locale';

import { DefaultLocale } from '../static/constants';

const BrownColor = {
    main: '#c77e33',
    B100: '#f6d510'
}
// colors
const primary = "rgb(32, 129, 226)";
const secondary = "rgb(45, 46, 131)";
const black = "#303030";
const darkBlack = "#0c1319";
const background = "#fff";
const warningLight = "rgba(255, 246, 32, .3)";
const warningMain = "#ffc107";
const warningDark = "rgba(255, 246, 32, .7)";

const purple = "#4115DD";
const green = "#00CC00";
const red = "#F52C71";
// border
const borderWidth = 1;
const borderColor = "#2e6da4";

// breakpoints
// const xl = 1920;
// const lg = 1200;
// const md = 900;
// const sm = 600;
// const xs = 400;

// spacing
const spacing = 8;

const theme = createTheme({
    layout: {
        headerHeight: 80,
        contentWidth: 1140,
        footerWidth: 1400
    },
    palette: {
        brown: {
            ...BrownColor
        },
        primary: { main: primary, footer: '#055da6' },
        secondary: { main: secondary },
        common: {
        },
        warning: {
            light: warningLight,
            main: warningMain,
            dark: warningDark
        },
        tonalOffset: 0.2,
        background: {
            default: background,
            gray: '#f1f1f170'
        },
        spacing
    },
    // breakpoints: {
    //     values: {
    //         xl,
    //         lg,
    //         md,
    //         sm,
    //         xs
    //     }
    // },
    border: {
        borderColor: borderColor,
        borderWidth: borderWidth
    },
    overrides: {

    },
    typography: {
        useNextVariants: true
    }
}, locale[DefaultLocale]);

export default responsiveFontSizes(theme);

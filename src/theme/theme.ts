import {createTheme} from "@mui/system";

const FONT_PRIMARY = "Mukta";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FA36B5"
        },
        error: {
            main: "#FF5959"
        },
        mode: 'dark',
    },
    typography: {
        h1: {
            fontFamily: FONT_PRIMARY
        },
        h2: {
            fontFamily: FONT_PRIMARY,
        },
        h3: {
            fontFamily: FONT_PRIMARY
        },
        h4: {
            fontFamily: FONT_PRIMARY
        },
        h5: {
            fontFamily: FONT_PRIMARY
        },
        body1: {
            fontFamily: FONT_PRIMARY,
        },
        caption: {
            fontFamily: FONT_PRIMARY
        },
        button: {
            fontFamily: FONT_PRIMARY
        }
    }
})

export const Custom = {
    background: '#211f1f',
}

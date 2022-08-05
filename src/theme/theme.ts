import {ThemeProvider, createTheme} from '@mui/material/styles';

const FONT_PRIMARY = "Mukta";

export const theme = createTheme({
    palette: {

        mode: 'dark',
        primary: {
            main: "#211f1f"
        }
    },
    typography: {
        h1: {
            fontFamily: FONT_PRIMARY,
            fontSize: 42
        },
        h2: {
            fontFamily: FONT_PRIMARY,
            fontSize: 28
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
            fontFamily: FONT_PRIMARY,
            fontSize: 16
        },
        button: {
            fontFamily: FONT_PRIMARY
        }
    }
})

export const Custom = {
    background: '#211f1f',
}

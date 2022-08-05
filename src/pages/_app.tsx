import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/system";
import {theme} from "../theme/theme";
import createEmotionCache from "../theme/createEmotionCache";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {CssBaseline} from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

interface CacheProps extends AppProps {
    emotionCache: EmotionCache
}

function MyApp({Component, pageProps}: AppProps) {

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp

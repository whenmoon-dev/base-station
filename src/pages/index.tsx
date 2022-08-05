import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {Box, Stack, Typography} from "@mui/material";
import LOGO from "../../public/logo-2000x2000.png"
import GITHUB from "../../public/github.png"
import MAIL from "../../public/mail.png"
import {Custom} from "../theme/theme";

const Home: NextPage = () => {
    return (
        <Box height="100vh" display="flex" flexDirection="column" width="100vw"
             sx={{backgroundColor: Custom.background}}
             overflow-x={"hidden"}>
            <Head>
                <title>whenmoon.dev</title>
                <meta name="description" content="When?"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <main className={styles.main}>

                <Stack width={"100%"} alignItems={"center"}>

                    <Stack maxWidth={400}>
                        <Image src={LOGO} width={400} height={400}/>
                    </Stack>

                    <Typography variant={"h1"}>ANSWERING YOUR DEVELOPMENT NEEDS</Typography>
                    <Typography variant={"h2"}>WEB3 / NFT / FRONTEND / BACKEND / MOBILE</Typography>

                    <Stack direction={"row"} spacing={2} paddingTop={2}>

                        <Stack width={32} height={32}>
                            <a href={"https://github.com/whenmoon-dev"}
                               target="_blank" rel="noreferrer">
                                <Image src={GITHUB}/>
                            </a>
                        </Stack>

                        <Stack width={32} height={32}>
                            <a href={"mailto:whenmoonllc@proton.me"}
                               target="_blank" rel="noreferrer">
                                <Image src={MAIL}/>
                            </a>
                        </Stack>

                    </Stack>
                </Stack>
                
            </main>

            <footer>
                <Stack height={100} width="100%" alignItems={"center"}
                       justifyContent={"center"} sx={{backgroundColor: Custom.background}}>
                    <Typography variant={"caption"}>© When Moon LLC 2022</Typography>
                </Stack>
            </footer>
        </Box>
    )
}

export default Home

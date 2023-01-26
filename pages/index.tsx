import Head from 'next/head'
// import { Inter } from '@next/font/google'
import { extendTheme } from '@chakra-ui/react'

import Header from '@/components/Header'
import { Box, ChakraProvider, Heading } from '@chakra-ui/react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>

      <ChakraProvider theme={extendTheme({
            fonts: {
                heading: 'cursive,"Hiragino Kaku Gothic ProN',
                body: `cursive,"Hiragino Kaku Gothic ProN"`,
            }
        })}>
        <Box>
          <Header />
          <Heading>This is Home page</Heading>
        </Box>
      </ChakraProvider>
  
    </>
  )
}

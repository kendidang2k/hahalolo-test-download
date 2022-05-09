import { Box, Grid } from '@mui/material'
import React from 'react'
import AboutBrowser from '../../components/organisms/AboutBrowser/AboutBrowser'
import AdvanceFeature from '../../components/organisms/AdvanceFeature/AdvanceFeature'
import Banner from '../../components/organisms/Banner/Banner'
import Feature from '../../components/organisms/Feature/Feature'
import Footer from '../../components/organisms/Footer/Footer'
import Header from '../../components/organisms/Header/Header'
import Privacy from '../../components/organisms/Privacy/Privacy'

import './index.css'

export default function HomePage() {
    return (
        <Grid >
            <Header />
            <Banner />
            <Box sx={{ maxWidth: { xs: '375px', md: '1088px' }, margin: 'auto', paddingTop: '20px', zIndex: '10000' }}>
                <Feature />
                <Privacy />
                <AdvanceFeature />
            </Box>
            <AboutBrowser />
            <Footer />
        </Grid >
    )
}

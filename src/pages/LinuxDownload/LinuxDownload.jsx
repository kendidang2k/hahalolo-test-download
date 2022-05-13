import { Grid } from '@mui/material'
import React from 'react'
import Banner from '../../components/organisms/Banner/Banner'
import Footer from '../../components/organisms/Footer/Footer'
import Header from '../../components/organisms/Header/Header'
import InstallationInstructions from '../../components/organisms/InstallationInstructions/InstallationInstructions'

import './index.css'

const bannerData = {
    title: 'Installing Hakgok on Linux'
}

export default function LinuxDownload() {
    return (
        <Grid className='linux__download'>
            <Header />
            <Banner bannerContent={bannerData} />
            <InstallationInstructions />
            <Footer />
        </Grid>
    )
}

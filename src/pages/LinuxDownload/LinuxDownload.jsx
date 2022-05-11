import { Grid } from '@mui/material'
import React from 'react'
import Banner from '../../components/organisms/Banner/Banner'
import Header from '../../components/organisms/Header/Header'
import InstallationInstructions from '../../components/organisms/InstallationInstructions/InstallationInstructions'

import './index.css'

const bannerData = {
    title: 'Installing Brave on Linux'
}

export default function LinuxDownload() {
    return (
        <Grid className='linux__download'>
            <Header />
            <Banner bannerContent={bannerData} />
            <InstallationInstructions />
        </Grid>
    )
}

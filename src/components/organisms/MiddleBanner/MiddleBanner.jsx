import { Grid } from '@mui/material'
import React from 'react'
import MiddleBannerContent from '../../molecules/MiddleBannerContent/MiddleBannerContent'
import mobile from '../../../assets/images/desktop-download-page/mobile.svg'
import chPlay from '../../../assets/images/desktop-download-page/playstore.png'
import appStore from '../../../assets/images/desktop-download-page/app-store-badge.png'

const middleBannerData = {
    title: 'Brave Browser for mobile',
    image: mobile,
    content: "Brave is available as a fast, free, secure web browser for your mobile devices. Complete with a built-in ad blocker that prevents tracking, and optimized for mobile data and battery life savings. Get the Brave Browser (mobile) for Android or iOS.",
    buttonGroup: [
        {
            image: chPlay
        },
        {
            image: appStore
        }
    ]
}

/**
 * Author: Loc
 * @returns jsx
 */

export default function MiddleBanner() {
    return (
        <Grid className='middle__banner'>
            <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', padding: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MiddleBannerContent middleBannerContent={middleBannerData} />
            </Grid>
        </Grid>
    )
}

import { Grid } from '@mui/material'
import React from 'react'
import MiddleBannerContent from '../../molecules/MiddleBannerContent/MiddleBannerContent'

/**
 * Author: Loc
 * @param {middleBannerData} middleBannerData : object(content inside middle banner) 
 * @returns jsx
 */
export default function MiddleBanner({ middleBannerData }) {
    return (
        <Grid className='middle__banner'>
            <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', padding: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MiddleBannerContent middleBannerContent={middleBannerData} />
            </Grid>
        </Grid>
    )
}

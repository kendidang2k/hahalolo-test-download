import { Grid } from '@mui/material'
import React from 'react'
import AboutItem from '../../atoms/AboutItem/AboutItem'

import './index.css'

export default function AboutContent({ questionData }) {
    return (
        <Grid sx={{ padding: { xs: '0', md: '0 100px', lg: '0 120px' } }}>
            {
                questionData && questionData.map((item, index) => {
                    return (
                        <Grid key={index}>
                            <AboutItem aboutContentItem={item} index={index} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

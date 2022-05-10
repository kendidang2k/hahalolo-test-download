import { Grid } from '@mui/material'
import React from 'react'
import FeatureItem from '../../molecules/FeatureItem/FeatureItem'

import './index.css'

/**
 * Author: Loc
 * @param {*} downloadFeatureData : object (content inside feature section) 
 * @returns jsx
 */

export default function DesktopDownloadFeature({ downloadFeatureData }) {
    return (
        <Grid className="desktop__download__feature">
            <Grid container>
                {
                    downloadFeatureData && downloadFeatureData.map((item, index) => {
                        return (
                            <Grid item xs={12} md={4} key={index}>
                                <FeatureItem featureItem={item} index={index} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

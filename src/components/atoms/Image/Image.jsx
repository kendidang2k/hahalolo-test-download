import { Grid } from '@mui/material'
import React from 'react'

import './index.css'
/**
 * 
 * @param {*} src: String (url of image), alt: string(alt), width: string (width of div cover img), height: string (height of div cover img), isInsideBanner: boolean (to check this image is inside banner)
 * @returns jsx
 */
export default function Image({ src, alt, width, height, isInsideBanner }) {
    return (
        <Grid className={isInsideBanner ? 'image__inside__banner' : 'image'} sx={{ width: `${width}`, height: `${height}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
                style={{ height: `${height}`, width: `${width}` }}
                src={src}
                alt={alt} />
        </Grid>
    )
}

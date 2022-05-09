import { Grid } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'
import Video from '../../atoms/Video/Video'

import './index.css'
/**
 * 
 * @param {*} featureItem: Object (single feature item data), index: int (position of item) 
 * @returns 
 */
export default function FeatureItem({ featureItem, index }) {
    return (
        <Grid container className={featureItem.reverse ? 'cover__feature__item__reverse cover__feature__signle__item' : `cover__feature__item item${index} cover__feature__signle__item`} sx={{ marginBottom: { xs: '20px', md: '70px' }, alignItems: 'center' }}>
            <Grid item xs={12} md={6} sx={{ maxWidth: '100%!important', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Label label={featureItem.title} type={'h3'} />
                <Label html={featureItem.content} />
            </Grid>
            <Grid item xs={12} md={6} className="media" sx={{ maxWidth: '100%!important' }}>
                {
                    featureItem.image && <img src={featureItem.image} alt="feature image" width={"90%"} />
                }
                {
                    featureItem.video && <Video url={featureItem.video} />
                }
            </Grid>
        </Grid>
    )
}

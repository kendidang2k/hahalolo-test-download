import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { handleDownload } from '../../../functions/handleDownload'
import Button from '../../atoms/Button/Button'
import Label from '../../atoms/Label/Label'


import './index.css'
/**
 * Author: Loc
 * @params @bannerContent :object (content inside banner)
 * @returns jsx
 */

export default function BannerContent({ bannerContent }) {

    return (
        <Grid className='banner__content' sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px', marginBottom: '30px' }}>
                {
                    bannerContent.beforeTitle && <Label label={bannerContent.beforeTitle} type={"p"} color={'#fff'} className="before__title" />
                }
                <Label label={bannerContent.title} type={"h2"} color={"#fff"} marginBottom={20} className="title" />
                <Label label={bannerContent.subTitle} type={'h5'} color={'#fff'} marginBottom={20} className={"sub__title"} />
                {
                    bannerContent.button && <Button handleFunction={handleDownload} className={bannerContent.buttonClassName} label={bannerContent.button.label} type={bannerContent.button.type} />
                }
                {
                    bannerContent.downloadNote && <Label html={bannerContent.downloadNote} className={"download__note"} />
                }
            </Box>
        </Grid>
    )
}

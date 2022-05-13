import { Box, Grid } from '@mui/material'
import React from 'react'
import { handleDownload } from '../../../functions/handleDownload'
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'
import Label from '../../atoms/Label/Label'
import './index.css'

/**
 * Author: Loc
 * @param {*} middleBannerContent : object (content inside middle banner of the page ) 
 * @returns jsx
 */

export default function MiddleBannerContent({ middleBannerContent }) {
    return (
        <Grid className='middle__banner__content' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            {
                middleBannerContent.image && <Image src={middleBannerContent.image} alt={"middle banner image"} />
            }
            <Label label={middleBannerContent.title} type={"h3"} color={"#fff"} />
            <Label label={middleBannerContent.content} type={"p"} color={"#fff"} className={"middle__banner__content__detail"} />
            {
                middleBannerContent.downloadButton && <Button label={middleBannerContent.downloadButton} handleFunction={handleDownload} className={"download__button"} />
            }
            {
                middleBannerContent.QRCode && <Image src={middleBannerContent.QRCode} alt={"QR code"} className={"QRCode"} />
            }
            <Grid sx={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, marginTop: '20px' }}>
                {
                    middleBannerContent.buttonGroup && middleBannerContent.buttonGroup.map((item, index) => {
                        return (
                            <Box key={index}>
                                <Button image={item.image} />
                            </Box>
                        )
                    })
                }
            </Grid>
        </Grid >
    )
}

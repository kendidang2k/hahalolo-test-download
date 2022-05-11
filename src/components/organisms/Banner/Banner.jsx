import React, { useRef } from 'react'
import { Box, Grid } from '@mui/material'
import Image from '../../atoms/Image/Image'

import './Banner.css'
import Label from '../../atoms/Label/Label'
import Button from '../../atoms/Button/Button'
import BannerContent from '../../molecules/BannerContent/BannerContent'
import { Parallax } from 'react-parallax'
import banner from '../../../assets/images/homepage/banner.jpg'



/**
 * 
 * @param {*} img : String (image at bottom of banner), bannerContent: object (content inside banner)  
 * @returns 
 */

export default function Banner({ img, bannerContent }) {

    return (
        <Parallax bgImage={banner} strength={-500} >
            <Grid id="banner" className='banner' sx={{ width: '100%', paddingTop: { xs: '50px', md: '100px' }, paddingBottom: '37%', position: 'relative', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', overflow: 'hidden', paddingLeft: '20px', paddingRight: '20px' }}>
                <BannerContent bannerContent={bannerContent} />
                {
                    img && <Image src={img.src} alt={img.alt} width={img.width} height={img.height} isInsideBanner={true} />
                }
                <Box sx={{ width: '100%', height: 'auto', overflow: 'hidden', position: 'absolute', bottom: '-20px', zIndex: '8' }}>
                    {
                        bannerContent.bottomBanner ?
                            <Image src={bannerContent.bottomBanner} alt={"bottom_banner"} />
                            :
                            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 262,293.5 524,337 764,337 C 1004,337 1222,293.5 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#ffffff" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
                    }
                </Box>
            </Grid >
        </Parallax>
    )
}

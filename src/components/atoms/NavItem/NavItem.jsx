import { Box, Grid } from '@mui/material'
import React from 'react'
import Label from '../Label/Label'
import Link from '../Link/Link'
import { FiChevronRight } from "react-icons/fi";

import './index.css'

/**
 * 
 * @param {*} navItem:object (data of single navbar item) 
 * @returns 
 */

export default function NavItem({ navItem }) {


    return (
        <Grid className='cover__nav__item' >
            <Box className={"nav__item"} sx={{ paddingRight: { xs: '10px', lg: '30px' } }}>
                <img src={navItem.icon} alt="" width={'40px'} />
                <Label label={navItem.title} color={"#fff"} type={"p"} />
            </Box>
            <Grid className='cover__sub__data' sx={{ width: { xs: '300px', md: '320px', lg: '520px' }, height: '100vh', position: 'fixed', top: '0', left: '0', zIndex: { xs: 1, md: -1 }, overflowY: 'scroll' }}>
                {
                    navItem.subData && navItem.subData.map((item, index) => {
                        return (
                            <Grid className='cover__subdata__content' key={index} sx={{ borderBottom: '1px solid #000', marginBottom: '15px', position: 'relative' }}>
                                <Label className={'sub__title'} label={item.subTitle} type={"p"} color={"#868e96"} />
                                <Box>
                                    {
                                        item.link && item.link.map((linkItem, index) => {
                                            return (
                                                <Box key={index} className="cover__item__link">
                                                    {
                                                        linkItem.href ?
                                                            (
                                                                <Link href={linkItem.href} label={linkItem.title} type={"p"} />
                                                            )
                                                            :
                                                            (
                                                                <Box>
                                                                    <Box className='item__link' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                        <Label className={'sub__item'} label={linkItem.title} type={"p"} color={"#868e96"} />
                                                                        <FiChevronRight />
                                                                    </Box>
                                                                    <Box className='sub__content' sx={{ width: '300px', height: '100vh', overflowY: 'scroll', backgroundColor: '#ebebeb', position: 'fixed', opacity: 0, visibility: 'hidden', left: { xs: '0', md: '320px' }, top: 0, zIndex: '5', borderLeft: '1px solid #adadad', transition: '.3s ease-in-out' }}>
                                                                        <Box sx={{ borderBottom: '1px solid #adadad', margin: '0 20px', padding: { xs: '50px 0px 20px 0px', lg: '100px 0px 20px 0px' } }}>
                                                                            {
                                                                                linkItem.subContent && linkItem.subContent.map((subContentItem, index) => {
                                                                                    return (
                                                                                        <Box sx={{ marginBottom: '30px', backgroundColor: '#fff', padding: '10px' }} key={index}>
                                                                                            <a href="/">
                                                                                                {
                                                                                                    subContentItem.img && <img src={subContentItem.img} alt="subcontent image" />
                                                                                                }
                                                                                                <Label label={subContentItem.subContentTitle} type={"h6"} className={"subcontent__title"} />
                                                                                            </a>
                                                                                            <Label label={subContentItem.subContentDetail} type={"p"} className={"subcontent__detail"} />
                                                                                        </Box>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Box>
                                                                        <Box sx={{ margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                                                                            <Link label={"See all resources"} href={linkItem.seeAllLink} />
                                                                            <FiChevronRight />
                                                                        </Box>

                                                                    </Box>
                                                                </Box>
                                                            )
                                                    }
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid >
    )
}

import { Grid } from '@mui/material'
import React from 'react'
import FooterLink from '../../atoms/FooterLink/FooterLink'

import './index.css'

export default function LinkGroupFooter({ linkData }) {
    return (
        <Grid container sx={{ borderBottom: '1px solid #343a40' }}>
            {
                linkData && linkData.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={4} md={2.4} key={index} sx={{ padding: '30px 40px' }} className="cover__footer__link__group">
                            {
                                item.linkdata && item.linkdata.map((item, index) => {
                                    return (
                                        <Grid key={index}>
                                            <FooterLink linkItem={item} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                })
            }
        </Grid >
    )
}

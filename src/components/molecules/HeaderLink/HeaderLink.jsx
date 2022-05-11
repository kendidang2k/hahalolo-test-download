import React from 'react'
import { Grid } from '@mui/material'
import Link from '../../atoms/Link/Link'
import Label from '../../atoms/Label/Label'

import './index.css'

export default function HeaderLink({ headerData }) {
    return (
        <Grid sx={{ width: '100%' }} className="cover__header__link" >
            <Grid container sx={{ borderTop: '1px solid #8c8c8c', borderBottom: '#8c8c8c', borderBottomStyle: 'double', padding: '15px 0' }} className="header__link">
                {
                    headerData.headerLinkData && headerData.headerLinkData.map((item, index) => {
                        return (
                            <Grid item xs={4} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Link label={item.title} href={item.href} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Label html={headerData.content} />
        </Grid>
    )
}

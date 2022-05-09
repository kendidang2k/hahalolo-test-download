import { Grid } from '@mui/material'
import React from 'react'
import Image from '../Image/Image'
import Label from '../Label/Label'

import './index.css'

/**
 * Author: Loc
 * @param {*} detailData:Object (data of single row in privacy), index:int (position of row)
 * @returns 
 */

export default function PrivacyContentDetail({ detailData, index }) {
    return (
        <Grid container className={index % 2 != 0 ? 'cover__privacy__content__detail cover__privacy__detail' : 'cover__privacy__detail'} sx={{ padding: { xs: '10px 0', md: '20px 0' } }}>
            <Grid item xs={12} md={7}>
                <Label label={detailData.subTitle} />
            </Grid>
            <Grid item xs={12} md={5} sx={{ padding: { xs: '10px', md: '10px 10px 10px 0' } }}>
                <Grid container>
                    {
                        detailData.status && detailData.status.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image src={item} alt={"icon"} width={"30px"} height={"30px"} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

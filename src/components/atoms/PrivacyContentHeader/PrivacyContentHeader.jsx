import { Grid } from '@mui/material'
import React from 'react'
import Image from '../Image/Image'
import Label from '../Label/Label'

import './index.css'


/**
 * Author: Loc
 * @returns jsx 
 */

export default function PrivacyContentHeader({ title, data }) {

    console.log("data", data);
    return (
        <Grid container className='cover__privacy__content__header' sx={{ backgroundColor: '#eeeeee', padding: '20px 10px', alignItems: 'center' }}>
            <Grid item xs={12} md={7} className="cover__title" sx={{ padding: '10px 20px', display: 'flex', alignItems: 'center' }}>
                <Label label={title} type={'p'} color={'#868e96'} marginBottom={20} />
            </Grid>
            <Grid item xs={12} md={5} className="cover__header__detail">
                <Grid container>
                    {
                        data && data.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Image src={item.img} alt={"header-icon"} width={'40px'} height={"40px"} />
                                    <Label label={item.name} type={'p'} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

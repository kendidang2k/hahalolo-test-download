import { Grid } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'
import Button from '../../atoms/Button/Button'

import './index.css'

export default function AboutHeader({ title, subTitle }) {
    return (
        <Grid className="about__browser__header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: '50px' }}>
            <Label label={title} type={"h3"} color={"#fff"} />
            <Label label={subTitle} type={'p'} color={"#fff"} />
            <Button label={"Download Brave"} type={"download"} />
        </Grid>
    )
}

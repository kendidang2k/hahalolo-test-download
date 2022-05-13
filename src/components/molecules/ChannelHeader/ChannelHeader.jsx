import { Grid } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'

import './index.css'

export default function ChannelHeader({ title, headerContent }) {
    return (
        <Grid className="channel__header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Label label={title} type={"h3"} className={'title'} />
            <Label label={headerContent} type={"p"} className={'header__content'} />
        </Grid>
    )
}

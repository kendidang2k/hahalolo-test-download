import { Grid } from '@mui/material'
import React from 'react'
import Image from '../Image/Image'
import Label from '../Label/Label'
import Link from '../Link/Link'

import './index.css'

export default function ChannelItem({ channelItemData }) {
    return (
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '50px' }} className="channel__item">
            <Image src={channelItemData.image} alt={"channel item image"} width={"60%"} />
            <Label label={channelItemData.title} className={"title"} />
            <Label html={channelItemData.detail} className={"detail"} />
            <Link label={channelItemData.link.label} href={channelItemData.link.href} />
        </Grid>
    )
}

import { Grid } from '@mui/material'
import React from 'react'
import ChannelItem from '../../atoms/ChannelItem/ChannelItem'

export default function ChannelContent({ channelContent }) {
    return (
        <Grid container sx={{ paddingTop: '50px' }}>
            {
                channelContent && channelContent.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ChannelItem channelItemData={item} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

import { Grid } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'
import ChannelContent from '../../molecules/ChannelContent/ChannelContent'
import ChannelHeader from '../../molecules/ChannelHeader/ChannelHeader'

export default function BraveBuildChannels({ braveBuildChannelData }) {
    return (
        <Grid sx={{ paddingBottom: '50px' }}>
            <ChannelHeader title={braveBuildChannelData.title} headerContent={braveBuildChannelData.headerContent} />
            <ChannelContent channelContent={braveBuildChannelData.channels} />
        </Grid>
    )
}

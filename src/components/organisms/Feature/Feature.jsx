import { Box, Grid } from '@mui/material'
import React from 'react'
import Video from '../../atoms/Video/Video'
import FeatureItem from '../../molecules/FeatureItem/FeatureItem'

import './index.css'

const featureData = [
    {
        title: 'Stop being followed online',
        content: '<p>Brave blocks all creepy ads from every website by default. And that thing where ads follow you across the web? Brave blocks that, too.</p>',
        image: '',
        video: 'https://vimeo.com/3155182',
        reverse: false
    },
    {
        title: 'Online privacy made simple',
        content: '<p>All the good of ad-blocking, incognito windows, private search, even VPN. All in a single click.</p>',
        image: 'https://brave.com/static-assets/images/optimized/home-illustration-01.webp',
        video: '',
        reverse: true
    },
    {
        title: 'Switch in 60 seconds',
        content: '<p>Quickly import bookmarks, extensions, even saved passwords. It’s the best of your old browser, only safer. And it only takes a minute to switch.</p>',
        image: 'https://brave.com/static-assets/images/optimized/home-illustration-02.webp',
        video: '',
        reverse: false
    },
    {
        title: 'The new super app',
        content: '<p>Brave brings truly <a href="/">independent search</a>, <a href="/">free video conferencing</a>, <a href="/">offline playlists</a>, even a <a href="/">customizable news feed</a>. All fully private. All right to your browser super app.</p>',
        image: 'https://brave.com/static-assets/images/optimized/home-illustration-03.webp',
        video: '',
        reverse: true
    },
    {
        title: 'A difference you can see…and feel',
        content: '<p>No creepy ads & trackers means less stuff (visible or hidden) on every web page you visit. And that means faster page load, better battery life, even mobile data savings.</p>',
        image: 'https://brave.com/static-assets/images/optimized/home-illustration-04.webp',
        video: '',
        reverse: false
    }
]

/**
 * Author: Loc
 * @returns jsx
 */
export default function Feature() {
    return (
        <Grid sx={{ padding: '50px 20px 0 20px' }}>
            {
                featureData && featureData.map((item, index) => {
                    return (
                        <Box key={index}>
                            <FeatureItem featureItem={item} index={index} />
                        </Box>
                    )
                })
            }
        </Grid>
    )
}

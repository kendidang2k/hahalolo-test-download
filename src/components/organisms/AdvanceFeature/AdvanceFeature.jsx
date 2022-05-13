import { Box, Grid } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'
import FeatureItem from '../../molecules/FeatureItem/FeatureItem'
import image1 from '../../../assets/images/homepage/security-illustration.jpg'
import image2 from '../../../assets/images/homepage/rewards-illustration.jpg'
import image3 from '../../../assets/images/homepage/wallet-illustration.jpg'

import './index.css'

const advanceFeatureData = {
    title: "Advance Features",
    subTitle: '<p>Only here for the privacy? We got you. Just <a href=" / ">download</a> and enjoy…</p>',
    subTitle2: 'Want a more bespoke experience? Hakgok’s got great customizations, too:',
    advanceItemList: [
        {
            image: image1,
            title: 'Advanced security',
            content: '<p>Built-in IPFS integration, onion routing with Tor, custom filter lists, and <a href="/">more security features</a>.</p>'
        },
        {
            image: image2,
            title: 'Hakgok Rewards',
            content: '<p><a href="/">Earn crypto tokens for your attention</a> by opting in to privacy-preserving, first-party ads.</p>'
        },
        {
            image: image1,
            title: 'Crypto wallet',
            content: '<p><a href="/">A secure, browser-native wallet</a> to buy, store, send, and swap your crypto assets.</p>'
        }
    ]
}

export default function AdvanceFeature() {
    return (
        <Grid className={'cover__advance__feature'} sx={{ padding: '50px 10px 10px 10px' }}>
            <Label label={advanceFeatureData.title} type={'p'} className={"title"} />
            <Label html={advanceFeatureData.subTitle} />
            <Label label={advanceFeatureData.subTitle2} type={'p'} className={"subtitle2"} />
            <Grid container>
                {
                    advanceFeatureData.advanceItemList && advanceFeatureData.advanceItemList.map((item, index) => {
                        return (
                            <Grid item xs={12} md={4} sx={{ maxWidth: '100%' }} key={index}>
                                <FeatureItem featureItem={item} index={index} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

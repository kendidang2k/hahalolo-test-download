import { Grid } from '@mui/material'
import React from 'react'
import compageLogo1 from '../../assets/images/logo/logo.svg'
import compageLogo2 from '../../assets/images/homepage/chrome-logo.svg'
import Header from '../../components/organisms/Header/Header'
import reasonImg1 from '../../assets/images/compare/graphic-browser-speed.png'
import reasonImg2 from '../../assets/images/compare/graphic-security.png'
import reasonImg3 from '../../assets/images/compare/graphic-rewards.png'
import QuestionHeader from '../../components/organisms/QuestionHeader/QuestionHeader'

import './index.css'
import QuestionContent from '../../components/organisms/QuestionContent/QuestionContent'
import Footer from '../../components/organisms/Footer/Footer'
import MiddleBanner from '../../components/organisms/MiddleBanner/MiddleBanner'

const compareData = {
    compareHeader: {
        question: 'Why Hakgok?',
        img1: compageLogo1,
        img2: compageLogo2,
        answer: `Why should you use Brave over Chrome? A helpful "Explain It Like I'm Five" series to show why over 50 million people are using Brave today.`,
    },
    compareContent: [
        {
            img: reasonImg1,
            smallTitle: 'Hakgok vs Chrome',
            title: 'A Browser Built to Perform',
            content: '3x faster. 1 hour more of battery life. 33% less memory usage. Speed past Chrome today.',
        },
        {
            img: reasonImg2,
            smallTitle: 'Hakgok vs Chrome',
            title: 'What You Do Online Is Your Business, Not Ours',
            content: 'You are not a product. Your browser should not spy on your online behavior. Read how Brave respects your privacy by shielding you from the surveillance economy.',
        },
        {
            img: reasonImg3,
            smallTitle: 'Hakgok vs Chrome',
            title: 'Get Rewarded For Paying Attention',
            content: 'Pay attention, get rewarded. Brave is making the Internet economy fairer for creators and users.',
        }

    ]
}

const middleBanner = {
    title: 'Ready to Brave the new internet?',
    content: "Brave is built by a team of privacy focused, performance oriented pioneers of the web. Help us fix browsing together.",
    downloadButton: 'Download Hakgok'
}

export default function Compare() {
    return (
        <Grid className='compare'>
            <Header />
            <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', padding: { xs: '100px 20px 10px 20px', md: '100px 5% 10px 5%' } }}>
                <QuestionHeader questionHeaderData={compareData.compareHeader} />
                <QuestionContent questionContentData={compareData.compareContent} />
            </Grid>
            <MiddleBanner middleBannerData={middleBanner} />
            <Footer />
        </Grid>
    )
}

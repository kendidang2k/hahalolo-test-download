import { Box, Grid } from '@mui/material'
import React from 'react'
import Banner from '../../components/organisms/Banner/Banner'
import Header from '../../components/organisms/Header/Header'
import bannerImg from '../../assets/images/homepage/img-banner.png'
import FeatureItem from '../../components/molecules/FeatureItem/FeatureItem'
import featureImage from '../../assets/images/beta-release/contribute.svg'
import channelImg1 from '../../assets/images/beta-release/brave-nightly-badge.png'
import channelImg2 from '../../assets/images/beta-release/brave-beta-badge.png'
import channelImg3 from '../../assets/images/beta-release/brave-release-badge.png'
import BraveBuildChannels from '../../components/organisms/BraveBuildChannels/BraveBuildChannels'
import MiddleBanner from '../../components/organisms/MiddleBanner/MiddleBanner'
import mobile from '../../assets/images/desktop-download-page/mobile.svg'
import chPlay from '../../assets/images/desktop-download-page/playstore.png'
import appStore from '../../assets/images/desktop-download-page/app-store-badge.png'
import QRCode from '../../assets/images/beta-release/mobile-plank-download-qr.png'

import './index.css'
import Footer from '../../components/organisms/Footer/Footer'

const bannerContenData = {
    title: 'Download Brave Beta',
    beforeTitle: 'PREVIEW THE LATEST FEATURES FOR DESKTOP',
    subTitle: 'Brave Beta is an early preview for new versions of Brave. This build showcases the newest advances that we’re bringing to your browser and it’s ready for your daily use. Brave Beta automatically sends us crash reports when things go wrong.',
    downloadNote: `<p>Downloads of this version of Brave are available for <a href="/">Windows 64-bit</a>, <a href="/">Windows 32-bit</a>, <a href="/">macOS Intel</a>, <a href="/">macOS ARM64</a> and <a href="/">Linux</a>.</p>`,
    buttonClassName: 'button__inside__banner',
    button: {
        label: "Download Beta for Windows 64-bit",
    }
}

const featureItemData = {
    title: 'Help improve Brave Beta',
    content: '<p>Brave Beta is a test, but relatively stable, version of soon-to-be-released features. We value your feedback and help in testing this early version of Brave. <p>Brave is open source and always available to <a href="/">review on GitHub</a> . For support, please visit <a href="/">community.brave.com.</a></p> </p>',
    button: "Join the Brave Community",
    image: featureImage,
    video: '',
    reverse: false
}

const imgInsideBanner = {
    src: bannerImg,
    alt: 'image inside banner',
    width: '85%',
    height: 'auto'
}

const braveBuildChannelData = {
    title: 'Brave build channels',
    headerContent: 'Brave has a fast iterative development cycle, split into three stages. New features are typically first introduced in the Nightly channel. After we’ve polished a bit, we’ll move those features into the Beta build. Then, after final testing, we’ll merge to the Release version of Brave. This is the version that most users access on a daily basis.',
    channels: [
        {
            title: 'Brave Nightly',
            image: channelImg1,
            detail: `<p>Brave Nightly is our testing and development version of Brave. The releases are updated every night and may contain bugs that can result in data loss.</p>`,
            link: {
                label: 'Learn more about Brave Nightly',
                href: '/'
            }
        },
        {
            title: 'Brave Beta',
            image: channelImg2,
            detail: `<p>Brave Beta is an early preview for new versions of Brave. This build showcases the newest advances that we’re bringing to our browser.</p>`,
            link: {
                label: 'Learn more about Brave Beta',
                href: '/'
            }
        },
        {
            title: 'Brave Release',
            image: channelImg3,
            detail: `<p>This is our <span>official release version</span> of Brave, with new releases landing approximately every four weeks.</p>`,
            link: {
                label: 'Learn more about Brave Nightly',
                href: '/'
            }
        }
    ]
}

const middleBannerData = {
    title: 'Brave Browser for mobile',
    image: mobile,
    content: "Brave is available as a fast, free, secure web browser for your mobile devices. Complete with a built-in ad blocker that prevents tracking, and optimized for mobile data and battery life savings. Get the Brave Browser (mobile) for Android or iOS.",
    QRCode: QRCode,
    buttonGroup: [
        {
            image: chPlay
        },
        {
            image: appStore
        }
    ]
}

export default function BetaRelease() {
    return (
        <Grid className='beta__release'>
            <Header />
            <Banner bannerContent={bannerContenData} img={imgInsideBanner} />
            <Grid sx={{ padding: { xs: '20px' }, maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', }}>
                <FeatureItem featureItem={featureItemData} />
                <BraveBuildChannels braveBuildChannelData={braveBuildChannelData} />
            </Grid>
            <MiddleBanner middleBannerData={middleBannerData} />
            <Footer />
        </Grid >
    )
}

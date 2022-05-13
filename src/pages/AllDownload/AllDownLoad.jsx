import { Grid } from '@mui/material'
import React from 'react'
import Banner from '../../components/organisms/Banner/Banner'
import Header from '../../components/organisms/Header/Header'
import faster from '../../assets/images/desktop-download-page/faster.svg'
import shields from '../../assets/images/desktop-download-page/shields.svg'
import importSettings from '../../assets/images/desktop-download-page/import-settings.svg'
import bannerImg from '../../assets/images/homepage/img-banner.png'
import DesktopDownloadFeature from '../../components/organisms/DesktopDownloadFeature/DesktopDownloadFeature'
import MiddleBanner from '../../components/organisms/MiddleBanner/MiddleBanner'
import Question from '../../components/organisms/Question/Question'
import Footer from '../../components/organisms/Footer/Footer'
import mobile from '../../assets/images/desktop-download-page/mobile.svg'
import chPlay from '../../assets/images/desktop-download-page/playstore.png'
import appStore from '../../assets/images/desktop-download-page/app-store-badge.png'
import QRCode from '../../assets/images/beta-release/mobile-plank-download-qr.png'


const bannerContenData = {
    title: 'Download Brave',
    beforeTitle: 'OUR FASTEST BROWSER EVER',
    subTitle: 'The new Brave browser blocks ads and trackers that slow you down and invade your privacy. Discover a new way of thinking about how the web can work.',
    downloadNote: `<p>Downloads of this version of the Brave Browser (desktop) are available for <a href="/">Windows 64-bit</a>, <a href="/">Windows 32-bit</a>, <a href="/">macOS Intel</a>, <a href="/">macOS ARM64</a> and <a href="/">Linux</a>.</p>`,
    buttonClassName: 'button__inside__banner',
    button: {
        label: "Download Brave for Windows 64-bit",
    }
}

const imgInsideBanner = {
    src: bannerImg,
    alt: 'image inside banner',
    width: '85%',
    height: 'auto'
}

const downloadFeatureData = [
    {
        image: faster,
        title: 'Browse up to 3x faster'
    },
    {
        image: shields,
        title: 'Block ads & trackers that follow you around'
    },
    {
        image: importSettings,
        title: 'Import settings, switch in 60 seconds'
    }
]

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

export default function AllDownLoad() {
    return (
        <Grid className="all__download">
            <Header />
            <Banner bannerContent={bannerContenData} img={imgInsideBanner} />
            <Grid sx={{ paddingTop: '100px', maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', marginTop: '-100px' }}>
                <DesktopDownloadFeature downloadFeatureData={downloadFeatureData} />
            </Grid>
            <MiddleBanner middleBannerData={middleBannerData} />
            <Question />
            <Footer />
        </Grid>
    )
}

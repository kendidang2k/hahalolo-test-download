import { Grid } from '@mui/material'
import React from 'react'
import PrivacyContent from '../../molecules/PrivacyContent/PrivacyContent'
import PrivacyHeader from '../../molecules/PrivacyHeader/PrivacyHeader'
import braveLogo from '../../../assets/images/homepage/brave-browser.svg'
import firefoxLogo from '../../../assets/images/homepage/firefox-logo.svg'
import safariLogo from '../../../assets/images/homepage/safari-logo.svg'
import chromeLogo from '../../../assets/images/homepage/chrome-logo.svg'
import checkIcon from '../../../assets/images/homepage/check-icon.svg'
import closeIcon from '../../../assets/images/homepage/close-icon.svg'
import limitedIcon from '../../../assets/images/homepage/limited-icon.svg'
import Label from '../../atoms/Label/Label'

import './index.css'
const privacyData = {
    title: 'Built-in features',
    browserList: [
        {
            img: braveLogo,
            name: 'Brave'
        },
        {
            img: firefoxLogo,
            name: 'Firefox'
        },
        {
            img: safariLogo,
            name: 'Safari'
        },
        {
            img: chromeLogo,
            name: 'Chrome'
        }
    ],
    privacyContent: [
        {
            subTitle: 'Invasive ads blocked',
            status: [
                checkIcon,
                closeIcon,
                closeIcon,
                limitedIcon
            ]
        },
        {
            subTitle: 'Cross-site trackers blocked',
            status: [
                checkIcon,
                limitedIcon,
                closeIcon,
                closeIcon
            ]
        },
        {
            subTitle: 'Cookies blocked',
            status: [
                checkIcon,
                limitedIcon,
                checkIcon,
                closeIcon
            ]
        },
        {
            subTitle: 'Fingerprinting blocked (cookie-less trackers)',
            status: [
                checkIcon,
                limitedIcon,
                limitedIcon,
                closeIcon
            ]
        },
        {
            subTitle: 'Malware & phishing protection*',
            status: [
                checkIcon,
                limitedIcon,
                limitedIcon,
                checkIcon
            ]
        },
        {
            subTitle: 'Protections against bounce tracking',
            status: [
                checkIcon,
                limitedIcon,
                limitedIcon,
                closeIcon
            ]
        },
        {
            subTitle: 'Anonymized network routing (Tor mode)',
            status: [
                checkIcon,
                closeIcon,
                closeIcon,
                closeIcon
            ]
        },
    ],
    note: '* Google safe browsing + malware & phishing protection from crowd-sourced lists. Table describes default browser configurations.'
}

export default function Privacy() {
    return (
        <Grid sx={{ padding: { xs: '0 35px', lg: 0 } }} className="cover__privacy">
            <PrivacyHeader />
            <PrivacyContent privacyData={privacyData} />
            <Label label={privacyData.note} type={"p"} color={'#6f6f6f'} className={"note"} />
        </Grid>
    )
}

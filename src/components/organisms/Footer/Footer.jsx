import { Grid } from '@mui/material'
import React from 'react'
import LinkGroupFooter from '../../molecules/LinkGroupFooter/LinkGroupFooter'
import Copyright from '../../molecules/Copyright/Copyright'


const footerLinkData = [
    {
        linkdata: [
            {
                title: 'Resources',
                linkList: [
                    {
                        title: 'F.A.Q',
                        href: '/'
                    },
                    {
                        title: 'Help Center',
                        href: '/'
                    },
                    {
                        title: 'Community',
                        href: '/'
                    },
                    {
                        title: 'Status',
                        href: '/'
                    },
                    {
                        title: 'Transparency Report',
                        href: '/'
                    },
                    {
                        title: 'Learn',
                        href: '/'
                    },
                    {
                        title: 'Insights',
                        href: '/'
                    },
                ]
            },
            {
                title: 'Privacy Policy',
                linkList: [
                    {
                        title: 'HakgokBrowser',
                        href: '/'
                    },
                    {
                        title: 'Website & Email',
                        href: '/'
                    },
                    {
                        title: 'Publishers & Creators',
                        href: '/'
                    },
                    {
                        title: 'Advertisers',
                        href: '/'
                    }
                ]
            },
        ]
    },
    {
        linkdata: [
            {
                title: 'Product',
                linkList: [
                    {
                        title: 'HakgokRelease',
                        href: '/'
                    },
                    {
                        title: 'HakgokBeta',
                        href: '/'
                    },
                    {
                        title: 'HakgokNightly',
                        href: '/'
                    }
                ]
            },
            {
                title: 'Company',
                linkList: [
                    {
                        title: 'About',
                        href: '/'
                    },
                    {
                        title: 'Research',
                        href: '/'
                    },
                    {
                        title: 'Careers',
                        href: '/'
                    },
                    {
                        title: 'Brand Assets',
                        href: '/'
                    },
                    {
                        title: 'Media Kit',
                        href: '/'
                    },
                    {
                        title: 'In the Press',
                        href: '/'
                    },
                    {
                        title: 'GitHub',
                        href: '/'
                    },
                    {
                        title: 'Blog',
                        href: '/'
                    },
                    {
                        title: 'Tor Onion Address',
                        href: '/'
                    }
                ]
            },
        ]
    },
    {
        linkdata: [
            {
                title: 'Social Media',
                linkList: [
                    {
                        title: 'Reddit',
                        href: '/'
                    },
                    {
                        title: 'Twitter',
                        href: '/'
                    },
                    {
                        title: 'Facebook',
                        href: '/'
                    },
                    {
                        title: 'YouTube',
                        href: '/'
                    }
                ]
            }
        ]
    },
    {
        linkdata: [
            {
                title: 'Contact',
            },
            {
                title: 'Support',
                linkList: [
                    {
                        title: 'community.brave.com',
                        href: '/'
                    }
                ]
            },
            {
                title: 'Advertising',
                linkList: [
                    {
                        title: 'adsales@brave.com',
                        href: 'adsales@brave.com',
                        email: true
                    }
                ]
            },
            {
                title: 'Business',
                linkList: [
                    {
                        title: 'bizdev@brave.com',
                        href: '/',
                        email: true
                    }
                ]
            },
            {
                title: 'Press',
                linkList: [
                    {
                        title: 'press@brave.com',
                        href: '/',
                        email: true
                    }
                ]
            }
        ]
    },
    {
        linkdata: [
            {
                title: 'Offices',
            },
            {
                title: 'HakgokSan Francisco',
                linkList: [
                    {
                        title: '580 Howard St. Unit 402,San Francisco, CA 94105',
                        href: '/',
                    }
                ]
            },
            {
                title: 'Choose a language',
                dropdown: [
                    {
                        title: 'English',
                        value: 'english'
                    },
                    {
                        title: 'Vietnamese',
                        value: 'vietnamese'
                    }
                ]
            }
        ]
    }
]

export default function Footer() {
    return (
        <Grid sx={{ backgroundColor: '#2c2c35', paddingBottom: '100px' }}>
            <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto' }}>
                <LinkGroupFooter linkData={footerLinkData} />
                <Copyright />
            </Grid>
        </Grid>
    )
}

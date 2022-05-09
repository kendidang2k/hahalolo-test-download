import { Grid } from '@mui/material';
import React from 'react'
import NavItem from '../../atoms/NavItem/NavItem';

import productIcon from '../../../assets/images/navbar/product.svg'
import browserIcon from '../../../assets/images/navbar/browser.svg'
import privacyIcon from '../../../assets/images/navbar/privacy.svg'
import businessIcon from '../../../assets/images/navbar/business.svg'
import resourceIcon from '../../../assets/images/navbar/resource.svg'

import './index.css'

const navData = [
    {
        title: 'Browser',
        icon: browserIcon,
        subData: [
            {
                subTitle: 'Downloads',
                link: [
                    {
                        title: 'Desktop',
                        href: '/'
                    },
                    {
                        title: 'Android',
                        href: '/'
                    },
                    {
                        title: 'IOS',
                        href: '/'
                    },
                    {
                        title: 'Linux',
                        href: '/'
                    },
                    {
                        title: 'Beta release',
                        href: '/'
                    }
                    ,
                    {
                        title: 'All downloads',
                        href: '/'
                    }
                ]
            },
            {
                subTitle: 'Compare',
                link: [
                    {
                        title: 'Brave .vs Chrome',
                        href: '/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Products',
        icon: productIcon,
        subData: [
            {
                link: [
                    {
                        title: 'Search',
                        href: '/'
                    },
                    {
                        title: 'Rewards',
                        href: '/'
                    },
                    {
                        title: 'Wallet',
                        href: '/'
                    },
                    {
                        title: 'Firewall + VPN',
                        href: '/'
                    },
                    {
                        title: 'Talk',
                        href: '/'
                    },
                    {
                        title: 'News',
                        href: '/'
                    },
                    {
                        title: 'Playlist',
                        href: '/'
                    },
                    {
                        title: 'All browser features',
                        href: '/'
                    },
                    {
                        title: 'Basic Attention Token',
                        href: '/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Privacy',
        icon: privacyIcon,
        subData: [
            {
                link: [
                    {
                        title: 'Why Brave ?',
                        href: '/'
                    },
                    {
                        title: 'Learn',
                        subContent: [
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What’s the fastest browser for surfing the Web ?",
                                subContentDetail: "In this article, we look at the fastest web browser and discuss some of the factors that affect browser speed, including the browser engine and javascript engine."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            }
                        ],
                        seeAllLink: '/',
                    },
                    {
                        title: 'Brave Shields',
                        href: '/'
                    },
                    {
                        title: 'Advanced privacy',
                        href: '/'
                    },
                    {
                        title: 'Privacy updates',
                        subContent: [
                            {
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            },
                            {
                                href: '',
                                subContentTitle: "What’s the fastest browser for surfing the Web ?",
                                subContentDetail: "In this article, we look at the fastest web browser and discuss some of the factors that affect browser speed, including the browser engine and javascript engine."
                            },
                            {
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            }
                        ],
                        seeAllLink: '/',
                    },
                    {
                        title: 'Web standards',
                        href: '/'
                    },
                    {
                        title: "Brave's privacy policy",
                        href: '/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Resource',
        icon: resourceIcon,
        subData: [
            {
                subTitle: 'BLOG',
                link: [
                    {
                        title: 'Latest news',
                        subContent: [
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What’s the fastest browser for surfing the Web ?",
                                subContentDetail: "In this article, we look at the fastest web browser and discuss some of the factors that affect browser speed, including the browser engine and javascript engine."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            }
                        ],
                        seeAllLink: '/',
                    },
                    {
                        title: 'Our research',
                        href: '/'
                    }
                ]
            },
            {
                subTitle: 'Help Center',
                link: [
                    {
                        title: 'Help center home',
                        href: '/'
                    },
                    {
                        title: 'Browser support',
                        href: '/'
                    },
                    {
                        title: 'Rewards support',
                        href: '/'
                    }
                ]
            },
            {
                subTitle: 'conmunity',
                link: [
                    {
                        title: 'Community home',
                        href: '/'
                    },
                    {
                        title: 'Feature requests',
                        href: '/'
                    }
                ]
            },
            {
                subTitle: 'release notes',
                link: [
                    {
                        title: 'Desktop',
                        href: '/'
                    },
                    {
                        title: 'iOS',
                        href: '/'
                    },
                    {
                        title: 'Android',
                        href: '/'
                    }
                ]
            }
        ]
    },
    {
        title: 'Business',
        icon: businessIcon,
        subData: [
            {
                link: [
                    {
                        title: 'Overview',
                        href: '/'
                    },
                    {
                        title: 'Ads media kit',
                        href: '/'
                    },
                    {
                        title: 'Latest news',
                        subContent: [
                            {
                                img: 'https://www.studytienganh.vn/upload/2021/05/98199.png',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What’s the fastest browser for surfing the Web ?",
                                subContentDetail: "In this article, we look at the fastest web browser and discuss some of the factors that affect browser speed, including the browser engine and javascript engine."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            }
                        ],
                        seeAllLink: '/',
                    },
                    {
                        title: 'Podcast',
                        subContent: [
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What’s the fastest browser for surfing the Web ?",
                                subContentDetail: "In this article, we look at the fastest web browser and discuss some of the factors that affect browser speed, including the browser engine and javascript engine."
                            },
                            {
                                img: '/',
                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            }
                        ],
                        seeAllLink: '/',
                    },
                    {
                        title: 'Advertiser resources',
                        subContent: [
                            {

                                href: '',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            },
                            {
                                href: '',
                                subContentTitle: "What’s the fastest browser for surfing the Web ?",
                                subContentDetail: "In this article, we look at the fastest web browser and discuss some of the factors that affect browser speed, including the browser engine and javascript engine."
                            },
                            {
                                href: '',
                                img: 'https://www.studytienganh.vn/upload/2021/05/98199.png',
                                subContentTitle: "What's the best private browser ?",
                                subContentDetail: "Many users rely on private browsers to keep their Internet habits away from prying eyes. But with so many options out there, what's the best private browser for you? In this article we examine the choices."
                            }
                        ],
                        seeAllLink: '/',
                    },
                ]
            },
            {
                subTitle: 'Creators',
                link: [
                    {
                        title: 'Overview',
                        href: '/'
                    },
                    {
                        title: 'Creators media kit',
                        href: '/'
                    }
                ]
            }

        ]
    },

]

export default function Navbar() {

    return (
        <Grid sx={{ maxWidth: { xs: '100%', md: '500px' }, width: { xs: '100%', md: 'auto', lg: '500px' }, position: { xs: 'fixed', md: 'relative' }, bottom: '0', left: 0, backgroundColor: { xs: 'rgb(0 64 114)', md: 'transparent' } }}>
            <Grid className='navbar__wrapper' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                {
                    navData && navData.map((item, index) => {
                        return (
                            <NavItem navItem={item} key={index} />
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../molecules/Navbar/Navbar'
import Logo from '../../atoms/Logo/Logo'
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup'
import { bgcolor } from '@mui/system'

import './index.css'
import Link from '../../atoms/Link/Link'

/**
 * author: Loc
 * @param: 
 * @returns 
 */

const buttonGrData = [
    {
        label: 'Download Brave',
        isDownloadButton: true
    },
    {
        label: 'Try Brave Search',
    }
]

export default function Header() {

    const [headerActive, setHeaderActive] = useState(false)

    const changeHeaderBackground = () => {
        if (window.scrollY > 100) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
    }

    window.addEventListener('wheel', changeHeaderBackground)




    return (
        <Grid className={headerActive ? 'header__active header__bar' : 'header__bar'} sx={{ position: 'fixed', left: '0', top: 0, width: '100%', height: { xs: '70px', lg: '100px' }, backgroundColor: 'transparent', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: { xs: '0 10px', lg: '0 20px' }, transition: '.3s ease-in-out' }}>
            <Navbar />
            <Logo />
            <ButtonGroup dataArray={buttonGrData} isHeaderButton={true} />
        </Grid>
    )
}

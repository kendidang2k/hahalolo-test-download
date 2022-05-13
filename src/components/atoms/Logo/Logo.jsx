import { Box } from '@mui/material'
import Image from '../Image/Image'
import React from 'react'
import logo from '../../../assets/images/logo/logo.svg'

import './Logo.css'
/**
 * 
 * @returns jsx
 */

export default function Logo() {
    return (
        <a className='cover__logo' href='/'>
            <Image src={logo} alt={"logo"} />
            Hakgok
        </a >
    )
}

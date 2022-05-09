import { Box } from '@mui/material'
import React from 'react'
import Image from '../Image/Image'
import Label from '../Label/Label'

import './index.css'

/**
 * Author: Loc
 * @param {*} src: String (url of icon svg) , title: String (title of icon)
 * @returns jsx
 */
export default function PrivacyIcon({ src, title }) {
    return (
        <Box className="privacy__icon" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }} >
            <Image src={src} alt={"privacy icon"} />
            {
                title && <Label label={title} type={'p'} classname={'privacy__icon__title'} color={"#3d3d3d"} />
            }
        </ Box>
    )
}

import { Box } from '@mui/material'
import React from 'react'
import checkIcon from '../../../assets/images/homepage/check-icon.svg'
import closeIcon from '../../../assets/images/homepage/close-icon.svg'
import limitedIcon from '../../../assets/images/homepage/limited-icon.svg'
import Label from '../../atoms/Label/Label'
import PrivacyIcon from '../../atoms/PrivacyIcon/PrivacyIcon'

import './index.css'

const iconData = [
    {
        title: 'Strong protection',
        src: checkIcon
    },
    {
        title: 'No protection',
        src: closeIcon
    },
    {
        title: 'Limited protection (or off by default)',
        src: limitedIcon
    }
]
/**
 * 
 * @returns 
 */
export default function PrivacyHeader() {
    return (
        <Box className="privacy__header" sx={{ marginBottom: '40px' }}>
            <Label label={'Online privacy by default: Brave vs. other browsers'} type={'h3'} color={"#353dab"} marginBottom={"30"} />
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: { xs: 'center', md: 'flex-start' }, flexDirection: { xs: 'column', md: 'row' }, }}>
                {
                    iconData && iconData.map((iconItem, index) => {
                        return (
                            <Box key={index} sx={{ marginRight: { xs: 0, md: '20px' } }}>
                                <PrivacyIcon title={iconItem.title} src={iconItem.src} />
                            </Box>
                        )
                    })
                }
            </Box>


        </Box>
    )
}

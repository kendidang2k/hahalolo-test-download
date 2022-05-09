import { Box } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'
import PrivacyContentHeader from '../../atoms/PrivacyContentHeader/PrivacyContentHeader'
import PrivacyContentDetail from '../../atoms/PrivacyContentDetail/PrivacyContentDetail'

/**
 * 
 * @returns jsx
 */

export default function PrivacyContent({ privacyData }) {
    return (
        <Box sx={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0px 0px 16px -3px rgba(159,159,159,0.89)' }}>
            <PrivacyContentHeader title={privacyData.title} data={privacyData.browserList} />
            {
                privacyData.privacyContent && privacyData.privacyContent.map((item, index) => {
                    return (
                        <Box key={index}>
                            <PrivacyContentDetail detailData={item} index={index} />
                        </Box>
                    )
                })
            }
        </Box>
    )
}

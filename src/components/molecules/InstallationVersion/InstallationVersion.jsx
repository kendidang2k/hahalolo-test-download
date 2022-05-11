import { Box, Grid } from '@mui/material'
import React from 'react'
import CodeScreen from '../../atoms/CodeScreen/CodeScreen'
import Label from '../../atoms/Label/Label'

import './index.css'

/**
 * Author: Loc
 * @param {versionData,id} versionData : object (data of single version), id : String (id of single version) 
 * @returns jsx
 */

export default function InstallationVersion({ versionData, id }) {
    return (
        <Grid id={id ? id : ''} sx={{ paddingTop: '50px' }} className="cover__version">
            <Box sx={{ marginBottom: { xs: '30px', md: '60px' } }}>
                <Label label={versionData.title} type={'h3'} className={"title"} />
                {
                    versionData.subTitle && <Label html={versionData.subTitle} className={"subTitle"} />
                }
            </Box>
            <Box>
                {
                    versionData.codeGuide && versionData.codeGuide.map((item, index) => {
                        return (
                            <Grid key={index}>
                                <Label html={item.subTitle} className={"sub__title"} />
                                {
                                    item.subContent && <Label html={item.subContent} className={"sub__content"} />
                                }
                                <CodeScreen code={item.code} />
                            </Grid>
                        )
                    })
                }
            </Box>
            {
                versionData.lastNote && <Label label={versionData.lastNote} type={"p"} className={"last__note"} />
            }
        </Grid>
    )
}

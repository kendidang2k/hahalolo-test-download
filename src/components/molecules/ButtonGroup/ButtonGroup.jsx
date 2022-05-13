import { Grid } from '@mui/material'
import React from 'react'
import { handleDownload } from '../../../functions/handleDownload'
import Button from '../../atoms/Button/Button'

import './index.css'

export default function ButtonGroup({ dataArray, isHeaderButton }) {

    return (
        <Grid className={isHeaderButton ? "cover__header__button" : "cover__button__gr"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {
                dataArray && dataArray.map((item, index) => {

                    return (
                        <Button label={item.label} key={index} handleFunction={item.isDownloadButton ? handleDownload : null} />
                    )
                })
            }
        </Grid>
    )
}

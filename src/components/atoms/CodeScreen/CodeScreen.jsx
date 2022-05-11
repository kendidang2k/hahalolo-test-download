import { Box, Grid } from '@mui/material'
import React from 'react'
import Label from '../Label/Label'

import './index.css'

export default function CodeScreen({ code }) {
    return (
        code && <Grid sx={{ padding: '20px', backgroundColor: '#ededf1', }} className='cover__code__screen'>
            {
                code.map((item, index) => {
                    return (
                        <Box key={index} sx={{ textAlign: 'left' }}>
                            <Label label={item} type={'p'} />
                        </Box>
                    )
                })
            }
        </Grid>
    )
}

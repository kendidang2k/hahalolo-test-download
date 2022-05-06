import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Button from '../../atoms/Button/Button'
import Label from '../../atoms/Label/Label'

/**
 * Author: Loc
 * @returns jsx
 */

export default function BannerContent() {

    return (
        <Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px', marginBottom: '30px' }}>
                <Label label={"The best privacy online"} type={"h2"} color={"#fff"} marginBottom={20} />
                <Label label={'3x faster than Chrome. Better protection from Google and Big Tech.'} type={'h5'} color={'#fff'} marginBottom={20} />
                <Button label={"Download Brave"} type={'download'} />
            </Box>
        </Grid>
    )
}

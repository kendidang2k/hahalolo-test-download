import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Label from '../../atoms/Label/Label'
import Link from '../../atoms/Link/Link'
import Logo from '../../atoms/Logo/Logo'

import './index.css'

export default function Copyright() {
    return (
        <Grid sx={{ paddingTop: '30px', display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'space-between' }, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box>
                <Logo />
            </Box>
            <Box className="cover__footer__terms">
                <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    <Link href={"/"} label={"Terms of Use"} />
                    <Link href={"/"} label={"Report a Security Issue"} />
                </Box>
                <Label label={"© 2015 - 2022 Hakgok Software, Inc. | All rights reserved"} type={'p'} color={"#adb5bd"} />
            </Box>

        </Grid>
    )
}

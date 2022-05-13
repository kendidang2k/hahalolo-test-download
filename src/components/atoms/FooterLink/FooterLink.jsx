import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Label from '../Label/Label'
import Link from '../Link/Link'
import Select from '../Select/Select'

import './index.css'

export default function FooterLink({ linkItem }) {

    return (
        <Grid className="cover__footer__link__item" sx={{ marginBottom: '40px' }}>
            <Label label={linkItem.title} type={"p"} color={"#fff"} className={"title"} />
            {
                linkItem.linkList && linkItem.linkList.map((item, index) => {
                    return (
                        <Box className="footer__link" sx={{ marginBottom: '10px' }} key={index}>
                            {
                                item.email ?
                                    <Link label={item.title} mailto={true} href={item.href} />
                                    :
                                    <Link label={item.title} href={item.href} />
                            }
                            {
                                item.dropdown && <Select name={"language"} options={item.dropdown} id={"language"} />
                            }
                        </Box>
                    )
                })
            }
        </Grid>
    )
}

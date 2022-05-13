import { Box, Grid } from '@mui/material'
import React from 'react'
import Button from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'
import Label from '../../atoms/Label/Label'
import Link from '../../atoms/Link/Link'
import twitter from '../../../assets/images/compare/twitter.svg'
import rightArrow from '../../../assets/images/compare/right-arrow.svg'

import './index.css'

export default function QuestionContentItem({ questionContentItemData }) {
    return (
        <Grid container className='question__content__item' sx={{ margin: '30px 0', border: { xs: 'none', md: '1px solid #b1b1b1' }, borderRadius: '20px' }}>
            <Grid className='cover__img' item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={questionContentItemData.img} alt={"item image"} />
            </Grid>
            <Grid item xs={12} md={8} sx={{ padding: { xs: '20px 0 0 0 ', md: '30px' }, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', }}>
                <Label label={questionContentItemData.smallTitle} type={'p'} className={"small__title"} />
                <Label label={questionContentItemData.title} type={'h5'} />
                <Label label={questionContentItemData.content} type={'p'} className={"content"} />
                <Grid sx={{ display: 'flex', alignItems: 'center ', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Link label={`Read this article`} href={"/"} className={"read__this"} />
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Link href={"/"} label={<Image src={twitter} alt={"twitter icon"} />} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

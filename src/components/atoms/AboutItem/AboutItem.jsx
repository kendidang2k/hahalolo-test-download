import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Label from '../Label/Label'
import Image from '../Image/Image'
import downArrow from '../../../assets/images/homepage/down-arrow.svg'

import './index.css'

export default function AboutItem({ aboutContentItem, index }) {

    const [isDetailVisible, setIsDetailVisible] = useState(false)

    return (
        <Grid sx={{ padding: { xs: '10px 0' }, borderBottom: '1px solid #e9e9f4' }} className={isDetailVisible ? `about__content__item about__item${index} change__arrow` : `about__content__item about__item${index}`}>
            <Grid className="item__detail" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', cursor: 'pointer' }} onClick={() => setIsDetailVisible(!isDetailVisible)}>
                <Label label={aboutContentItem.questionTitle} component={'p'} />
                <Image src={downArrow} alt={"about icon"} width={"10px"} height={"10px"} />
            </Grid>
            <Grid className={isDetailVisible ? "item__detail__content" : "item__detail__content__hidden"}>
                <Label html={aboutContentItem.answer} />
            </Grid>
        </Grid>
    )
}

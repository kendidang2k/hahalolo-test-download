import { Grid } from '@mui/material'
import React from 'react'
import Image from '../../atoms/Image/Image'
import Label from '../../atoms/Label/Label'

import './index.css'

export default function QuestionHeader({ questionHeaderData }) {
    return (
        <Grid className='question__header' sx={{ paddingTop: '50px' }}>
            <Label label={questionHeaderData.question} type={"h3"} className={"question"} />
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: { xs: '20px 10%', md: '20px 20%' } }}>
                <Image src={questionHeaderData.img1} alt={"compare image"} />
                <Label label={"VS"} type={"h3"} className={"vs"} />
                <Image src={questionHeaderData.img2} alt={"compare image"} />
            </Grid>
            <Label label={questionHeaderData.answer} type={"p"} className={"answer"} />
        </Grid>
    )
}

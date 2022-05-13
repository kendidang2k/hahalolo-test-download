import { Grid } from '@mui/material'
import React from 'react'
import Image from '../../atoms/Image/Image'
import Label from '../../atoms/Label/Label'

export default function QuestionHeader({ questionData }) {
    return (
        <Grid>
            <Label label={questionData.question} type={"h3"} />
            <Grid>
                <Image src={questionData.img1} alt={"compare image"} />
                <Label label={"VS"} type={"h3"} />
                <Image src={questionData.img2} alt={"compare image"} />
            </Grid>
            <Label label={questionData.answer} type={"p"} />
        </Grid>
    )
}

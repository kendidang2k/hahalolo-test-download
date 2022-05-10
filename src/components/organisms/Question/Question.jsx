import { Grid } from '@mui/material'
import React from 'react'
import Label from '../../atoms/Label/Label'

import './index.css'

const questionData = {
    question: 'Interested in trying out early versions of Brave?',
    answer: `<p>New features are typically introduced in the <a href="/">Nightly channel</a>. After we’ve worked out the kinks we move them into <a href="/">the Beta build</a> for a final check before merging them into the Release version of Brave you see here.</p>`
}

/**
 * Author: Loc
 * @returns jsx
 */

export default function Question() {
    return (
        <Grid className='question'>
            <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', padding: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Label label={questionData.question} type={"h3"} />
                <Label html={questionData.answer} className={"answer"} />
            </Grid>
        </Grid>
    )
}

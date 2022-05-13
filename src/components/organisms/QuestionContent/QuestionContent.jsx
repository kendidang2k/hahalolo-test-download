import { Grid } from '@mui/material'
import React from 'react'
import QuestionContentItem from '../../molecules/QuestionContentItem/QuestionContentItem'

export default function QuestionContent({ questionContentData }) {
  return (
    <Grid className='question__content'>
      {
        questionContentData && questionContentData.map((item, index) => {
          return (
            <Grid key={index}>
              <QuestionContentItem questionContentItemData={item} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

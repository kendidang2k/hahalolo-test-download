import { Typography } from '@mui/material'
import React from 'react'

import './Label.css'
/**
 * Author: Loc
 * @param {*} label: String (text of label) , p:String (type of paragraph tag), color: String (color code of text), marginBottom: int (range with under element),className:String (classname of tag)
 * @returns jsx
 */
export default function Label({ label, type, color, marginBottom, className, html }) {
    return (
        html ? <p dangerouslySetInnerHTML={{ __html: html }} className={className}></p >
            :
            <Typography className={className} variant={type} component={type} sx={{ color: `${color}`, marginBottom: `${marginBottom}px`, textAlign: 'center' }}>
                {label}
            </Typography>

    )
}

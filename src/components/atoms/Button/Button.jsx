import React from 'react'
import { ButtonBase } from '@mui/material'
import { FiDownload } from "react-icons/fi";

import './index.css'
import Image from '../Image/Image';

/**
 * 
 * @param lable: String (lable for button), type: String (type of button download or base)
 * @returns jsx
 */

export default function Button({ label, type, image }) {
    return (
        <ButtonBase className={type === 'download' ? 'download__button' : 'button__base'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '40px' }}>
            {
                type === 'download' && <FiDownload style={{ marginRight: '10px', fontSize: '25px' }} />
            }
            {label && label}
            {
                image && <Image src={image} alt={"image"} />
            }
        </ButtonBase>
    )
}

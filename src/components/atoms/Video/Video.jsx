import React from 'react'
import ReactPlayer from 'react-player'

/**
 * Author: Loc
 * @param {0} url:String (url of video) 
 * @returns jsx
 */

export default function Video({ url }) {
    return (
        <ReactPlayer
            width={"100%"}
            url={url}
        />
    )
}

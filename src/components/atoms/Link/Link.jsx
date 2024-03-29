import React from 'react'

/**
 * 
 * @param {*} label:String (text of link), href:String (link to destination page) 
 * @returns 
 */

export default function Link({ label, href, mailto, className }) {
    return (
        <a href={mailto ? `mailto:${href}` : href} className={className}> {label}</a >
    )
}

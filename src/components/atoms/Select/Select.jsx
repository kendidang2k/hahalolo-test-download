import React from 'react'

/**
 * Author: Loc
 * @param {*} name: String(name of select ) , id: String (id of select), options: array(list of option)
 * @returns jsx
 */
export default function Select({ name, id, options }) {
    return (
        <select name={name} id={id}>
            {
                options && options.map((item, index) => {
                    return (
                        <option value={item.value} key={index}>{item.title}</option>
                    )
                })
            }
        </select>
    )
}

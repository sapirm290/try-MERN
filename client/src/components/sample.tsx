import React from 'react'
import { FormProps } from '../types/index'

const sample = (props: FormProps) => {
    return (
        <div>
            {props.first_name}
        </div>
    )
}

export default sample

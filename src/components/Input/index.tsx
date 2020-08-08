import React from 'react'

import { StateContext } from '../Form'

interface InputProps {
    name: string
    text: string
}

export function Input(props: InputProps) {
    const context = React.useContext(StateContext)

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        context?.setState({[props.name]: e.target.value})
    }

    const value: string | undefined = context?.state[props.name]
    return (
        <div className="input">
            <input
                type="text"
                name={props.name}
                value={value? value : ''}
                onChange={changeHandler}
                placeholder={props.text}
            />
        </div>
    )
}
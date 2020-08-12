import React from 'react'

import './Input.scss'

import { StateContext } from '../Form'

interface InputProps {
    name: string
    text: string
}

export function Input(props: InputProps) {
    const context = React.useContext(StateContext)
    const [focus, setFocus] = React.useState(false)
    const value: string | undefined = context?.state[props.name]

    React.useEffect(() => {
        if (value === undefined) {
            context?.setState({[props.name]: ''})
        }
    }, [props.name, context, value])

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        context?.setState({[props.name]: e.target.value})
    }

    function focusHandler() {
        setFocus(true)
    }
    function blurHandler() {
        if (!value) {
            setFocus(false)
        }
    }
    
    return (
        <div className="input">
            <div className={'input__text ' + (focus? 'input__text_focus' : '')}>
                {props.text}
            </div>

            <input
                className="input__field"
                type="text"
                name={props.name}
                value={value? value : ''}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
            />
        </div>
    )
}
import React from 'react'

import './Form.scss'

interface ContextType {
    state: any
    setState: (statePart: {}) => void
}

export const StateContext = React.createContext<ContextType | undefined>(undefined)

interface FormProps {
    children: React.ReactNode
    returnValue: (state: {}) => void
}

export function Form({ children, returnValue }: FormProps) {
    const [state, setState] = React.useState({})

    function updateState(statePart: {}) {
        setState({
            ...state,
            ...statePart
        })
    }

    function submitHandler(e: React.SyntheticEvent) {
        e.preventDefault()

        returnValue(state)
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <StateContext.Provider value={{state, setState: updateState}}>
                    {children}
                </StateContext.Provider>
            </form>
        </div>
    )
}
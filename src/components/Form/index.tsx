import React from 'react'

interface State {
    firstName: string
    secondName: string
    email: string
}

const initState: State = {
    firstName: '',
    secondName: '',
    email: ''
}

interface ContextType {
    state: State
    setState: (statePart: {}) => void
}

export const StateContext = React.createContext<ContextType | undefined>(undefined)

interface FormProps {
    children: React.ReactNode
    returnValue: (state: State) => void
}

export function Form({ children, returnValue }: FormProps) {
    const [state, setState] = React.useState(initState)

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
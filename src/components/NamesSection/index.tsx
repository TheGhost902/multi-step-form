import React from 'react'

import { StateContext } from '../Form'

export function NamesSection() {
    const context = React.useContext(StateContext)

    return (
        <div className="names-section">
            <input
                type="text"
                placeholder="First name"
                value={context?.state.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    context?.setState({firstName: e.target.value})
                }
            />
        </div>
    )
}
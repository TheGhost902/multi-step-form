import React from 'react'

interface ScreenProps {
    children: React.ReactNode
}

export function Screen({ children }: ScreenProps) {
    return (
        <div className="screen">
            {children}
        </div>
    )
}
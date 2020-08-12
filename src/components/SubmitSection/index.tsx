import React from 'react'

import './SubmitSection.scss'

interface SubmitSectionProps {
    text?: string
}

export function SubmitSection({ text = 'Send' }: SubmitSectionProps) {
    return (
        <div className="submit-section">
            <button type="submit">{text}</button>
        </div>
    )
}
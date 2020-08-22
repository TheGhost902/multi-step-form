import React from 'react'

interface MultiScreenProps {
    children: React.ReactNode
}

export function MultiScreen({ children }: MultiScreenProps) {
    const [screenNumber, setScreenNumber] = React.useState(0)
    const childs = React.Children.toArray(children)

    function prev() {
        if (screenNumber > 0) setScreenNumber(screenNumber - 1)
    }

    function next() {
        if (screenNumber < childs.length - 1) setScreenNumber(screenNumber + 1)
    }

    return (
        <div className="multiscreen">
            {childs[screenNumber]}

            <button
                className="multiscreen__prev"
                type="button"
                onClick={prev}
            >
                prev
            </button>

            <button
                className="multiscreen__next"
                type="button"
                onClick={next}
            >
                next
            </button>
        </div>
    )
}
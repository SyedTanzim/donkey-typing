import React from 'react'

export const ResultsScreen = ({ accuracy, wpm, reset }) => {

    return (
        <>
            <h1>Test Complete</h1>
            <h3>Accuracy: {accuracy}</h3>
            <h3>Words Per Minute: {wpm}</h3>
            <button onClick={reset}>Reset</button>
        </>
    )
}
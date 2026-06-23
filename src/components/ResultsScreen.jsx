import React from 'react'

export const ResultsScreen = ({ accuracy, wpm, reset }) => {

    return (
        <div className='flex flex-col items-center gap-6 bg-neutral-800 rounded-xl p-8'>
            <h1 className = 'text-neutral-100 text-5xl font-bold '>Test Complete</h1>
            <h3 className = 'text-blue-400  text-3xl font-bold'>Accuracy: {accuracy}</h3>
            <h3 className = 'text-green-400  text-3xl font-bold'>Words Per Minute: {wpm}</h3>
            <button className = 'cursor-pointer bg-neutral-700 hover:bg-neutral-600 text-neutral-100 px-6 py-2 rounded-lg' onClick={reset}>Reset</button>
        </div>
    )
}
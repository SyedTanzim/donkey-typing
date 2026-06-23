import React from 'react'

export const TextDisplay = ({ practiceText, typedText }) => {

    const characters = practiceText.split('');

    const characterElements = characters.map((char, i) => {
        let className;

        if (i < typedText.length) {
            if (typedText[i] == practiceText[i]) {
                className = 'text-green-400'
            }
            else {
                className = 'text-red-400';
            }
        } else {
            className = 'text-gray-400'
        }

        return <span key={i} className={className}>{char}</span>
    })

    return (
        <p className='font-mono text-3xl leading-relaxed'>{characterElements}</p>
    )

}
import React from 'react'

const TextDisplay = ({ practiceText, typedText }) => {

    const characters = practiceText.split('');

    const characterElements = characters.map((char, i) => {
        let className;

        if (i < typedText.length) {
            if (typedText[i] == practiceText[i]) {
                className = 'text-green-600'
            }
            else {
                className = 'text-red-600';
            }
        } else {
            className = 'text-gray-600'
        }

        return <span key={i} className={className}>{char}</span>
    })

    return (
        <p>{characterElements}</p>
    )

}

export default TextDisplay
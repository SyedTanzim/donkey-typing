import { useState } from 'react';
import { calculateAccuracy, calculateWPM } from '../utils/typingStats';
import { getRandomText } from '../utils/words';


export function useTypingTest() {

    const [practiceText, setPracticeText] = useState(getRandomText());
    const [typedText, setTypedText] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);


    function handleInput(newValue) {
        if (startTime == null) {
            setStartTime(Date.now());
        }

        setTypedText(newValue);

        if (newValue.length == practiceText.length) {
            setEndTime(Date.now());
        }
    }

    function reset() {
        setPracticeText(getRandomText());
        setTypedText('');
        setStartTime(null);
        setEndTime(null);
    }

    const accuracy = calculateAccuracy(practiceText, typedText);
    const wpm = calculateWPM(typedText, startTime, endTime);
    const isFinished = endTime != null;

    return {practiceText, typedText, handleInput, reset, accuracy, wpm, isFinished}
}
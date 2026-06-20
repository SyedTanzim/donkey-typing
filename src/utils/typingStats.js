export function calculateAccuracy(practiceText, typedText) {
    if (typedText.length == 0) {
        return 0;
    }

    let correctCount = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (practiceText[i] == typedText[i]) {
            correctCount = correctCount + 1;
        }
    }

    const accuracy = Math.round((correctCount / typedText.length) * 100);
    console.log(accuracy, correctCount);
    return accuracy;
}

export function calculateWPM(typedText, startTime, endTime) {
    if (startTime === null) {
        return 0;        
    }
    
    const elapsedMillisecond = endTime - startTime;

    if (elapsedMillisecond < 1) {
        return 0;
    }

    const elapsedMinutes = elapsedMillisecond / 60000;

    const wordsTyped = typedText.length / 5;
    const wpm = Math.round(wordsTyped / elapsedMinutes);
    console.log(wpm);
    return wpm;
}
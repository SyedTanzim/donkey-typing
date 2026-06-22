import { TextDisplay } from './components/TextDisplay'
import { useTypingTest } from './hooks/useTypingTest';

function App() {
  const { practiceText, typedText, handleInput, reset, accuracy, wpm } = useTypingTest();

  return (
    <>
      <TextDisplay practiceText={practiceText} typedText={typedText}></TextDisplay>
      <input value={typedText} onChange={(e) => handleInput(e.target.value)} />
      <p>Accuracy: {accuracy}</p>
      <p>WPM: {wpm}</p>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
import { TextDisplay } from './components/TextDisplay'
import { useTypingTest } from './hooks/useTypingTest';

function App() {
  const { practiceText, typedText, handleInput, reset, accuracy, wpm, isFinished } = useTypingTest();

  const renderComponent = () => {
    if (isFinished) {
      return (
        <>
          <p>Accuracy: {accuracy}</p>
          <p>WPM: {wpm}</p>
          <button onClick={reset}>Reset</button>
        </>
      )
    } else {
      return (
        <>
          <TextDisplay practiceText={practiceText} typedText={typedText}></TextDisplay>
          <input value={typedText} onChange={(e) => handleInput(e.target.value)} />
        </>
      )
    }
  }

  return (
    <>
      {renderComponent()}
    </>
  )

}

export default App
import { TextDisplay } from './components/TextDisplay'
import { useTypingTest } from './hooks/useTypingTest';
import { ResultsScreen } from './components/ResultsScreen';

function App() {
  const { practiceText, typedText, handleInput, reset, accuracy, wpm, isFinished } = useTypingTest();

  const renderComponent = () => {
    if (isFinished) {
      return (
        <>
          <ResultsScreen accuracy={accuracy} wpm={wpm} reset={reset}></ResultsScreen>
        </>
      )
    } else {
      return (
        <>
          <TextDisplay practiceText={practiceText} typedText={typedText}></TextDisplay>
          <input className='outline-1' value={typedText} onChange={(e) => handleInput(e.target.value)} />
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
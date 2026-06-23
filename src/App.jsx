import { TextDisplay } from './components/TextDisplay'
import { useTypingTest } from './hooks/useTypingTest';
import { ResultsScreen } from './components/ResultsScreen';

function App() {
  const { practiceText, typedText, handleInput, reset, accuracy, wpm, isFinished } = useTypingTest();

  const renderComponent = () => {
    if (isFinished) {
      return (
        <ResultsScreen accuracy={accuracy} wpm={wpm} reset={reset}></ResultsScreen>
      )
    } else {
      return (
        <>
          <TextDisplay practiceText={practiceText} typedText={typedText}></TextDisplay>
          <input autoFocus className='opacity-0 absolute top-0 left-0 w-full h-full cursor-default' value={typedText} onChange={(e) => handleInput(e.target.value)} />
        </>
      )
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-neutral-900'>
      {renderComponent()}
    </div>
  )

}

export default App
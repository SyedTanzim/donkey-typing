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
    <div className='flex flex-col min-h-screen'>
      <nav className='flex items-center w-full h-12 bg-neutral-900'>
        <h3 className='p-10 font-mono text-xl text-neutral-400'>Donkey Typing</h3>
      </nav>

      <div className='flex-1 flex justify-center items-center bg-neutral-900 relative p-20'>
        {renderComponent()}
      </div >

      <footer className='flex items-center p-10  w-full h-16 bg-neutral-900'>
        <div className='flex gap-5 font-mono text-xl text-neutral-400'>
          <a href="https://github.com/SyedTanzim/donkey-typing" target='blank' className='flex items-center gap-2 hover:text-neutral-100 cursor-pointer'>Github</a>
          <a href="https://www.linkedin.com/in/syedtanzimwajih/" target='blank' className='flex items-center gap-2 hover:text-neutral-100 cursor-pointer'>Linkedin</a>
        </div>
      </footer>
    </div>
  )

}

export default App
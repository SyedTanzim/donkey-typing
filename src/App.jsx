import { useState } from 'react'
import { getRandomText } from './utils/words'
import {calculateAccuracy, calculateWPM} from './utils/typingStats'
function App() {
  const [practiceText, setPracticeText] = useState(getRandomText());
  const [input, setInput] = useState('');
  
  return (
    <>
      <main className='h-screen w-full flex justify-center items-center p-8 bg-neutral-800 text-neutral-200'>
        {practiceText}
      </main>
    </>
  )
}

calculateAccuracy('hello', 'helllooo');
export default App

import { useState } from 'react'
import { getRandomText } from './utils/words'

function App() {
  const [count, setCount] = useState(0)
  const [practiceText, setPracticeText] = useState(getRandomText());
  
  return (
    <>
      <main className='h-screen w-full flex justify-center items-center p-8 bg-neutral-800 text-neutral-200'>
        {practiceText}
      </main>
    </>
  )
}

export default App

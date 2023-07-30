import { useEffect, useState } from 'react';
import './App.css'
import Memorize from './components/Memorize/Memorize';

function App() {
  const [difficulty, setDifficulty] = useState('medium');
  const [isInGame, setIsInGame] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleBack = () => {
    setIsInGame(false)
  }

  return (
    <div className='App'>
      {isInGame ?
        <Memorize difficulty={difficulty} handleBack={() => handleBack()}/>
        :
        <div className='container mx-auto bg-cover'>
          <div className='grid grid-rows-5'>
            <div>
            </div>
            <div>
            </div>
            <div className="text-6xl font-bold text-white text-center">
              <div className=''>
                Memorize Modyo
              </div>
            </div>
            <div>
            </div>
            <div className='text-center'>
              <button onClick={() => setIsInGame(true)} className='text-4xl 
                font-bold
                bg-transparent
                animate-pulse
                hover:bg-violet-700 transition ease-in-out duration-300
                text-white 
                text-center 
                border-2 
                rounded-full
                border-sky-500 
                px-10'
              >
                Play!
              </button>
            </div>
            <div className='text-center'>
              <div className="text-3xl font-bold text-white text-center mt-10">
                Difficulty
              </div>
            </div>
          </div>
          <div className='grid grid-rows-3 mt-5'>
            <div className={(difficulty === 'easy' ? 'text-violet-600' : 'text-white')+' text-2xl text-center animate-pulse'}>
              <button onClick={() => setDifficulty('easy')} className='hover:text-violet-600 transition ease-in-out duration-500'>
                Easy
              </button>
            </div>
            <div className={(difficulty==='medium' ? 'text-violet-600' : 'text-white')+' text-2xl text-center animate-pulse'}>
              <button onClick={() => setDifficulty('medium')} className='hover:text-violet-600 transition ease-in-out duration-500'>
                Medium
              </button>
            </div>
            <div className={(difficulty==='hard' ? 'text-violet-600' : 'text-white')+' text-2xl text-center animate-pulse'}>
              <button onClick={() => setDifficulty('hard')} className='hover:text-violet-600 transition ease-in-out duration-500'>
                Hard
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default App

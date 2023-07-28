import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='container mx-auto bg-cover'>
        <div className='grid grid-rows-3'>
          <div className="text-6xl font-bold text-white text-center animate-pulse mt-20">
            Memorize Modyo
          </div>
          <button className="text-4xl font-bold text-white text-center animate-pulse mt-8">
            Play!
          </button>
          <button className="text-4xl font-bold text-white text-center animate-pulse">
            Difficulty
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Logos'>
        <svg width="256px" height="256px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#c99bee" transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)" stroke-width="0.32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <g fill="#000000"> <path d="M11.72 3.22a.75.75 0 111.06 1.06l-8.5 8.5a.75.75 0 01-1.06-1.06l8.5-8.5zM2.25 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM10 10a.75.75 0 000 1.5h1.5V13a.75.75 0 001.5 0v-1.5h1.5a.75.75 0 000-1.5H13V8.5a.75.75 0 00-1.5 0V10H10z"></path> </g> </g></svg>
      </div>
      <h1>Suma y Resta</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar 
        </button>
        
      </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="flex content-center justify-center flex-col">
        <div>
          <h1 className="text-blue-700 text-8xl font-bold m-9">Impasta Amugus</h1>
        </div>
        <div className="flex content-center justify-center">
          <img className="size-full" src="quandale-dingle.png"></img>
        </div>
        <div>
          <button className="text-blue-700 text-8xl font-bold m-9">Start</button>
        </div>
      </div>
  )
}

export default App

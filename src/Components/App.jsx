import {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Game from './Game/Game'
import Home from './Home'

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <p>loading...</p>}
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading} />} />
        <Route path="/games/:id" element={<Game history={history} setHistory={setHistory} />} />
      </Routes>
    </>
  )
}

export default App
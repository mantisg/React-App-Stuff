import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Board from './Board'
import './game.css'

function Game({history, setHistory}) {
  const navigate = useNavigate()
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function resetGame() {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = "Go to Move #:" + move
    }
    else description = "Go to Game Start"

    return (
      <li key={move} >
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  })
  return (
    <div className="game">
      <button onClick={() => navigate('/')}>Home</button>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
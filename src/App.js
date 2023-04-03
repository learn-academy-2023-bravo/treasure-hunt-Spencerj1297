import React, { useState } from "react"
import "./App.css"
import Sqaure from './components/Square'
const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {
        board.map(square => {
          return <Sqaure square={square} />
        })
      }
      </div>
    </>
  )
}

export default App

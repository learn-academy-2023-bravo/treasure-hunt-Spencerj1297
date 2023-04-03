import React, { useState } from "react"
import "./App.css"
import Sqaure from "./components/Square"
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
    "?",
  ])
const handleGamePlay = (clickedSqaure) => {
  let updateBoard = [...board]
  updateBoard[clickedSqaure] = '☕️'
  setBoard(updateBoard)
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((square, index) => {
          return <Sqaure 
          square={square} 
          index={index} 
          key={index} 
          handleGamePlay={handleGamePlay}
          />
        })}
      </div>
    </>
  )
}

export default App

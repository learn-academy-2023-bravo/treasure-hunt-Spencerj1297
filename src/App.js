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

const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

const [bombLocation, setBombLocation] =     useState(Math.floor(Math.random() * board.length))

const handleGamePlay = (clickedSqaure) => {
  let updateBoard = [...board]
  if(clickedSqaure === treasureLocation){
    updateBoard[clickedSqaure] = '💻'
    setBoard(updateBoard)
  } else if (clickedSqaure === bombLocation) {
  updateBoard[clickedSqaure] = '👾'
  setBoard(updateBoard)
}else{
  updateBoard[clickedSqaure] = '☕️'
  setBoard(updateBoard)
}
}

  return (
    <>
      <h1>CRACK THE ASSESSMENT CODE...</h1>
      <div className="board">
        {board.map((square, index) => {
          return <Sqaure 
          square={square} 
          index={index} 
          key={index} 
          handleGamePlay={handleGamePlay}
          />
        })}
        <button className="refreshButton" onClick={() => window.location.reload(true)}>Refresh</button>
      </div>
    </>
  )
}

export default App

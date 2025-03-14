import './App.css';
import { useState } from "react"; 

function Square(props) { 
  const [value, setValue] = useState(null); 
 
  function handleClick() { 
    setValue(props.isXTurn ? 'X' : 'O'); 
    props.onClick(); 
  } 
  return ( 
    <button 
      className="square" 
      onClick={handleClick} 
    > 
      {value} 
    </button> 
  ); 
} 

export function Board() {
  const [isXTurn, setTurn] = useState(true); 
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  function handleClick(index) { 
    const nextSquares = squares.slice(); 
    nextSquares[index] = isXTurn ? 'X' : 'O'; 
    setSquares(nextSquares); 
    setTurn(!isXTurn); 
  } 

  return (
    <>
      <div className="board-row">
        <Square isXTurn={isXTurn} onClick={() => handleClick(0)} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(1)} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square isXTurn={isXTurn} onClick={() => handleClick(3)} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(4)} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square isXTurn={isXTurn} onClick={() => handleClick(6)} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(7)} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(8)} />
      </div>
    </>
  ); 
}


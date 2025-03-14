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

export default function Board() {
  const [isXTurn, setTurn] = useState(true); 
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  function handleClick(i) { 
    if (squares[i]) { 
      return; 
    } 
    const nextSquares = squares.slice();
    nextSquares[i] = isXTurn ? 'X' : 'O'; 
    setSquares(nextSquares); 
    setTurn(!isXTurn); 
  } 
  const winner = calculateWinner(squares); 
  let status; 
  if (winner) { 
    status = 'Winner: ' + winner; 
  } else { 
    status = 'Next player: ' + (isXTurn ? 'X' : 'O'); 
  }
  return (
    <div>
      <div className="status">{status}</div> 
      <div className="board-row">
        <Square isXTurn={isXTurn} onClick={() => handleClick(0)} value={squares[0]} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(1)} value={squares[1]} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square isXTurn={isXTurn} onClick={() => handleClick(3)} value={squares[3]} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(4)} value={squares[4]} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square isXTurn={isXTurn} onClick={() => handleClick(6)} value={squares[6]} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(7)} value={squares[7]} />
        <Square isXTurn={isXTurn} onClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </div>
  ); 
}

function calculateWinner(squares) { 
  const lines = [ 
    [0, 1, 2], // Horizontal rows 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], // Vertical columns 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], // Diagonal lines 
    [2, 4, 6], 
  ]; 
 
  // Check each line for a winner 
  for (let i = 0; i < lines.length; i++) { 
    const [a, b, c] = lines[i]; 
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
      return squares[a]; // Return the winning symbol ('X' or 'O') 
    } 
  } 
 
  return null; // No winner 
}
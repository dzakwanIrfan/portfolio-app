'use client'

import { useState } from 'react';
import Board from "@/app/lib/tic-tac-toe/component/Board";
import { useEffect } from 'react';
import "./style.css";
import "./style-responsive.css";

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((squares, move) => {
    let description = '';
    if(move > 0){
      description = 'Go to move #' + move;
    }else{
      description = 'Got to game start';
    }

    return(
      <li key={move}>
        <button style={{ padding: '4px 8px', cursor: 'pointer' }} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return(
    <>
      <Header />
      <div className='game'>
        <div className='game-board'>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <h3>Game Info:</h3>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

function Header(){
  return(
    <div className="title">
      <div className="sub-title">TIC - TAC - TOE</div>
      <p>Simply made with React ⚛️</p>
    </div>
  );
}






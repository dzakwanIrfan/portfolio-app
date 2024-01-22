import calculateWinner from "./calculateWinner";
import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {
    function handleClick(i){
      if(squares[i] || calculateWinner(squares))return;
  
      const nextSquares = squares.slice();
  
      // if(xIsNext){
      //   nextSquares[i] = 'X';
      // }else{
      //   nextSquares[i] = 'O';
      // }
  
      nextSquares[i] = xIsNext ? 'X' : 'O';
  
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status = '';
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    let style = {};
    if(winner){
      if(winner === 'X'){
        style = { backgroundColor: '#000370', color: '#f3f3f3' };
      }else{
        style = { backgroundColor: '#f3f3f3', color: '#000370' };
      }
    }else{
      if (xIsNext) {
          style = { backgroundColor: '#000370', color: '#f3f3f3' };
      } else {
          style = { backgroundColor: '#f3f3f3', color: '#000370' };
      }
    }
  
    return(
      <div className="board-container">
        <div style={style} className='status'>{status}</div>
        <div className='board'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </div>
    );
  }
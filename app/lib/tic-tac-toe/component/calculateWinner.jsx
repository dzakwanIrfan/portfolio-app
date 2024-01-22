export default function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  
    for(let i = 0; i < lines.length; i++){
      // const a = lines[i][0];
      // const b = lines[i][1];
      // const c = lines[i][2];
  
      const [a, b, c] = lines[i];
  
      if(squares[a] == squares[b] && squares[b] == squares[c]){
        return squares[a];
      }
    }
  
    return false;
  }
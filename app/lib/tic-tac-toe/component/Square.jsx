export default function Square({ value, onSquareClick }){

    // const [value, setValue] = useState('');
  
    // function handleClick(){
    //   setValue('X');
    // }
    let style = ''
    if(value === 'X'){
        style = {color: '#000370'}
    }else{
        style = {color: '#f3f3f3'}
    }
  
    return <button style={style} className='square' onClick={onSquareClick}>{value}</button>
  }
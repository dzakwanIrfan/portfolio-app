import './style.css'

export default function Stopwatch() {
    return (
        <div className="container">
            <div id="time">
                <span className='wrap'>
                    <div className="time" id="hour">00</div>    
                    <p>H</p>
                </span>
                <span className='wrap'>
                    <div className="time" id="minute">00</div>    
                    <p>M</p>
                </span>
                <span className='wrap'>
                    <div className="time" id="second">00</div>    
                    <p>S</p>
                </span>
                <span className='wrap'>
                    <div className="time" id="milisecond">00</div>    
                    <p>Ms</p>
                </span>
            </div>
            <div id="buttons">
                <button className='button'>Start</button>
                <button className='button'>Split</button>
                <button className='button'>Reset</button>
            </div>
            
        </div>
    );
}
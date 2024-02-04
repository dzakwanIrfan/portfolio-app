interface DisplayProps {
    time: {
      ms: number;
      s: number;
      m: number;
      h: number;
    };
}

export default function Display({time}: DisplayProps) {
    return (
        <>
            <div id="milisecond">{time.ms}</div>
            <div id="time">
                <span className="wrap">
                    <div className="time" id="hour">{time.h < 10 ? `0${time.h}` : time.h}</div>
                    <p>H</p>
                </span>
                <span className="wrap">
                    <div className="time" id="minute">{time.m < 10 ? `0${time.m}` : time.m}</div>
                    <p>M</p>
                </span>
                <span className="wrap">
                    <div className="time" id="second">{time.s < 10 ? `0${time.s}` : time.s}</div>
                    <p>S</p>
                </span>
            </div>
        
        </>
    );
}
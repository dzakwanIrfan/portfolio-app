import React from "react";

interface ButtonsProps {
    status: number;
    start: () => void;
    stop: () => void;
    reset: () => void;
    resume: () => void;
  }

export default function Buttons(props: ButtonsProps) {
    return (
        <div id="buttons">
            {(props.status === 0)?
                <button className="button" onClick={props.start}>
                    Start
                </button>:
                ''
            }

            {(props.status === 1)?
                <>
                    <button className="button">
                        Split
                    </button>
                    <button className="button" onClick={props.stop}>
                        Stop
                    </button>
                    <button className="button" onClick={props.reset}>
                        Reset
                    </button>             
                </>
                :
                ''
            }

            {(props.status === 2)?
                <>
                    <button className="button">
                        Split
                    </button>
                    <button className="button" onClick={props.resume}>
                        Resume
                    </button>
                    <button className="button" onClick={props.reset}>
                        Reset
                    </button>             
                </>
                :
                ''
            }
        </div>
    );
}
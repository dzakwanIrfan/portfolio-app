'use client'
import React, { useState, useEffect } from 'react';
import './style.css'

export default function Stopwatch() {
    const [ms, setMs] = React.useState(0);
    const [s, setS] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const intervalRef = React.useRef();

    const handleStart = () => {
        setIsRunning(!isRunning);
    }

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setMs((prevMs) => {
                    if (prevMs === 99) {
                        setS((prevS) => prevS + 0.5);
                        return 0;
                    }
                    return prevMs + 1;
                });
            }, 1);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

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
                    <div className="time" id="second">{s}</div>    
                    <p>S</p>
                </span>
                <span className='wrap'>
                    <div className="time" id="milisecond">{ms}</div>    
                    <p>Ms</p>
                </span>
            </div>
            <div id="buttons">
                <button className='button' onClick={handleStart}>{isRunning ? 'Pause' : 'Start'}</button>
                <button className='button'>Split</button>
                <button className='button'>Reset</button>
            </div>
            
        </div>
    );
}
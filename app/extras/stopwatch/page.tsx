'use client'

import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="container">
      <div id="milisecond">{secondsPassed.toFixed(3)}</div>
      <div id="time">
        <span className="wrap">
          <div className="time" id="hour">00</div>
          <p>H</p>
        </span>
        <span className="wrap">
          <div className="time" id="minute">00</div>
          <p>M</p>
        </span>
        <span className="wrap">
          <div className="time" id="second">00</div>
          <p>S</p>
        </span>
      </div>
      <div id="buttons">
        <button className="button" onClick={handleStart}>
            Start
        </button>
        <button className="button">Split</button>
        <button className="button">Reset</button>
      </div>
    </div>
  );
}

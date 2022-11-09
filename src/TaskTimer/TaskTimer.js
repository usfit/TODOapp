import React, { useState, useEffect } from 'react';

function TaskTimer({ minutes, seconds, updateTime }) {
  const [allSeconds, setAllSeconds] = useState(0);
  const [start, setStart] = useState(false);

  const getSeconds = () => {
    const newAllSeconds = +seconds + +minutes * 60;
    setAllSeconds(newAllSeconds);
  };

  const tick = () => {
    const newAllSeconds = allSeconds - 1;
    if (start && newAllSeconds >= 0) {
      setAllSeconds(newAllSeconds);
      updateTime(newAllSeconds);
    } else {
      setStart(false);
    }
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  useEffect(() => {
    getSeconds();
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <span className="description">
      <button type="button" label="timer play" className="icon icon-play" onClick={handleStart} />
      <button type="button" label="timer pause" className="icon icon-pause" onClick={handleStop} />
      {`${minutes}:${seconds}`}
    </span>
  );
}

export default TaskTimer;

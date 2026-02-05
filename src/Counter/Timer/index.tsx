import React from "react";

interface ITimerProps {
  count: number;
}

const Timer = ({ count }:ITimerProps) => {
    const formatTimer = (time: number) => {
      return time < 10 ? `0${time}` : time;
    };
  
    const showTimer = (count: number) => {
      let seconds = count % 60;
      let minute = Math.trunc(count / 60);
      let hour = Math.trunc(minute / 60);
      console.log(hour, ":", minute, ":", seconds);
  
      return (
        <p>
          <span> {formatTimer(hour)} : </span>
          <span> {formatTimer(minute % 60)}: </span>
          <span> {formatTimer(seconds)} </span>
        </p>
      );
    };
  
    return <div>{showTimer(count)}</div>;
  };
  
  export default Timer;
  
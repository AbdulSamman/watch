import { useState, useEffect } from "react";

export const WatchHand = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setTime(new Date());
      }, 1000);
    });

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const days = time.getDate();
  console.log(seconds);

  return (
    <div className="WatchHand">
      <div className="watch">
        <div
          className="hours"
          style={{
            transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`,
          }}></div>
        <div
          className="minutes"
          style={{
            transform: `rotate(${minutes * 6}deg)`,
          }}></div>
        <div
          className="seconds"
          style={{
            transform: `rotate(${seconds * 6}deg)`,
          }}></div>
        <div className="days">{days}</div>
        <div className="kreis"></div>
      </div>
    </div>
  );
};

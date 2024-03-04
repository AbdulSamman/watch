import { useState, useEffect } from "react";

export const Watch = () => {
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

  // sekunds markers
  const secondsArray = Array.from({ length: 60 }, (_, index) => index);

  return (
    <div className="watchPage">
      <div className="watchGround">
        <div className="tasten"></div>
        <div className="tasten"></div>
        <div className="tasten"></div>
      </div>
      <div className="watch">
        <div className="watchHand">
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
          <div className="secondsMark">
            {secondsArray.map((_, index) => (
              <div
                key={index}
                className={`secondMark secondMark-${index} ${
                  index === seconds && "taktLighten"
                }`}
                style={{
                  transform: `rotate(${index * 6}deg)`,
                }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useState, useEffect } from "react";

export const Watch = () => {
  const [time, setTime] = useState(new Date());
  const [isSecondsStopped, setIsSecondsStopped] = useState(false);

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

  // button functions
  const handleSecondButton = () => {
    setIsSecondsStopped(!isSecondsStopped);
  };

  return (
    <div className="watchPage">
      <div className="watchGround">
        <button
          className="tasten squareTop"
          onClick={handleSecondButton}></button>
        <button className="tasten round"></button>
        <button className="tasten squareBottom"></button>
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
              <React.Fragment key={index}>
                <div
                  className={`secondMark secondMark-${index} ${
                    index === seconds && "taktLighten"
                  }`}
                  style={{
                    transform: `rotate(${index * 6}deg)`,
                  }}></div>
                <div className="dials  secondsShow">
                  <div
                    style={{
                      transform: `rotate(${index * 6}deg)`,
                    }}
                    className="numbersSmall"></div>
                  <span
                    className="numbers"
                    style={{
                      transform: `rotate(${index * 30}deg)`,
                    }}>
                    {index % 15 === 0 && <>{index === 0 ? "60" : index}</>}
                  </span>
                  <div
                    className="secondsHandSmall"
                    style={{
                      transform: `rotate(${
                        !isSecondsStopped ? "" : seconds * 6
                      }deg)`,
                    }}></div>
                  <div className="kreisSmall"></div>
                </div>
                <div className="dials minutsShow">
                  <div
                    style={{
                      transform: `rotate(${index * 60 + 30}deg)`,
                    }}
                    className="numbersSmall"></div>
                  <span
                    className="numbers minutsNumbers"
                    style={{
                      transform: `rotate(${index * -30}deg)`,
                    }}>
                    {index % 10 === 0 && <>{index === 0 ? "60" : index}</>}
                  </span>
                </div>
                <div className="dials stopWatch">
                  <div
                    style={{
                      transform: `rotate(${index * 3}deg)`,
                    }}
                    className="numbersSmall"></div>
                  <span
                    className="numbers stopNumbers"
                    style={{
                      transform: `rotate(${index * 30}deg)`,
                    }}>
                    {index % 15 === 0 && <>{index}</>}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

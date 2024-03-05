import React from "react";
import { useState, useEffect } from "react";

export const Watch = () => {
  const [time, setTime] = useState(new Date());
  const [isSecondsStopped, setIsSecondsStopped] = useState(false);
  const [isMinutesHandStoppen, setIsMinutesHandStoppen] = useState(false);
  const [isStopActive, setIsStopActive] = useState(false);

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
      <div className="watchLayers">
        <div className="watchGround">
          <button
            className="tasten squareTop"
            onClick={() => setIsSecondsStopped(!isSecondsStopped)}></button>
          <button
            className="tasten round"
            onClick={() => setIsStopActive(!isStopActive)}></button>
          <button
            className="tasten squareBottom"
            onClick={() =>
              setIsMinutesHandStoppen(!isMinutesHandStoppen)
            }></button>
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
                          isSecondsStopped
                            ? !isStopActive
                              ? 0
                              : seconds * 6
                            : ""
                        }deg)`,
                        transition: "1s linear",
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
                      className="numbers"
                      style={{
                        transform: `rotate(${index * -30}deg)`,
                      }}>
                      {index % 10 === 0 && <>{index === 0 ? "60" : index}</>}
                    </span>
                    <div
                      className="minutsHandSmall"
                      style={{
                        transform: `rotate(${
                          isMinutesHandStoppen
                            ? !isStopActive
                              ? 0
                              : minutes * 6
                            : ""
                        }deg)`,
                        transition: "1s linear",
                      }}></div>
                    <div className="kreisSmall"></div>
                  </div>
                  <div className="dials stopWatch">
                    <div
                      style={{
                        transform: `rotate(${index * 3}deg)`,
                      }}
                      className="numbersSmall"></div>
                    <div
                      className="numbers"
                      style={{
                        transform: `rotate(${index * 30}deg)`,
                      }}>
                      {index % 15 === 0 && <>{index === 0 ? "60" : index}</>}
                    </div>
                    <div
                      className="stopWatchHand"
                      style={{
                        transform: `rotate(${!isStopActive ? 0 : 360}deg)`,
                        transition: "800ms linear",
                      }}></div>
                    <div className="kreisSmall"></div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <span className="marke">
            SAM<span>MAN</span>
          </span>
        </div>
      </div>
    </div>
  );
};

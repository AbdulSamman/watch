import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  console.log("Hours ", hours);
  console.log("Miutes ", minutes);
  console.log("Seconds ", seconds);

  return (
    <>
      <h1>Watch</h1>
      <div className="clock">
        <div
          className="hour-hand"
          style={{
            transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`,
          }}></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${minutes * 6}deg)` }}></div>
        <div
          className="second-hand"
          style={{ transform: `rotate(${seconds * 6}deg)` }}></div>
        <div className="watchMarke">Loay Watch</div>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState({ second: 0, minute: 0, hour: 0 });
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let cleanup;
    if (running) {
      cleanup = setInterval(() => {
        setTimer((prev) => {
          let second = prev.second;
          let minute = prev.minute;
          let hour = prev.hour;
          second++;

          if (second === 60) {
            second = 0;
            minute++;
          }

          if (minute === 60) {
            minute = 0;
            hour++;
          }
          return { second, minute, hour };
        });
      }, 1000);
    }
    return () => clearInterval(cleanup);
  }, [running]);
  return (
    <React.Fragment>
      <h1>{timer.hour + ":" + timer.minute + ":" + timer.second}</h1>
      <button onClick={() => setRunning((prev) => !prev)}>
        {running ? "Pause" : "Start"}
      </button>
      {(timer.second || timer.minute || timer.hour) > 0 && (
        <button
          onClick={() => {
            setRunning(false);
            setTimer({ second: 0, minute: 0, hour: 0 });
          }}
        >
          Reset
        </button>
      )}
    </React.Fragment>
  );
}
import { useEffect } from "react";

function Timer(dispatch, secondsRemaining) {
  useEffect(function () {
    setInterval(() => {}, 1000);
  }, []);

  return <div className="timer"> {secondsRemaining}</div>;
}

export default Timer;

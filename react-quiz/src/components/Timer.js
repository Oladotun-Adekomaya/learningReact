import { useEffect, dispatch, secondsRemaining } from "react";

function Timer() {
  useEffect(function () {
    setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
  }, []);

  return <div className="timer"> {secondsRemaining}</div>;
}

export default Timer;

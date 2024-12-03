import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      //   if (secondsRemaining === 0) dispatch({ type: "finished" });
    },
    [dispatch, secondsRemaining]
  );

  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;

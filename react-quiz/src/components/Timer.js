import { useEffect } from "react";

function Timer() {
  useEffect(function () {
    setInterval(() => {}, 1000);
  }, []);

  return <div className="timer"> 05:00</div>;
}

export default Timer;

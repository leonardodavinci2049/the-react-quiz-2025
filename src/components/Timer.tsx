

import { Dispatch, useEffect } from 'react';

interface TimerProps {
  dispatch: Dispatch<{ type: string }>;
  secondsRemaining : number | null;
}

const Timer = ({ dispatch, secondsRemaining }:TimerProps) => {
  const mins = Math.floor((secondsRemaining ?? 0) / 60);
  const seconds = (secondsRemaining ?? 0) % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );



  return (
    <div className="float-left text-lg text-gray-500 border-2 border-gray-800 py-5 px-11 rounded-full">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer
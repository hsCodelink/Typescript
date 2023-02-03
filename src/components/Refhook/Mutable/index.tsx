import React, { useState, useRef, useEffect } from "react";

const Mutable = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    window.clearInterval(interValRef.current!);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 500);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <>
      <div>Hook Timer {timer}</div>
      <button
        onClick={() => {
          stopTimer();
        }}
      >
        Click me
      </button>
    </>
  );
};

export default Mutable;

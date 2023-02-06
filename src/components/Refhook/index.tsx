import React, { useRef, useEffect } from "react";

const Refhook = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const htmlRef = useRef(null);


useEffect(()=>{
  console.log("refhook:",htmlRef)
},[htmlRef])

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="email" ref={htmlRef} />
    </div>
  );
};

export default Refhook;

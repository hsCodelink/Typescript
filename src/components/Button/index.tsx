import React from "react";
type ButtonType = {
  handleClick: (event: any, id: number) => void;
};

const Button = ({ handleClick }: ButtonType) => {
  return (
    <>
      <button
        onClick={(event) => {
         handleClick(event, 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default Button;

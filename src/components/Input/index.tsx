import React from "react";
type inputType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: inputType) => {
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default Input;

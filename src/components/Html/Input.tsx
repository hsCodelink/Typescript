import React from "react";
type inputType = React.ComponentProps<"input">;

const Input = (props: inputType) => {
  return (
    <div>
      Input
      <input {...props} />
    </div>
  );
};

export default Input;

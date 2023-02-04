import React from "react";
import PropsCss from "../PropsCss";
const Custome = (props: React.ComponentProps<typeof PropsCss>) => {
  return (
    <>
      <h2 style={props.styles}> Harsh</h2>
    </>
  );
};

export default Custome;

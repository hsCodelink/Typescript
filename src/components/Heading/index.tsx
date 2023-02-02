import React from "react";

type headingType = {
  children: React.ReactNode;
};

const Heading = (props:headingType) => {
  return (
    <>
        <h2>{props.children}</h2>
    </>
  );
};

export default Heading;

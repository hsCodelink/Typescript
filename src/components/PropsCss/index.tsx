import React from "react";
type propsCssType = {
  styles: React.CSSProperties;
};

const PropsCss = ({styles}:propsCssType) => {
  return (
    <>
      <div style={styles}>PropsCss</div>
    </>
  );
};

export default PropsCss;

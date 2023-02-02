import React, { useContext } from "react";
import { ThemeContext } from "..";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.bg,
        color: theme.primary.text,
        border: theme.primary.border,
      }}
    >
      Box
    </div>
  );
};

export default Box;

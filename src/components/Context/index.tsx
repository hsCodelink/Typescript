import React, { createContext } from "react";
import { theme } from "./Theme";

type themeContextType = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);
const Context = ({ children }: themeContextType) => {
  return (
    <>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
};

export default Context;
export { ThemeContext };

import React from "react";

export const initialThemeState = {
  theme: localStorage.globalTheme ? localStorage.globalTheme : "light",
  setTheme: () => null,
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;

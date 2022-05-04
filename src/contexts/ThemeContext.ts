import React from "react";

type Themet = {
  theme: string;
  setTheme: (theme: string) => void;
};

const DEFAULT_THEME = "dark";

const defaultValue = {
  theme: DEFAULT_THEME,
  setTheme: (theme: string) => theme,
};

const ThemeContext = React.createContext<Themet>(defaultValue);

export { ThemeContext };

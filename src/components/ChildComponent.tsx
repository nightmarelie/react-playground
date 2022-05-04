import React, { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

export default function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme("light")}>Change To Light Theme</button>
    </>
  );
}

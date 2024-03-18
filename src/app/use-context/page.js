"use client"; // have to call use client in component page for useContext to work
import { useContext } from "react";

import { UserContext } from "@/app/Context/UserContext";
import { ThemeContext } from "@/app/Context/ThemeContext";

export default function UseContextHook() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <h2>Example of using useContext react hook:</h2>
      <p>User ID: {username}</p>
      <button onClick={() => setUsername("Tim")}>
        Change the username to Tim
      </button>
      <h3>Theme: {theme}</h3>
      <button onClick={handleThemeToggle}>Change theme to dark</button>
    </div>
  );
}

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
      <h2 className="m-5 font-bold">useContext</h2>
      <h2 className="m-3">Examples of using useContext react hook:</h2>
      <p className="m-3">User ID: {username}</p>
      <button
        onClick={() => setUsername("Tim")}
        className="m-3 rounded border-double border-4 border-black p-2 hover:border-dotted"
      >
        Change the username to Tim
      </button>
      <h3 className="m-3">Theme: {theme}</h3>
      <button
        onClick={handleThemeToggle}
        className="m-3 rounded border-double border-4 border-black p-2 hover:border-dotted"
      >
        Change theme to dark
      </button>
    </div>
  );
}

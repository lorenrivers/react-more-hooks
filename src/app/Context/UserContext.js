"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("Loren");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

// using useState means we are able to update the data in the useContext from any component. If not using useState, the value attribute could be value={{ username: "Loren"}}.

import React, { createContext, useState, useEffect } from "react";

import host from "../host";
import { getCookie } from "../utils";

type UserContextType = {
  user: UserType;
  setState: (user: UserType) => void;
};

type UserType = {
  uuid: string;
  username: string;
  email: string;
  verified: boolean;
  reputation: number;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = (props) => {
  const [state, setState] = useState<UserType | null>();

  useEffect(() => {
    // document.cookie = "token=df215923-8a3c-44f0-80c2-9c331e1a58df"; // testing
    const token = getCookie("token");
    if (token !== "") {
      fetch(`${host}/users/${JSON.parse(atob(token.split(".")[1])).uuid}`)
        .then((res) => res.json())
        .then((data) => setState(data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user: state, setState }}>
      {props.children}
    </UserContext.Provider>
  );
};

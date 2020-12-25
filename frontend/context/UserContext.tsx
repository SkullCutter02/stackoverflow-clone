import React, { createContext, useState, useEffect } from "react";

import host from "../host";

function getCookie(cname: string): string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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
      fetch(`${host}/users/${token}`)
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

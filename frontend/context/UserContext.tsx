import React, { createContext, useState, useEffect } from "react";

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
  token: string;
  setState: (token: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = (props) => {
  const [state, setState] = useState<string | null>();

  useEffect(() => {
    const token = getCookie("token");
    if (token !== "") {
      setState(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ token: state, setState }}>
      {props.children}
    </UserContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type userType = {
  children: React.ReactNode;
};

type userContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
};

const UserContextProvider = createContext<userContextType |null>(null);

const UserContext = ({ children }: userType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <>
      <UserContextProvider.Provider value={{user, setUser}}>
        {children}
      </UserContextProvider.Provider>
    </>
  );
};

export default UserContext;
export {UserContextProvider}
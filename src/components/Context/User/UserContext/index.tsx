import React, { createContext, useState } from "react";

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

const userContext = createContext<userContextType |null>(null);

const UserContext = ({ children }: userType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <>
      <userContext.Provider value={{user, setUser}}>
        {children}
      </userContext.Provider>
    </>
  );
};

export default UserContext;
export {userContext}
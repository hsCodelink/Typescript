import React, { useContext } from "react";
import { userContext } from "./UserContext";

const User = () => {
  const userContext = useContext(userContext);
  const handleLogIn = () => {
    userContext.setUser({
      name: "Harsh",
      email: "harshsavaliya250@gmail.com",
    });
  };
  const handleLogOut = () => {};
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default User;

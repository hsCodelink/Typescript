import React, { useContext, useState } from "react";
import { UserContextProvider } from "./UserContext";

const User = () => {
  const userDetails = useContext(UserContextProvider);
  const handleLogIn = () => {
    if (userDetails) {
      userDetails.setUser({
        name: "Harsh",
        email: "harshsavaliya250@gmail.com",
      });
    }
  };
  const handleLogOut = () => {
    if (userDetails) {
      userDetails.setUser(null);
    }
  };
  return (
    <div>
      <div>Name :{userDetails?.user?.name}</div>
      <div>email :{userDetails?.user?.email}</div>

      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default User;

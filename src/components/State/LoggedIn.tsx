import React, { useState } from "react";

type AuthUser = {
  name: string;
  email?: string;
};

const LoggedIn = () => {
    // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState({} as AuthUser);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLogIn = () => {
    setisLoggedIn(true);
    setUser({
      name: "Harsh",
      email: "harshsavaliya250@gmail.com",
    });
  };
  const handleLogOut = () => {
    setisLoggedIn(false);
    // setUser(null);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleLogIn();
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          handleLogOut();
        }}
      >
        Log Out
      </button>
      {isLoggedIn ? "logged In" : "logged Out"}

      {isLoggedIn ? (
        <>
          {" "}
          {/* <h4>Name:{user?.name}</h4>
          <h4>Email:{user?.email}</h4> */}
          <h4>Name:{user.name}</h4>
          <h4>Email:{user.email}</h4>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoggedIn;

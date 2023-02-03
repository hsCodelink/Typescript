import React, { useState } from "react";
import Login from "./login";
import { profiletype } from "./Profile";

type privateType = {
  isLoggedIn: boolean;
  Component: React.ComponentType<profiletype>;
};

const Private = ({ isLoggedIn, Component }: privateType) => {
  if (isLoggedIn) {
    return <Component name="Harsh" email="harsh@gmail.com"/>;
  } else {
    return <Login />;
  }
};

export default Private;

import { type } from "os";
import React from "react";
import { Name } from "../PropsType/PropsType.types";

// type propsType = {
//   name: string;
//   email: string;
//   age ?: number;
//   isLoggin: boolean;
// };

// type nameListType = {
//   names: {
//     firstName: string;
//     lastName: string;
//   }[];
// };

// type nameListType = {
//   names: Name[];
// };

// type statusType = {
//   status: "loading" | "success" | "error";
// };

type childrenType = {
  children: string;
};

const Props = (props: childrenType) => {
  return (
    <>
      {/* {props.isLoggin === true ? (
        <>
          {" "}
          <h2>welcome {props.name} in the my screen</h2>
          <h5>Your name : {props.name}</h5>
          <h5>Your email : {props.email}</h5>
          <h5>Your age : {props.age || 0}</h5>
        </>
      ) : (
        <h1>Please login</h1>
      )} */}
{/* 
      {props.names.map((item, index) => {
        return (
          <div key={index}>
            <h4>
              {item.firstName} {item.lastName}
            </h4>
          </div>
        );
      })} */}
      {/* 
      {props.status === "loading"
        ? "loading....."
        : props.status === "success"
        ? "success"
        : props.status === "error" && "error"} */}

      <h2>{props.children}</h2>
    </>
  );
};

export default Props;

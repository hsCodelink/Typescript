import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

function App() {
  //String :
  // const name: string = "harsh";

  //Number array:
  // const a: number[] = [1, 2, 3, 4, 5];
  // console.log(a);

  //boolen:
  // const mixed: any[] = ["Harsh", 10, false];
  // console.log(mixed);

  //obj:
  // const user = {
  //   name: String,
  //   age: Number,
  //   gender: Boolean,
  // };

  // user = {
  //   name: "Harsh",
  //   age: 10,
  //   gender: true,
  // };

  // enum custome data type:

  // enum dayofTheWeek {
  //   SUN,
  //   MON,
  //   TUE,
  //   WED,
  //   THUR,
  //   FRI,
  //   SAT,
  // }
  // const day: dayofTheWeek = dayofTheWeek.SAT;
  // console.log("day:", day);

  // if (day === dayofTheWeek.SAT) {
  //   console.log("Its Monday....!");
  // } else {
  //   console.log("Its not monday.........?");
  // }

  // Tuple Data Type:

  // const details: {
  //   id: number;
  //   name: string;
  //   role: [number, string];
  // } = {
  //   id: 1,
  //   name: "Harsh",
  //   role: [1, "Harsh"],
  // };
  // console.log("Details: ", details);

  // typescript in function:

  // const add = (num1: number, num2: number, isShown: boolean) => {
  //   if (isShown) {
  //     console.log("sum: ", num1 + num2);
  //   } else {
  //     return "error";
  //   }
  // };

  // const result = add(3, 3, false);
  // console.log(result);

  // typescript in function with return type:

  // const add = (a: number, b: number): string => {
  //   const res = a + b;
  //   return res.toString();
  // };

  // const res = add(2, 3);
  // console.log(res);

  // typescript in check type with object:

  // const checkDataType = (a: any): object => {
  //   if (typeof a === "number") {
  //     return {
  //       status: true,
  //       msg: `${a} is a number`,
  //     };
  //   } else {
  //     return {
  //       status: false,
  //       msg: `${a} is a not a number`,
  //     };
  //   }
  // };
  // const res = checkDataType("2");
  // console.log(res);

  //Reusable data type:

  // type objType = {
  //   name: String;
  //   age: Number;
  //   hobby: Boolean;
  // };

  // const User: objType = {
  //   name: "Harsh",
  //   age: 21,
  //   hobby: true,
  // };
  // console.log(User);

  // const User1: objType = {
  //   name: "Karan",
  //   age: 28,
  //   hobby: false,
  // };
  // console.log(User1);

  // arra declere multiple data type in typescript:

  // const arr: string[] = ["Harsh"];

  // arr[0] = "Karan";
  // arr[1] = "Harsh";

  // arr.push("Jay")
  // console.log(arr);

  //Union value in typescript <--- similer to return type arrayF:
  // const data: string | number | boolean | any =;
  // console.log(typeof data);

  // literal data type in typescript:

  // const combine = (
  //   a: number | string,
  //   b: number | string,
  //   type: "as-number" | "as-string"
  // ) => {
  //   if (type === "as-number") {
  //     return +a + +b;
  //   } else {
  //     return a.toString() + b.toString;
  //   }
  // };

  // const res = combine(5, 8);
  // const res1 = combine("Harsh");
  // console.log("res: ",res);
  // console.log("res1: ",res1);

  // type alias in typescript:

  // type varType = string | number | boolean;

  // const a: varType = 10;
  // // const b: varType = undefined;
  // const c: varType = "Harsh";
  // const d: varType = true;

  // =======================================================================test==========================================================
  // custome data type practise:
  // enum customeDataType {
  //   ADMIN,
  //   MANAGER,
  //   STAFF,
  //   PRODUCTION_DEPARTMENT,
  //   HRM,
  // }

  // const user = customeDataType;

  // console.log(user);

  //   const name: String[] = ["Harsh"];
  //   name.push("Karan");
  //   console.log("name:", name);

  // continue with 18 video

  
  const add = (a: number): boolean => {
    if (typeof a === "number") {
      return true;
    } else {
      return false;
    }
  };
  const res = add(2);
  console.log(res);
  return (
    <>
      <div>Harsh</div>
    </>
  );
}

export default App;

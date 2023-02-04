import { type } from "@testing-library/user-event/dist/type";
import { useContext, useEffect } from "react";
import Login from "./components/Authentication/login";
import Private from "./components/Authentication/Private";
import Profile from "./components/Authentication/Profile";
import Button from "./components/Button";
import Context, { ThemeContext } from "./components/Context";
import Box from "./components/Context/Box";
import User from "./components/Context/User";
import List from "./components/Generic";
import Heading from "./components/Heading";
import Btn from "./components/Html/Btn";
import Custome from "./components/Html/Custome";
import Input from "./components/Input";
import Polymorphic from "./components/Polymorphic";
import Props from "./components/Props";
import PropsCss from "./components/PropsCss";
import Reducer from "./components/Reducer";
import Refhook from "./components/Refhook";
import Mutable from "./components/Refhook/Mutable";
import Restriction from "./components/Restriction";
import LoggedIn from "./components/State/LoggedIn";
import Tamplatelitrature from "./components/Tamplatelitrature";

function App() {
  // String :
  // const name: string = "harsh";

  // Number array:
  // const a: number[] = [1, 2, 3, 4, 5];
  // console.log(a);

  // boolen:
  // const mixed: any[] = ["Harsh", 10, false];
  // console.log(mixed);

  // obj:
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

  // Reusable data type:

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

  // Union value in typescript <--- similer to return type arrayF:
  // const data: string | number | boolean | any = "Harsh";
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

  // const add = (a: number): boolean => {
  //   if (typeof a === "number") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // const res = add(2);
  // console.log(res);

  // ===========================================React=====================

  // const obj = {
  //   name: "harsh",
  //   email: "harsh@gmail.com",
  //   age: 21,
  //   isLoggin: false,
  // };

  // const namelist = [
  //   {
  //     firstName: "Harsh",
  //     lastName: "Savaliya",
  //   },
  //   {
  //     firstName: "karan",
  //     lastName: "Dudhat",
  //   },
  //   {
  //     firstName: "jay",
  //     lastName: "Dhameliya",
  //   },
  // ];

  return (
    <>
      {/* <Props {...obj}/> */}
      {/* <Props names={namelist} /> */}
      {/* <Props status="loading" /> */}
      {/* <Props>Hello I am Children of Props</Props>
      <Heading>I am children of Haeding</Heading>
      <Heading>
        <Props>I am Sub Children of Heading</Props>
      </Heading> */}
      {/* 
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked..", event, "id :", id);
        }}
      /> */}

      {/* <Input
        value="value"
        handleChange={(event) => {
          console.log("onChange Event", event);
        }}
      /> */}

      {/* <PropsCss styles={{
        border: "1px solid red",
        padding: "10px 30px",
        width: "50%",
        textAlign: "center",
        backgroundColor: "green",
        color: "#FFFFFF",
      }}/> */}

      {/* <LoggedIn /> */}
      {/* <Reducer/> */}

      {/* <Context>
        <Box />
        <User />
      </Context> */}
      {/* <Refhook/>
      <Mutable/> */}
      {/* <Login/> */}
      {/* <Private isLoggedIn={true} Component={Profile}/> */}
      {/* <List
        items={["Harsh", "Karan", "Jay"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          {
            firstName: "Harsh",
            lastName: "Savaliya",
          },
          {
            firstName: "Karan",
            lastName: "Dudhat",
          },
          {
            firstName: "Jay",
            lastName: "Dhameliya",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* 
      <Restriction value={0} isZero />
      <Restriction value={10} isPositive />
      <Restriction value={-10} isNagative /> */}

      {/* <Tamplatelitrature position="center--bottom"/> */}

      {/* <Btn variant="primary" onClick={()=>console.log('clicked primary')}>Primary button</Btn>
      <Btn variant="secondary"  onClick={()=>console.log('clicked secondary')}>Secondary button</Btn> */}

      <Custome
        styles={{
          backgroundColor: "red",
          color: "#FFFFFF",
          textAlign: "center",
          
        }}
      />
      {/* <Polymorphic as="h1" size="lg">
        Heading
      </Polymorphic>
      <Polymorphic as="p" size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores?
      </Polymorphic>
      <Polymorphic as="h2" size="lg" color="secondary">
        h2
      </Polymorphic>
      <Polymorphic as="label" size="sm" color="secondary">
        label
      </Polymorphic> */}
    </>
  );
}

export default App;

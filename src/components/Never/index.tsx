import { useState, useEffect, ReactNode } from "react";
type nameType = {
  name: string;
  email?: string;
  children:ReactNode
};

const Naver = ({ name, email,children}: nameType) => {
  const [arr, setArr] = useState<any[]>([]);
  const [objArr, setObjArr] = useState<{name: string; age: number}[]>([]);
  const [obj, setObj] = useState<{name: string; age: number}>(null!)

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  useEffect(() => {
    console.log("objarry",objArr);
  }, [objArr]);
  useEffect(() => {
    console.log("objarry",obj);
  }, [obj]);

  return (
    <div className="App">
      <div>{name}</div>
      <div>{email}</div>
      <div>{children}</div>
      <button
        onClick={() => {
          setArr(["Apple", "banana", "carrot"]);
        }}
      >
        Clicked me
      </button>
      <button
        onClick={() => {
            setObjArr([{name:"harsh",age:2},{name:"karan",age:5}]);
        }}
      >
        Clicked Details of user
      </button>
      <button
        onClick={() => {
            setObj({name:"harsh",age:2});
        }}
      >
        Clicked to obj
      </button>
    </div>
  );
};

export default Naver;

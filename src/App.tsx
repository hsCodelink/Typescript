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

  const details: {
    id: number;
    name: string;
    role: [number, string];
  } = {
    id: 1,
    name: "Harsh",
    role: [1, "Harsh"],
  };

  console.log("Details: ", details);
  return (
    <>
      {/* <div>{name}</div> */}
      <div>Harsh</div>
    </>
  );
}

export default App;

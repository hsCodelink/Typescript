import React from "react";
type testType<T> = {
  data: T[];
};
const Test = <T extends { firstName: string; lastName: string }>({
  data,
}: testType<T>) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.firstName}
            {"  "}
            {item.lastName}
          </div>
        );
      })}
    </div>
  );
};

export default Test;

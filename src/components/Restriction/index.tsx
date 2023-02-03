import React from "react";

type valueType = {
  value: number;
};
type postiveType = valueType & {
  isPositive: boolean;
  isNagative?: never;
  isZero?: never;
};
type nagativeType = valueType & {
  isNagative: boolean;
  isPositive?: never;
  isZero?: never;
};
type zeroType = valueType & {
  isZero: boolean;
  isPositive?: never;
  isNagative?: never;
};

type restrictionType = postiveType | nagativeType | zeroType;

const Restriction = ({
  value,
  isPositive,
  isNagative,
  isZero,
}: restrictionType) => {
  return (
    <h2>
      {value} {isPositive && "Postive"} {isNagative && "Nagative"}{" "}
      {isZero && "Zero"}
    </h2>
  );
};

export default Restriction;

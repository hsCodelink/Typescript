import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type positionType = {
  position: `${HorizontalPosition}--${VerticalPosition}`;
};

const Tamplatelitrature = ({ position }: positionType) => {
  return <div>Tost Notification Poistion -{position}</div>;
};

export default Tamplatelitrature;

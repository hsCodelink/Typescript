import React from "react";

type btnVaraintType = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Btn = ({ variant, children, ...rest }: btnVaraintType) => {
  return (
    <div>
      <button className={`class-with-${variant} `} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Btn;

import React from "react";
type polymorphicType<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type Polymorphic<E extends React.ElementType> = polymorphicType<E> &
  Omit<React.ComponentProps<E>, keyof polymorphicType<E>>;

const Polymorphic = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: Polymorphic<E>) => {
  const Component = as || "div";
  return (
    <>
      <Component className={`class-with-${size}-${color}`}>
        {children}
      </Component>
    </>
  );
};

export default Polymorphic;

import React from "react";

// import React from "react";

// type listType<T> = {
// items: string[] | number[];
// items: T[];
// onClick: (value: T) => void;
// onClick: (value: string |number) => void;
// };

// const List = <T extends { firstName: string; lastName: string }>({
//   items,
//   onClick,
// }: listType<T>) => {
//   return (
//     <>
//       <h2>List Of Items</h2>
//       {items.map((item, index) => {
//         return (
//           <div
//             key={index}
//             onClick={() => {
//               onClick(item);
//             }}
//           >
//             {item.firstName} {item.lastName}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default List;

// type nameListType<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };

// const Generics = <T extends { firstName: string; lastName: string }>({
//   items,
//   onClick,
// }: nameListType<T>) => {
//   return (
//     <div>
//       {items.map((item, index) => {
//         return (
//           <div
//             key={index}
//             onClick={() => {
//               onClick(item);
//             }}
//           >
//             {item.firstName}
//             {item.lastName}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Generics;

type htmlType = {
  html: React.ReactNode;
  children: React.ReactNode;
};

const Polymorphic = ({ html, children }: htmlType) => {
  return (
    <div>
      {html} {children}
    </div>
  );
};

export default Polymorphic;

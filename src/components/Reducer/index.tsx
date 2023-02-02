import React, { useReducer } from "react";

const initialState = { count: 0 };

type counterStateType = {
  count: number;
};

type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetAction = {
  type: "reset";
};

type counterActionType = updateAction | resetAction;


const reducer = (state: counterStateType, action: counterActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset"});
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;

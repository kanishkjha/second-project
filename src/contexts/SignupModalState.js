import React, { createContext, useReducer } from "react";

export const SignupContext = createContext();

export default function SignupModalStateProvider({ children }) {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return !state;
      case "HIDE":
        return !state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, false);

  return (
    <SignupContext.Provider value={{ state, dispatch }}>
      {children}
    </SignupContext.Provider>
  );
}

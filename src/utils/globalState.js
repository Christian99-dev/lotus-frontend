import React, { createContext, useReducer, useContext } from "react";

const defaultGlobalState = {
  navbarStuck: false,
};

const globalStateContext = createContext(defaultGlobalState);
const dispatchStateContext = createContext(undefined);

export const useGlobalState = () => [
  useContext(globalStateContext),
  useContext(dispatchStateContext),
];

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAVBAR":
        return { ...state, navbarStuck: action.value };
      default:
        return state;
    }
  }, defaultGlobalState);
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

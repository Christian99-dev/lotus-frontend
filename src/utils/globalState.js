import React, { createContext, useReducer, useContext } from "react";

const defaultGlobalState = {
  navbarStuck: false,
  popups: [],
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
      case "ADD_POPUP":
        const existingPopup = state.popups.find(
          (popup) => popup.popupID === action.value.popupID
        );
        if (existingPopup) {
          return { ...state };
        } else {
          return { ...state, popups: [...state.popups, action.value] };
        }
      case "SET_POPUP_STATUS":
        return {
          ...state,
          popups: state.popups.map((popup) => {
            if (popup.popupID === action.value.popupID) {
              return action.value;
            } else {
              return popup;
            }
          }),
        };
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

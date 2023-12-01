import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteList = (id) => {
    dispatch({
      type: "DELETE_LIST",
      payload: id,
    });
  };
  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  const addList = (transactions) => {
    dispatch({
      type: "ADD_LIST",
      payload: transactions,
    });
  };
  const isClicked = () => {
    setDivVisibility(!isDivVisible);
  };
  return (
    <AppContext.Provider
      value={{
        isDivVisible,
        isChecked,
        isClicked,
        transactions: state.transactions,
        deleteList,
        addList,
        toggleSwitch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

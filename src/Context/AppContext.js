import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [isDivVisible, setDivVisibility] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isClickedGreen, setIsClickedGreen] = useState(true);
  const [isClickedRed, setIsClickedRed] = useState(true);
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [greenButtonsActive, setGreenButtonsActive] = useState(true);
  const [redButtonsActive, setRedButtonsActive] = useState(true);

  const deleteList = (id) => {
    dispatch({
      type: "DELETE_LIST",
      payload: id,
    });
  };
  const addList = (transactions) => {
    dispatch({
      type: "ADD_LIST",
      payload: transactions,
    });
  };
  const isEarn = () => {
    setDivVisibility(!isDivVisible);
    setIsChecked(isChecked);
    setIsClickedGreen(!isClickedGreen);
    setGreenButtonsActive(!greenButtonsActive);
  };

  const isSpent = () => {
    setDivVisibility(!isDivVisible);
    setIsChecked(!isChecked);
    setIsClickedRed(!isClickedRed);
    setRedButtonsActive(!redButtonsActive);
  };


  return (
    <AppContext.Provider
      value={{
        isDivVisible,
        isChecked,
        isClickedGreen,
        isClickedRed,
        isEarn,
        isSpent,
        transactions: state.transactions,
        deleteList,
        addList,
        redButtonsActive,
        greenButtonsActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

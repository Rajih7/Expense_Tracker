import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const Expense = () => {
  const {
    isClickedGreen,
    isClickedRed,
    isSpent,
    isEarn,
    transactions,
    greenButtonsActive,
    redButtonsActive,
  } = useContext(AppContext);

  const amounts = transactions.map((transaction) =>
    parseFloat(transaction.amount)
  );

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="flex">
      <div className="text-slate-700 text-center w-1/2 font-bold bg-gradient-to-r from-green-500 to-lime-300">
        <h1>{income}₹</h1>
        <h2>Earned</h2>
        <button onClick={isEarn} disabled={!redButtonsActive} className="w-full">
          {isClickedGreen ? "+" : "x"}
        </button>
      </div>
      <div className="text-slate-700 text-center w-1/2 font-bold bg-gradient-to-r from-red-500 to-orange-400">
        <h1>{expense}₹</h1>
        <h2>Spent</h2>
        <button onClick={isSpent} disabled={!greenButtonsActive} className="w-full">
          {isClickedRed ? "-" : "x"}
        </button>
      </div>
    </div>
  );
};

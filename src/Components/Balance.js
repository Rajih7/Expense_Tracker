import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const Balance = () => {
  const { transactions } = useContext(AppContext);
  const amount = transactions.map((transaction) => {
    const amountValue = parseFloat(transaction.amount);
    return amountValue;
  });
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="blr mx-auto text-center font-bold lg:mt-5">
      <p className="text-2xl text-slate-500">Expense Tracker</p>
      <div className="bg-gradient-to-r from-cyan-600 to-sky-300 mt-3 rounded-t-xl">
        <h1 className="text-xl text-gray-600">Balance Amount</h1>
        <h3 className="text-xl text-gray-600">{total}₹</h3>
      </div>
    </div>
  );
};

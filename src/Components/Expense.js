import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const Expense = () => {
  const { isClicked, transactions, isDivVisible } = useContext(AppContext);

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
    <div>
      <div className="flex h-16">
        <div className="text-slate-600 text-center w-1/2 font-bold bg-gradient-to-r from-green-500 to-lime-300">
          <h1 className="text-xl">{income}₹</h1>
          <h2>Earned</h2>
        </div>
        <div className="text-slate-600 text-center w-1/2 font-bold bg-gradient-to-r from-red-500 to-orange-400">
          <h1 className="text-xl">{expense}₹</h1>
          <h2>Spent</h2>
        </div>
      </div>
      <div>
        <button
          class="cssbuttons-io-button w-full rounded-b-xl"
          onClick={isClicked}
        >
          <div class="icon text-gray-500">{isDivVisible ? "X" : 
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>}
          </div>
          {isDivVisible ? "Cancel" : "Add Expense/Income"}
        </button>
      </div>
    </div>
  );
};

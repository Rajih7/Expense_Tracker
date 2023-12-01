import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { ShowList } from "./ShowList";

export const Show = () => {
  const { transactions } = useContext(AppContext);
  return (
    <div className="text-center mt-2">
      <h3 className="text-lg">History</h3>
      <ul id="list" className="list">
        {transactions.map((transactions) => (
          <ShowList key={transactions.id} transactions={transactions}/>
        ))}
      </ul>
    </div>
  );
};

import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export const Form = () => {
  const { isChecked, isDivVisible, addList } = useContext(AppContext);
  const [test, setTest] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState();
  const [date, setDate ]= useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const currentDate=new Date();
    const newType = isChecked ? "EXPENSE" : "INCOME";
    const newList = {
      id: Math.floor(Math.random() * 100000000),
      test,
      amount: newType === "EXPENSE" && isChecked ? -amount : +amount,
      type: newType,
      date:currentDate.toLocaleDateString(),
    };
    if (test.trim() === "" || amount === 0) {
      alert("Please fill in all fields.");
      return;
    }
    setTest("");
    setAmount("");
    setType(newType);
    setDate("")
    addList(newList);
  };

  return (
    <div>
      {isDivVisible && (
        <div className="blr p-2 h-56">
          <form onSubmit={onSubmit}>
            <input
              type="radio"
              className="sr-only"
              id="income"
              name="type"
              value="INCOME"
            />
            <label className="themeSwitcherTwo shadow-card relative inline-flex select-none items-center justify-center rounded-l-md bg-white p-1">
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                  !isChecked ? "text-primary bg-[#2dd435]" : "text-body-color"
                }`}
              >
                Income
              </span>
            </label>
            <input
              type="radio"
              className="sr-only"
              id="expense"
              name="type"
              value="EXPENSE"
            />
            <label className="themeSwitcherTwo shadow-card relative inline-flex select-none items-center justify-center rounded-r-md bg-white p-1">
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                  isChecked ? "text-primary bg-[#d43e2d]" : "text-body-color"
                }`}
              >
                Expense
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here..."
              value={test}
              onChange={(e) => setTest(e.target.value)}
              className=" bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
            <input
              type="text"
              placeholder="Amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
            <button
              type="submit"
              className="continue-application mt-2 float-right"
            >
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

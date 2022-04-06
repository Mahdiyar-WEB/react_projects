import React, { useReducer, useContext, useState, useEffect } from "react";

const ExpenseContext = React.createContext();
const ExpenseContextDispatcher = React.createContext();
const IncomeContext = React.createContext();
const IncomeContextDispatcher = React.createContext();
const ListContext = React.createContext();
const ListContextDispatcher = React.createContext();
let allExpenses = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newExpense = { ...action.value, id: Date.now() };
      allExpenses = [...allExpenses, newExpense];
      const newValues = [...allExpenses];
      return newValues;
    }
    case "search": {
      if (action.value === "") {
        return allExpenses;
      } else {
        const filteredProducts = allExpenses.filter((expense) =>
          expense.desc.toLowerCase().includes(action.value.toLowerCase())
        );
        return filteredProducts;
      }
    }
    case "delete": {
      const filteredProducts = allExpenses.filter(
        (expense) => expense.id !== action.id
      );
      allExpenses = [...filteredProducts];
      return filteredProducts;
    }
    default:
      return state;
  }
};
const initialState = [];

const ExpenseTrackerProvider = ({ children }) => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [values, Dispatchvalues] = useReducer(reducer, initialState);

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    allExpenses.map((value) => {
      return value.type === "expense"
        ? (exp = exp + parseFloat(value.amount))
        : (inc = inc + parseFloat(value.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [values]);
  return (
    <ExpenseContext.Provider value={expense}>
      <ExpenseContextDispatcher.Provider value={setExpense}>
        <IncomeContext.Provider value={income}>
          <IncomeContextDispatcher.Provider value={setIncome}>
            <ListContext.Provider value={values}>
              <ListContextDispatcher.Provider value={Dispatchvalues}>
                {children}
              </ListContextDispatcher.Provider>
            </ListContext.Provider>
          </IncomeContextDispatcher.Provider>
        </IncomeContext.Provider>
      </ExpenseContextDispatcher.Provider>
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => useContext(ExpenseContext);
export const useExpenseAction = () => useContext(ExpenseContextDispatcher);
export const useIncome = () => useContext(IncomeContext);
export const useIncomeAction = () => useContext(IncomeContextDispatcher);
export const useList = () => useContext(ListContext);
export const useListActions = () => useContext(ListContextDispatcher);
export default ExpenseTrackerProvider;

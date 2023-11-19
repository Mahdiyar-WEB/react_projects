import { useState } from "react";
import styles from "./ExpenseDetails.module.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import {
  useExpense,
  useIncome,
  useListActions,
} from "../ExpenseProvider/ExpenseTrackerProvider";

const ExpenseDetails = () => {
  const expense = useExpense();
  const income = useIncome();
  const listActions = useListActions();
  const [showForm, setShowForm] = useState(0);
  const [search, setSearch] = useState("");
  const showFormHandler = () => {
    if (showForm === 0) {
      setShowForm(1);
    } else setShowForm(0);
  };
  const submitHandler = (values) => {
    listActions({ type: "add", value: values });
    listActions({ type: "balance" });
    setShowForm(0);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    listActions({ type: "search", value: e.target.value });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => searchHandler(e)}
      />
      <div className={styles.header}>
        <h3>
          Balance: $
          <span className={styles.value}>
            {(income - expense).toLocaleString()}
          </span>
        </h3>
        <button className={showForm && styles.cancel} onClick={showFormHandler}>
          {!showForm ? "ADD" : "CANCEL"}
        </button>
      </div>
      {showForm === 1 && <ExpenseForm onSubmit={submitHandler} />}
      <div className={styles.details}>
        <div>
          <h4>Expense</h4>
          <h3 className={styles.value}>${Number(expense).toLocaleString()}</h3>
        </div>
        <div>
          <h4>Income</h4>
          <h3 className={styles.value}>${Number(income).toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
};
export default ExpenseDetails;

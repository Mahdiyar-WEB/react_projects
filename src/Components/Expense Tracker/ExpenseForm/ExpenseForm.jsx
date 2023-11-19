import React, { useEffect, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ onSubmit }) => {
  const descriptionRef = React.createRef();
  const [formValues, setFormValues] = useState({
    type: "expense",
    desc: "",
    amount: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    if (
      formValues.desc === "" ||
      formValues.amount <= "0" ||
      formValues.amount === ""
    ) {
      e.preventDefault();
      alert("Fill All Inputs");
    } else onSubmit(formValues);
  };
  useEffect(() => {
    descriptionRef.current.focus();
  }, []);

  return (
    <form onSubmit={(e) => submitHandler(e)} className={styles.container}>
      <input
        value={formValues.desc}
        type="text"
        name="desc"
        onChange={changeHandler}
        ref={descriptionRef}
        className={styles.inputs}
        placeholder="Description"
      />
      <input
        value={formValues.amount}
        type="number"
        name="amount"
        onChange={changeHandler}
        className={styles.inputs}
        placeholder="Amount"
      />
      <div className={styles.details}>
        <div>
          <input
            type="radio"
            onChange={changeHandler}
            checked={formValues.type === "expense"}
            value="expense"
            name="type"
            id="expense"
          />
          <label htmlFor="expense">Expense</label>
        </div>
        <div>
          <input
            type="radio"
            onChange={changeHandler}
            checked={formValues.type === "income"}
            value="income"
            name="type"
            id="income"
          />
          <label htmlFor="income">Income</label>
        </div>
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};
export default ExpenseForm;

import Expense from "../Expense/Expense";
import {
  useList,
  useListActions,
} from "../ExpenseProvider/ExpenseTrackerProvider";
import styles from "./ExpenseList.module.css";

const ExpenseList = () => {
  const expenses = useList();
  const dispatch = useListActions();

  return (
    <section>
      {!expenses.length && <h3 className={styles.addItemMessage}>Add Item</h3>}
      <ul className={styles.container}>
        {expenses.map((expense) => {
          return (
            <Expense
              key={expense.id}
              desc={expense.desc}
              amount={expense.amount}
              type={expense.type}
              id={expense.id}
              onDelete={() => dispatch({ type: "delete", id: expense.id })}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default ExpenseList;

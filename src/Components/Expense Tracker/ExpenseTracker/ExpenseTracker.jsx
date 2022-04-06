import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import styles from "./ExpenseTracker.module.css";
import ExpenseTrackerProvider from "../ExpenseProvider/ExpenseTrackerProvider";
import ExpenseList from "../ExpenseList/ExpenseList";

const ExpenseTracker = () => {
  return (
    <section className={styles.container}>
      <h2>Expense Tracker</h2>
      <ExpenseTrackerProvider>
        <ExpenseDetails />
        <ExpenseList />
      </ExpenseTrackerProvider>
    </section>
  );
};
export default ExpenseTracker;

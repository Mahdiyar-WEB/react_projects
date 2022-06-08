import ExpenseTracker from "../../Components/Expense Tracker/ExpenseTracker/ExpenseTracker";
import styles from "./ExpenseTrackerApp.module.css";
const ExpenseTrackerApp = ()=>{
    return (
        <div className={styles.container}>
            <ExpenseTracker/>
        </div>
    )
}
export default ExpenseTrackerApp;
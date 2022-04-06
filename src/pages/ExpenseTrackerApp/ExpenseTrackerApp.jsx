import ExpenseTrackerkerker from "../../Components/Expense Tracker/ExpenseTracker/ExpenseTracker";
import styles from "./ExpenseTrackerApp.module.css";
const ExpenseTrackerApp = ()=>{
    return (
        <div className={styles.container}>
            <ExpenseTrackerkerker/>
        </div>
    )
}
export default ExpenseTrackerApp;
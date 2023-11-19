import styles from "./Expense.module.css";
import { BiTrash } from "react-icons/bi";

const Expense = ({ desc, type, amount, onDelete }) => {
  return (
    <li className={`${styles.container} ${type === "expense" ? styles.expense : styles.income}`}>
      <div>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.amount}>${Number(amount).toLocaleString()}</span>
      </div>
      <BiTrash onClick={onDelete} className={styles.trash} />
    </li>
  );
};
export default Expense;

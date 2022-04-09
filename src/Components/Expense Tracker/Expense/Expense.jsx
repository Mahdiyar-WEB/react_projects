import styles from "./Expense.module.css";
import { BiTrash } from "react-icons/bi";

const Expense = ({ desc, type, amount, onDelete }) => {
  return (
    <li className={styles.container}>
      <div>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.amount}>$ {amount}</span>
      </div>

      <p className={type === "expense" ? styles.expense : styles.income}>
        {type}
      </p>
      <BiTrash onClick={onDelete} className={styles.trash} />
    </li>
  );
};
export default Expense;

import styles from "./Todo.module.css";

const Todo = ({ subject, isCompleted, onComplete, onEdit, onDelete }) => {
  return (
    <li className={styles.container}>
      <p
        onClick={onComplete}
        className={`${isCompleted === true && styles.completed}`}
      >
        {subject}
      </p>
      <div>
        <button onClick={onEdit} className={styles.edit_btn}>
          Edit
        </button>
        <button onClick={onDelete} className={styles.delete_btn}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;

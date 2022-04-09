import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoProvider from "../TodoProvider/TodosProvider";
import styles from "./TodoApp.module.css";
const TodoApp = () => {
  return (
    <section className={styles.container}>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </section>
  );
};

export default TodoApp;

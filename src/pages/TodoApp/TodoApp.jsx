import TodoApp from "../../Components/Todo/TodoApp/TodoApp";
import styles from "./TodoApp.module.css";

const App = () => {
  return (
    <main className={styles.container}>
      <TodoApp />
    </main>
  );
};

export default App;

import { useState } from "react";
import Todo from "../Todo/Todo";
import EditTodo from "../EditTodo/EditTodo";
import { useTodos, useTodosActions } from "../TodoProvider/TodosProvider";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [edit, setEdit] = useState(null);
  const todos = useTodos();
  const dispatch = useTodosActions();

  const onEdit = (newValue) => {
    dispatch({ type: "edit", id: edit, event: newValue });
    setEdit(null);
  };
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <Todo
          onComplete={() => dispatch({ type: "toggle", id: todo.id })}
          onDelete={() => dispatch({ type: "delete", id: todo.id })}
          onEdit={() => setEdit(todo.id)}
          key={todo.id}
          subject={todo.subject}
          isCompleted={todo.isCompleted}
        />
      );
    });
  };
  return (
    <ul className={styles.container}>
      {!todos.length && <h3>Add Todo</h3>}
      {edit === null ? (
        renderTodos()
      ) : (
        <EditTodo submitTodo={onEdit} id={edit} />
      )}
    </ul>
  );
};

export default TodoList;

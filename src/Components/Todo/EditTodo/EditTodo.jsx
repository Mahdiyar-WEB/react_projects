import React, { useEffect, useState } from "react";
import styles from "./EditTodo.module.css";
import { useTodos } from "../TodoProvider/TodosProvider";
import { BsPencil } from "react-icons/bs";

const EditTodo = ({ submitTodo, id }) => {
  const todos = useTodos();
  const [value, setValue] = useState("");
  const inputRef = React.createRef();

  useEffect(() => {
    const definedTodo = todos.filter((todo) => todo.id === id);
    setValue(definedTodo[0].subject);
    // inputRef.current.value = definedTodo[0].subject;
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    submitTodo(value);
  };
  return (
    <form className={styles.container} onSubmit={(e) => sumbitHandler(e)}>
      <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={(e) => changeHandler(e)}
        placeholder="Edit..."
      />
      <button type="submit">
        Edit <BsPencil />
      </button>
    </form>
  );
};

export default EditTodo;

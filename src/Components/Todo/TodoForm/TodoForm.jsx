import { useState } from "react";
import { useTodosActions, useTodos } from "../TodoProvider/TodosProvider";
import styles from "./TodoForm.module.css";
import { BiPlus } from "react-icons/bi";
import { IconContext } from "react-icons";
import Navbar from "../Navbar/Navbar";
import Select from "react-select";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("All");
  const dispatch = useTodosActions();
  const todos = useTodos();

  const filterOptions = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const filterChangeHandler = (e) => {
    setFilter(e.value);
    dispatch({ type: "filter", event: e.value });
  };
  const submitHandler = (e) => {
    e.preventDefault(); // for stop refreshing form
    if (!todo) {
      alert("Enter Your Todo");
    } else {
      dispatch({ type: "addTodo", event: todo });
      dispatch({ type: "filter", event: filter });
    }
    setTodo("");
  };
  return (
    <div>
      <Navbar remaining={todos.filter((todo) => !todo.isCompleted).length} />
      <form className={styles.container} onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => changeHandler(e)}
          placeholder="Works..."
        />
        <IconContext.Provider value={{ size: "15px", style: {} }}>
          <button type="submit" className={styles.button}>
            Add <BiPlus />
          </button>
        </IconContext.Provider>
        <Select
          defaultValue={filterOptions[0]}
          className={styles.select}
          options={filterOptions}
          onChange={(e) => filterChangeHandler(e)}
        />
      </form>
    </div>
  );
};

export default TodoForm;

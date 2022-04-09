import React, { useContext, useReducer } from "react";

const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();

const initialState = [];
let filterTodos = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        subject: action.event,
        isCompleted: false,
      };
      filterTodos = [...filterTodos, newTodo];
      return filterTodos;
    }
    case "toggle": {
      const index = state.findIndex((product) => product.id === action.id);
      const definedProduct = { ...state[index] };
      definedProduct.isCompleted = !definedProduct.isCompleted;
      filterTodos[index] = definedProduct;
      const cloneTodos = [...state];
      cloneTodos[index] = definedProduct;
      return cloneTodos;
    }
    case "delete": {
      const filteredTodos = state.filter((product) => product.id !== action.id);
      filterTodos = filterTodos.filter((todo) => todo.id !== action.id);
      return filteredTodos;
    }
    case "edit": {
      const index = state.findIndex((todo) => todo.id === action.id);
      const definedTodo = { ...state[index] };
      definedTodo.subject = action.event;
      filterTodos[index] = definedTodo;
      const cloneTodos = [...state];
      cloneTodos[index] = definedTodo;
      console.log(cloneTodos[index]);
      return cloneTodos;
    }
    case "filter": {
      if (action.event === "All") {
        return filterTodos;
      } else if (action.event === "Completed") {
        const completed = filterTodos.filter((todo) => todo.isCompleted);
        return completed;
      } else if (action.event === "Uncompleted") {
        const uncompleted = filterTodos.filter((todo) => !todo.isCompleted);
        return uncompleted;
      }
      break;
      }
    default:
      return state
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={todos}>
      <TodosContextDispatcher.Provider value={dispatch}>
        {children}
      </TodosContextDispatcher.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
export const useTodosActions = () => useContext(TodosContextDispatcher);

export default TodoProvider;

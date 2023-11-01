import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Finish the course" },
  ]);
  const [count, setCount] = useState(todos.length + 1);

  const addInputHandler = (text: string) => {
    setCount((prev) => prev + 1);
    setTodos((prev) => [...prev, { id: count, text: text }]);
  };
  const removeHandler = (todoId: number) => {
    setTodos((prev) => prev.filter((each) => each.id !== todoId));
  };

  return (
    <>
      <NewTodo addInput={addInputHandler} />
      <TodoList remove={removeHandler} todoList={todos} />
    </>
  );
};

export default App;

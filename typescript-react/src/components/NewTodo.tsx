import { useRef } from "react";

interface NewToDoProps {
  addInput: (a: string) => void;
}

const NewTodo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addInput(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="todo-text"> Todo text</label>
        <input ref={textInputRef} type="text" id="todo-text"></input>
      </div>
      <button
        style={{
          padding: "0.5em",
          backgroundColor: "hotpink",
          color: "white",
          fontWeight: "bold",
          marginTop: "10px",
        }}
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;

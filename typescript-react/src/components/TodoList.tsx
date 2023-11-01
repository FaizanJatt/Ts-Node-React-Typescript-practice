interface TodoListProps {
  todoList: { id: number; text: string }[];
  remove: (a: number) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <>
      <ul style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        {props.todoList.map((todos) => (
          <li
            style={{ listStyle: "none" }}
            key={todos.id}
            id={todos.id.toString()}
          >
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  padding: "10px",
                  backgroundColor: "rgb(242, 188, 207)",
                }}
              >
                {todos.text}
              </div>
              <div
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
                onClick={props.remove.bind(this, todos.id)}
              >
                X
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

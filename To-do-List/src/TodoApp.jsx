import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    "엽떡 시키기",
    "빠칭코 가기",
    "일본어 공부하기",
    "플룻 불기",
    "피아노 연습하기",
    "책 읽기",
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      className="todoBox"
    >
      {todos.map((text, i) => (
        <Todolist key={i} text={text} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          name="title"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button style={{ color: "#8EC8F6" }} onClick={addTodo}>
          입력
        </button>
      </div>
    </div>
  );
};

export default TodoApp;

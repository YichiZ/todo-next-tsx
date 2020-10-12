import { useState } from "react";

type Props = {
  onAddTodo: (text: string) => void;
};

function AddTodo({ onAddTodo }: Props) {
  const [todoText, setTodoText] = useState("");

  return (
    <div className="addTodo">
      <label>
        Add todo:
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAddTodo(todoText)}
        ></input>
      </label>
      <button
        className="submit"
        type="button"
        onClick={() => onAddTodo(todoText)}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;

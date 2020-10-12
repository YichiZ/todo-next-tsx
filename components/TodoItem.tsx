import { TodoItemModel } from "../interfaces";

type Props = {
  todo: TodoItemModel;
  onEditTodo: (todo: TodoItemModel) => void;
  onDeleteTodo: (todo: TodoItemModel) => void;
};

function TodoItem({ todo, onEditTodo, onDeleteTodo }: Props) {
  return (
    <div className="todoItem">
      <li key={todo.id}>
        <button
          className="completed"
          onClick={() =>
            onEditTodo({
              id: todo.id,
              title: todo.title,
              completed: !todo.completed,
              userId: todo.userId,
            })
          }
        >
          Complete
        </button>
        <input
          type="text"
          value={todo.title}
          onChange={(e) =>
            onEditTodo({
              id: todo.id,
              title: e.target.value,
              completed: todo.completed,
              userId: todo.userId,
            })
          }
        ></input>
        <button className="delete" onClick={() => onDeleteTodo(todo)}>
          Delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;

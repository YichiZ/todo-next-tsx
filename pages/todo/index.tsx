import { GetServerSideProps } from "next";
import { useState } from "react";
import AddTodo from "../../components/AddTodo";
import Save from "../../components/Save";
import TodoItem from "../../components/TodoItem";
import { TodoItemModel } from "../../interfaces/index";
import fetch from "node-fetch";
import { absoluteUrl } from "../../utils/utilsFunctions";

type Props = {
  initialTodos: TodoItemModel[];
};

function Todo({ initialTodos }: Props) {
  const [todos, setTodos] = useState(initialTodos);
  const [counter, setCounter] = useState(10);

  const handleAddTodo = (text: string) => {
    const newId = counter + 1;
    setCounter(newId);

    const newTodo: TodoItemModel = {
      completed: false,
      title: text,
      id: newId,
      userId: 1,
    };

    setTodos([...todos, newTodo]);
  };

  const handleEditTodo = (todo: TodoItemModel) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.id === todo.id);
    newTodos[index] = todo;

    setTodos(newTodos);
  };

  const handleDeleteTodo = (todo: TodoItemModel) => {
    setTodos([...todos.filter((t) => t.id !== todo.id)]);
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <Save todos={todos} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const location = absoluteUrl(process.env.VERCEL_URL as string);

  const response = await fetch(`${location}/api/todos`);
  let initialTodos: TodoItemModel[] = await response.json();

  console.log(process.env.MONGODB_URI);

  return {
    props: {
      initialTodos,
    },
  };
};
export default Todo;

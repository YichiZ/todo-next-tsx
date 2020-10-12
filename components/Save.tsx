import { TodoItemModel } from "../interfaces";

type Props = {
  todos: TodoItemModel[];
};

function Save({ todos }: Props) {
  console.log(todos);

  return <button>Save</button>;
}

export default Save;

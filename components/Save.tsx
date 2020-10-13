import { TodoItemModel } from "../interfaces";

type Props = {
  todos: TodoItemModel[];
};

function Save({ todos }: Props) {
  const handleSave = async () => {
    const url =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");

    const res = await fetch(`${url}/api/todos`, {
      method: "POST",
      body: JSON.stringify(todos),
    });
  };

  return <button onClick={handleSave}>Save</button>;
}

export default Save;

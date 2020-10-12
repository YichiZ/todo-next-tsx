import { TodoItemModel } from "../interfaces";

type Props = {
  todos: TodoItemModel[];
};

function Save({ todos }: Props) {
  const handleSave = () => {
    // const response = fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "POST",
    //   body: JSON.stringify({ here: "here" }),
    //   mode: "no-cors",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => console.log(response.json()))
    //   .catch((error) => console.log(error));
  };

  return <button onClick={handleSave}>Save</button>;
}

export default Save;

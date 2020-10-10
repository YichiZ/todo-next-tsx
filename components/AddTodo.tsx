import { SyntheticEvent, useState } from "react"
type Props = {
    onAddTodo: (text: string) => void
}

function AddTodo({ onAddTodo }: Props) {
    const [todoText, setTodoText] = useState("")

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onAddTodo(todoText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add todo:
                <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)}></input>
            </label>
            <input type="submit" value="Add"></input>
        </form>
    )
}

export default AddTodo
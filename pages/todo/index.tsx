import { GetStaticProps } from 'next';
import { useState } from 'react';
import AddTodo from '../../components/AddTodo';
import { TodoItem } from '../../interfaces/index'

type Props = {
    initialTodos: TodoItem[]
}

function Todo({ initialTodos }: Props) {
    const [todos, setTodo] = useState(initialTodos);
    const [counter, setCounter] = useState(10);

    const handleAddTodo = (text: string) => {
        const newId = counter + 1;
        setCounter(newId);

        const newTodo: TodoItem = {
            completed: false,
            title: text,
            id: newId,
            userId: 1
        }

        setTodo([...todos, newTodo])
    }

    return (<div>
        <AddTodo onAddTodo={handleAddTodo} />
        <ul>
            {
                todos.map(todo =>
                    <li key={todo.id}>{todo.title}</li>)
            }
        </ul>
    </div>

    )

}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const initTodosNumber = 10
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${initTodosNumber}`);
    const initialTodos: TodoItem[] = await response.json();

    return {
        props: {
            initialTodos,
        },
    }
}

export default Todo

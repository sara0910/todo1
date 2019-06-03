import React, { useState } from 'react';
import TodoList from '../TodoList';

export interface Todo {
    id: number,
    name: string,
    isCompleted: boolean
}

const TodoAdd:React.FC<any> = () => {

    const defaultTodos = [
        { id: 1, name: 'Create Todo App', isCompleted: true },
        { id: 2, name: 'Understand Functional Components', isCompleted: true },
        { id: 3, name: 'Understand Hooks', isCompleted: false },
    ];

    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState(defaultTodos);

    const handleAddTodo = () => {
        const todo = { id: Date.now(), name: todoName, isCompleted: false };
        setTodoList([...todoList, todo]);
    }

    const onTodoChange = (cTodo: Todo) => {
        setTodoList(todoList.map(t => t.id === cTodo.id ? cTodo : t));
    }

    const onTodoDelete = (id: number) => {
        setTodoList(todoList.filter(t => t.id !== id ));
    }

    return (
        <>
            <h3>Add Todo</h3>
            <input type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
            <button onClick={() => handleAddTodo()}>Add</button>
            <TodoList todos={todoList} onTodoChange={onTodoChange} onTodoDelete={onTodoDelete}  />
        </>
    )
}

export default TodoAdd;

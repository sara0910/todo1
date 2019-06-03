import React, { useState } from 'react';
import { Todo } from '../TodoAdd';

interface TodoListProps {
    todos: Array<Todo>;
    onTodoChange: any;
    onTodoDelete: any;
}
const TodoList: React.FC<TodoListProps> = ({ todos, ...props }) => {
    const { onTodoChange, onTodoDelete } = props;
    return (
        <>
            <h3>TODO List</h3>
            {todos.map( (todo: Todo, index: number) => <TodoItem todo={todo} key={index} handleTodo={onTodoChange} handleDelete={onTodoDelete} />)}
        </>
    )
};

interface TodoItem {
    todo: Todo;
    handleTodo: any;
    handleDelete: any;
}

const TodoItem: React.FC<TodoItem>= ({ todo, handleTodo, handleDelete }) => {
    const { name, isCompleted, id} = todo;
    const [ isEdit, setIsEdit] = useState(false);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { target: { checked }} = e;
        const newTodo = { ...todo, isCompleted: checked };
        handleTodo(newTodo);
    }

    return (
        <div>
            <input type="checkbox" onChange={(e) => handleChange(e)} checked={isCompleted} />
            <span>{isCompleted ? <s>{name}</s> : name}</span>
            <button>Edit</button>
            <button>Save</button>
            <button onClick={() => handleDelete(id)} >Delete</button>
        </div>
    );
}

export default TodoList;


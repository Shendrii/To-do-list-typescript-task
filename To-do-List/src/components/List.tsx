import React, { useState } from "react";
import { Todo } from "../type";
import { FaPencil } from "react-icons/fa6";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
}

const List = ({ todos, setTodos, todo }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setIsEditing(!isEditing);
  };
  return (
    <form className="todos_single">
      {isEditing ? (
        <input
          type="text"
          className="todos"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <div>
          <s className="todos">{todo.todo}</s>
        </div>
      ) : (
        <div>
          <li className="todos">{todo.todo}</li>
        </div>
      )}

      <div className="buttons">
        <button
          type="button"
          onClick={() => handleEdit(todo.id)}
          className="btn btn-warning"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <button
          type="button"
          className="doneIcon"
          onClick={() => handleDone(todo.id)}
        >
          <FaPencil />
        </button>
      </div>
    </form>
  );
};

export default List;

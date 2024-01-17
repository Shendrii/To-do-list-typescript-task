import React from "react";
import { Todo } from "../type";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const List = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <ul className="list">{todo.todo}</ul>
      ))}
    </div>
  );
};

export default List;

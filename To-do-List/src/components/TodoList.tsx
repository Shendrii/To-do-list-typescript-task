import React from "react";
import { Todo } from "../type";
import List from "./List";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <List todos={todos} setTodos={setTodos} />
      <div></div>
    </div>
  );
};

export default TodoList;

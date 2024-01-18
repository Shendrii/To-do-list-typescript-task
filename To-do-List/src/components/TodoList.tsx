import React from "react";
import { Todo } from "../type";
import List from "./List";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <div>
            <List todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

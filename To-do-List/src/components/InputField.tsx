import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <div className="input-group mb-3">
        <input
          id="input_field"
          className="form-control"
          type="input"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Enter Task"
        />
        <span className="input-group-text">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </span>
      </div>
    </form>
  );
};

export default InputField;

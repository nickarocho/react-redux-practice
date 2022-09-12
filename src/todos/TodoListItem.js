import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <label htmlFor="todo-completed">Done-zo:</label>
      <input
        name="todo-completed"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onCompletedPressed(todo.text, !todo.isCompleted)}
      />
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;

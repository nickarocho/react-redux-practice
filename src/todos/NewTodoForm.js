import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "actions";
import "./NewTodoForm.css";

// `todos` prop comes from the `mapStateToProps` method below
// `onCreatePressed` comes from `mapDispatchToProps`
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

// `state` here represents the ENTIRE Redux state
// the job of `mapStateToProps` is to take the `state` object, and returning
// another object containing the pieces of that state that this component needs access to
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// similar to `mapStateToProps`, but instead of taking `state`, as an arg - it takes `dispatch`
// `dispatch` allows our components to trigger actions which our store will respond to
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

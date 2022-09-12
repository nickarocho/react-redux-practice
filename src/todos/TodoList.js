import React from "react";
import { connect } from "react-redux";
import { removeTodo, updateTodoComplete } from "./actions";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({
  todos = [{ text: "test todo" }],
  onRemovePressed,
  onCompletedPressed,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        key={todo.text}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text, isCompleted) =>
    dispatch(updateTodoComplete(text, isCompleted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

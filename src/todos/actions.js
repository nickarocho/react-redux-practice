export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE";
export const updateTodoComplete = (text, isCompleted) => ({
  type: TOGGLE_TODO_COMPLETE,
  payload: { text, isCompleted },
});

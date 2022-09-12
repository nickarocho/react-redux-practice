import { CREATE_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETE } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      // IMPORTANT! When working with reducers, we don't want to mutate the state at all
      // so using `.concat` works since it doens't mutate the original array
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case TOGGLE_TODO_COMPLETE: {
      const { text, isCompleted } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};

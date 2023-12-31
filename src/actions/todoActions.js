import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FINISH_TODO,
} from "../constants/actions";

export const todoFinished = (todo, isFinished) => ({
  type: FINISH_TODO,
  payload: { todo, isFinished: isFinished },
});

export const addTodo = (inputText) => ({
  type: ADD_TODO,
  payload: { todoText: inputText },
});

export const editTodo = (todo, todoText) => ({
  type: EDIT_TODO,
  payload: { todo, todoText },
});

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: { todo },
});

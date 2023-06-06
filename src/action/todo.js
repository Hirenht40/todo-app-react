import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./action-types";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (todo,id) => ({
  type:EDIT_TODO,
  payload: todo,id
})
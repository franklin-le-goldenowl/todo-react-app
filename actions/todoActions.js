import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHANGE_TODO_FILTER,
  CLEAR_COMPLETED_TODO,
} from '../constants/todoConstants';
import { createTodoInstance } from '../utils/todoUtils';

export const createTodoDispatchRequest = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const deleteTodoDispatchRequest = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const updateTodoDispatchRequest = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: { id, attributes },
});

export const changeTodoFilterDispatchRequest = (filter) => ({
  type: CHANGE_TODO_FILTER,
  payload: { filter },
});

export const clearCompletedTodoDispatchRequest = () => ({
  type: CLEAR_COMPLETED_TODO,
});

export const createTodo = (content) => (dispatch) => {
  const todo = createTodoInstance(content);
  dispatch(createTodoDispatchRequest(todo));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoDispatchRequest(id));
};

export const updateTodo = (id, attributes) => (dispatch) => {
  dispatch(updateTodoDispatchRequest(id, attributes));
};

export const changeTodoFilter = (filter) => (dispatch) => {
  dispatch(changeTodoFilterDispatchRequest(filter));
};

export const clearCompletedTodo = () => (dispatch) => {
  dispatch(clearCompletedTodoDispatchRequest());
};

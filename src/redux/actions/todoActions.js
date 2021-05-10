import { todoConstants } from "../actionTypes";
import shortid from "shortid"

// <===================> todoAdd <===================>
export const todoAdd = (text) => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_ADD_REQUEST,
    });

    const newTodo = {
      id: shortid.generate(),
      title: text,
      isDone: false,
    }

    dispatch({
      type: todoConstants.TODO_ADD_SUCCESS,
      payload: newTodo,
    });
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_ADD_FAILED,
      error: e,
    });
  }
};

// <===================> todoUpdate <===================>
export const todoUpdate = ({id, title, isDone}) => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_UPDATE_REQUEST,
    });

    dispatch({
      type: todoConstants.TODO_UPDATE_SUCCESS,
      payload: {id, title, isDone},
    });
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_UPDATE_FAILED,
      error: e,
    });
  }
};

// <===================> todoDelete <===================>
export const todoDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_DELETE_REQUEST,
    });

    dispatch({
      type: todoConstants.TODO_DELETE_SUCCESS,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_DELETE_FAILED,
      error: e,
    });
  }
};

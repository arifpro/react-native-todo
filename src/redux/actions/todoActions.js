import { todoConstants } from "../actionTypes";

// <===================> todoAdd <===================>
export const todoAdd = (data) => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_ADD_REQUEST,
    });

    dispatch({
      type: todoConstants.TODO_ADD_SUCCESS,
      payload: data.text,
    });
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_ADD_FAILED,
      error: e,
    });
  }
};

// <===================> todoUpdate <===================>
export const todoUpdate = (id, text) => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_UPDATE_REQUEST,
    });

    dispatch({
      type: todoConstants.TODO_UPDATE_SUCCESS,
      payload: {id, text},
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

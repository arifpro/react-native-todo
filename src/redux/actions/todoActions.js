import axios from "axios";
import shortid from "shortid";
import { todoConstants } from "../actionTypes";

// const API_URL = "http://localhost:7000/api/todo";
const API_URL = 'https://rn-todo-arif.herokuapp.com/api/todo'

// <===================> todoGet <===================>
export const todoGet = () => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_GET_REQUEST,
    });

    const res = await axios.get(`${API_URL}/get-all`);

    if (res) {
      dispatch({
        type: todoConstants.TODO_GET_SUCCESS,
        payload: res.data.todos,
      });
    } else {
      dispatch({
        type: todoConstants.TODO_GET_FAILED,
        error: "unable to get todo data",
      });
    }
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_GET_FAILED,
      error: e,
    });
  }
};

// <===================> todoAdd <===================>
export const todoAdd = (title) => async (dispatch) => {
  try {
    dispatch({
      type: todoConstants.TODO_ADD_REQUEST,
    });

    // const newTodo = {
    //   id: shortid.generate(),
    //   title,
    //   isDone: false,
    // };

    const res = await axios.post(`${API_URL}/add`, { title });

    if (res.status === 200) {
      dispatch(todoGet());
      // dispatch({
      //   type: todoConstants.TODO_ADD_SUCCESS,
      //   payload: res.data,
      // });
    } else {
      dispatch({
        type: todoConstants.TODO_ADD_FAILED,
        error: "unable to add todo data",
      });
    }
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_ADD_FAILED,
      error: e,
    });
  }
};

// <===================> todoUpdate <===================>
export const todoUpdate =
  ({ id, title, isDone }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: todoConstants.TODO_UPDATE_REQUEST,
      });

      const res = await axios.post(`${API_URL}/update`, { id, title, isDone });

      if (res.status === 200) {
        dispatch(todoGet());
        // dispatch({
        //   type: todoConstants.TODO_UPDATE_SUCCESS,
        //   payload: { id, title, isDone },
        // });
      } else {
        dispatch({
          type: todoConstants.TODO_ADD_FAILED,
          error: "unable to update todo data",
        });
      }
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

    const res = await axios.post(`${API_URL}/delete`, { id });

    if (res.status === 200) {
      dispatch(todoGet());
      // dispatch({
      //   type: todoConstants.TODO_DELETE_SUCCESS,
      //   payload: id,
      // });
    } else {
      dispatch({
        type: todoConstants.TODO_ADD_FAILED,
        error: "unable to delete todo data",
      });
    }
  } catch (e) {
    dispatch({
      type: todoConstants.TODO_DELETE_FAILED,
      error: e,
    });
  }
};

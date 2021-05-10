import { todoConstants } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  todoData: [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      isDone: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      isDone: true,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      isDone: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  // console.log(action.payload);

  switch (action.type) {
    // <===================> todoAdd <===================>
    case todoConstants.TODO_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoConstants.TODO_ADD_SUCCESS:
      const isAdded = state.todoData?.find(item => item.productId === action.payload.productId);
      return isAdded === undefined ? {
        ...state,
        loading: false,
        success: "",
        todoData: [...state.todoData, action.payload],
      } : {...state};
    case todoConstants.TODO_ADD_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to set todo data",
      };

    // <===================> todoUpdate <===================>
    case todoConstants.TODO_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoConstants.TODO_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "",
        todoData: state.todoData?.map((singleCartItem) => {
          if (singleCartItem.productId === action.payload?.id) {
            console.log(singleCartItem);

            return {
              ...singleCartItem,
              productQty: action.payload?.qty,
              total: singleCartItem.productDiscountPrice
                ? singleCartItem.productDiscountPrice * action.payload?.qty
                : singleCartItem.productPrice * action.payload?.qty,
            };
          } else {
            return { ...singleCartItem };
          }
        }),
      };
    case todoConstants.TODO_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to update todo data",
      };

    // <===================> todoDelete <===================>
    case todoConstants.TODO_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoConstants.TODO_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "",
        todoData: state.todoData?.filter(item => item.productId !== action.payload),
      };
    case todoConstants.TODO_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to delete todo data",
      };

    default:
      return state;
  }
};

export default todoReducer;

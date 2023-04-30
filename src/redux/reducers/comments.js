import { ADD_POST, DELETE_ITEM } from "../actions";

const initialState = [
  
];



const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
      case DELETE_ITEM :
        console.log(state);
        return state.filter((e) => e.id !== action.payload );
    default:
      return state;
  }
};

export default postReducer;




import { ADD_NAME } from '../actions';

const INITIAL_STATE = {
  username: '',
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_NAME:
    return {
      ...state,
      username: action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
import { ADD_NAME } from '../actions';

const INITIAL_STATE = {
  name: '',
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_NAME:
    return {
      ...state,
      email: action.payload.name,
    };
  default:
    return state;
  }
};

export default loginReducer;
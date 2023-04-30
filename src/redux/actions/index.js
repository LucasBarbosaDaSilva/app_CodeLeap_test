export const ADD_NAME = 'ADD_NAME';
export const ADD_POST = 'ADD_POST';
export const DELETE_ITEM = 'DELETE_ITEM';


export const addName = (username) => ({
  type: ADD_NAME,
  payload: username,
});



export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: {
      ...post,
    },
  };
};
export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload
  }
}
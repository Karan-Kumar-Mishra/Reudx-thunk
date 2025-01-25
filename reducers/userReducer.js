
const initialState =[]

  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return state;
      case 'FETCH_USERS_SUCCESS':
        return action.payload;
      case 'FETCH_USERS_FAILURE':
        return state;
      case 'UP':
        return state;
      default:
        return state;
    }
  };
  
  export default userReducer;
  
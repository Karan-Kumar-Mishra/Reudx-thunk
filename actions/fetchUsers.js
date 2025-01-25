// src/actions/userActions.js
export const fetchUsers = () => {
    return  (dispatch) => {
      dispatch({ type: 'FETCH_USERS_REQUEST' });
  
      try {
      fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
        return res.json();
      }).then((data)=>{
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
      })
      
      } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
      }
    };
  };
  
// src/redux/reducers/myReducer.js
const initialState = {
    data: "default",
    loading: false,
    error: null,
  };
  
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'karan':
        return {...state , data:action.payload}; 
        default:
        return state;
    }
  };
  
  export default myReducer;
  
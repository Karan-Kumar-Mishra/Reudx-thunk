export const up = () => {
    return async (dispatch, getState) => {
         const state=getState();
          console.log("state is ",state.user.data.count);
          state.user.data.count=state.user.data.count+1
        //   dispatch({ type: 'FETCH_USERS_REQUEST' });
        dispatch({ type: 'UP'  });
  
    };
  };
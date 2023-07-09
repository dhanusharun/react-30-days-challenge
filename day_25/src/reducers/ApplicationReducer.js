const initialState = {
    isAuthenticated: false,
  };
  
const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log(action.type)
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    // Other cases...
    default:
      return state;
  }
  };
  
export default ApplicationReducer;
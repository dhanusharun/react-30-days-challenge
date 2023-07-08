const initialState = {
    activeIcon: null,
  };
  
const ApplicationReducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVE_ICON":
        return {
          ...state,
          activeIcon: action.payload,
        };
      default:
        return state;
    }
  };
  
export default ApplicationReducer;
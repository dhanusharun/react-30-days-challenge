const initialState = {
    years: 0,
    months: 0,
    days: 0
  };


const calculateReducer = (state = initialState, action) => {
switch (action.type) {
    case "SUBMIT_CAL":
    return {
        ...action.data
    };
    default:
    return state;
}
};

export default calculateReducer;
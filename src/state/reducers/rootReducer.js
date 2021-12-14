const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_SCORE':
      return {
        ...state,
        userScore: action.payload
      };

    case 'ADD_CPU_SCORE':
      return {
        ...state,
        cpuScore: action.payload
      };

    default:
      return state;
  }
}

export default rootReducer;

const initState = {
  isLoading: true,
  isCreating: false
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
      return {
        ...state,
        isLoading: false
      };
    case "CREATE_PROJECT_ERROR":
      console.log("Creating project gives an error: ", action.err);
      return state;
    case "CREATE_PROJECT_LOADING":
      console.log("Creating a project...");
      return {
        ...state,
        isCreating: true
      };
    default:
      return { ...state, isLoading: true, isCreating: false };
  }
};

export default projectReducer;

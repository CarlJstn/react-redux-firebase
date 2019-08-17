const initState = {
  projects: [{ id: '1', title: 'Official Project', content: 'asd asd asd asd asd asd asd asd asd' }, { id: '2', title: 'My First Project', content: 'asd asd asd asd asd asd asd asd asd' }, { id: '3', title: 'Smart Project', content: 'asd asd asd asd asd asd asd asd asd' }]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Creating project gives an error: ', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;

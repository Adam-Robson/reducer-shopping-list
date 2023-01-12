export const initialState = () => {
  return {
    loadingMode: 'rest',
    loadingError: null,
    newItemText: '',
    list: []
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'load-start-action':
      return {
        ...state,
        list: action.list,
        loadingMode: 'success'
      };
    case 'load-success-action':
      return {
        ...state,
        loadingMode: 'loading'
      };
    case 'new-item-text-change':
      return {
        ...state,
        newItemText: action.newItemText
      };
    default:
      console.error(`${action.type} not supported`);
      return state;
  } 
};

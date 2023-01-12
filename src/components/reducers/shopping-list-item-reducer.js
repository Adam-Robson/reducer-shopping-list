export const initialState = () => {
  return {
    loadingMode: 'at-rest',
    shoppingList: [
      { id: '1', body: 'first item' }
    ]
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'list-load-start':
      return {
        ...state,
        loadingMode: 'loading'
      };
    case 'list-load-success':
      return {
        ...state,
        list: action.list,
        loadingMode: 'success'
      };
    default:
      console.error(`Action type not supported ${action.type}`);
      return state;
  } 
};

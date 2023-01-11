export const initialState = () => {
  return {
    shoppingList: [
      { id: '1', body: 'first item' }
    ]
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'shopping-list-load-success':
    default:
      return state;
  } 
};

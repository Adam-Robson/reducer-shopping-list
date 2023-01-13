export const initialState = () => {
  return {
    loadingMode: 'rest',
    loadingError: null,
    newText: '',
    list: []
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'load-start-action':
      return {
        ...state,
        loadingMode: 'loading'
      };
    case 'load-success-action':
      return {
        ...state,
        list: action.list,
        loadingMode: 'rest'
      };
    case 'text-change-action':
      return {
        ...state,
        newText: action.newText
      };
    case 'list-change-action': { 
      const newList = [...state.list];
      const newIndex = newList.findIndex(item => item.id === action.itemId);
      newList[newIndex] = {
        ...newList[newIndex],
        viewed: action.viewed
      };
      return {
        ...state,
        newList
      };
    }
    default:
      console.error(`${action.type} not supported`);
      return state;
  } 
};

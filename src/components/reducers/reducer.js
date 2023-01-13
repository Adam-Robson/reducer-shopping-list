export const initialState = {
  loadMode: 'rest',
  loadError: null,
  list: []
};

export const reducer = (action, state) => {
  switch(action.type) {

    case 'load-start-action': 
      return {
        ...state,
        loadMode: 'loading'
      };
    
    case 'load-success-action':
      return {
        ...state,
        loadMode: 'rest'
      };
    
    case 'load-error-action':
      return {
        loadError: null
      };

    case 'form-text-change-action':
      return {
        ...state,
        newText: action.newText
      };

    case 'item-checked-action': {
      const newList = [...state.list];
      const index = newList.findIndex(
        item => item.id === action.itemId
      );
      newList[index] = {
        ...newList[index],
        checked: action.checked
      };
      return {
        ...state,
        newList
      };
    }
    
    default:
      console.error(`${action.type} is not supported`);
      return state;
  }
};

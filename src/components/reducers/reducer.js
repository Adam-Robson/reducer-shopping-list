export const initialState = {
  newText: '',
  newQty: '',
  list: [],
  loadMode: 'rest',
  loadError: null
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

    case 'form-text-action':
      return {
        ...state,
        text: action.newText
      };

    case 'form-qty-action':
      return {
        ...state,
        qty: action.newQty
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

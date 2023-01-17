import { LOAD_START_ACTION_TYPE } from '../../actions/actions';

export const initialState = {
  list: [],
  loadMode: 'rest',
  loadError: null
};

export const reducer = (state, action) => { 

  switch(action.type) { 

    case LOAD_START_ACTION_TYPE:
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

    case 'item-checked-action': { 
      const newList = [...state.list];
      const newIndex = newList.findIndex(
      
        item => item.id === action.itemId
      );
      newList[newIndex] = {
        ...newList[newIndex],
        checked: action.checked 
      };
      return { 
        ...state,
        list: newList
      };
    }
    
    case 'submit-form-action': {
      const listCopy = [...state.list];
      const newItem = {
        id: Date.now(),
        description: action.description,
        qty: action.qty,
        checked: false
      };
      listCopy.push(newItem);
      return {
        ...state,
        list: listCopy
      };
    }

    default:
      console.error(`${action.type} is not supported`);
      return state;
  }
};

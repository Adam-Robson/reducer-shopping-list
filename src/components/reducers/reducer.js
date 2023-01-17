import { LOAD_START_ACTION } from '../../actions/actions';
import { LOAD_SUCCESS_ACTION } from '../../actions/actions';
import { LOAD_ERROR_ACTION } from '../../actions/actions';
import { ITEM_CHECKED_ACTION } from '../../actions/actions';
import { SUBMIT_FORM_ACTION } from '../../actions/actions';

export const initialState = {
  list: [],
  loadMode: 'rest',
  loadError: null
};

export const reducer = (state, action) => { 

  switch(action.type) { 

    case LOAD_START_ACTION:
      return { 
        ...state,
        loadMode: 'loading'
      };
    
    case LOAD_SUCCESS_ACTION:
      return {
        ...state,
        loadMode: 'rest'
      };
    
    case LOAD_ERROR_ACTION:
      return {
        loadError: null
      };

    case ITEM_CHECKED_ACTION: { 
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
    
    case SUBMIT_FORM_ACTION: {
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

import { LOAD_START_ACTION } from '../../actions/actions';
import { LOAD_SUCCESS_ACTION } from '../../actions/actions';
import { LOAD_ERROR_ACTION } from '../../actions/actions';
import { ITEM_CHECKED_ACTION } from '../../actions/actions';
import { SUBMIT_FORM_ACTION } from '../../actions/actions';
import { DESCRIPTION_CHANGE_ACTION } from '../../actions/actions';
import { QTY_CHANGE_ACTION } from '../../actions/actions';

export const initialState = () => {
  return {
    list: [],
    description: '',
    qty: Number(0),
    loadMode: 'rest',
    loadError: null
  };
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

    case DESCRIPTION_CHANGE_ACTION: {
      return {
        ...state,
        description: action.description
      };
    }

    case QTY_CHANGE_ACTION: {
      return {
        ...state,
        qty: action.qty
      };
    }

    default:
      console.error(`${action.type} is not supported`);
      return state;
  }
};

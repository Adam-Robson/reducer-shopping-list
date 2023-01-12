import { 
  listLoadSuccessAction, 
  listLoadStartAction,
  listLoadErrorAction,
} from '../../actions/list-actions';
import { getShoppingListItems } from '../services/shopping-list-items';

export const postListEffects = async (dispatch) => {
  dispatch(listLoadStartAction());
  try {
    const items = await getShoppingListItems();
    dispatch(listLoadSuccessAction(items));
  } catch (err) {
    dispatch(listLoadErrorAction(err));
  }
};


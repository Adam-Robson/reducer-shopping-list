import { 
  loadSuccessAction, 
  loadStartAction,
  loadErrorAction,
} from '../../actions/list-actions';
import { getItems } from '../services/shopping-list-items';

export const postListEffects = async (dispatch) => {
  dispatch(loadStartAction());
  try {
    const items = await getItems();
    dispatch(loadSuccessAction(items));
  } catch (err) {
    dispatch(loadErrorAction(err));
  }
};

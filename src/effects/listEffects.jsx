import { 
  loadSuccessAction, 
  loadStartAction,
  loadErrorAction,
} from '../actions/actions.jsx';
import { getItems } from '../services/db-requests';

export const listEffects = async (dispatch) => {
  dispatch(loadStartAction());
  try {
    const items = await getItems();
    dispatch(loadSuccessAction(items));
  } catch (err) {
    dispatch(loadErrorAction(err));
  }
};

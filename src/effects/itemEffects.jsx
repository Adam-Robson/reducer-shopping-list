import {
  loadStartAction,
  loadSuccessAction,
  loadErrorAction
} from '../actions/actions';
import {  updateItem } from '../services/fetch-utils';


export const itemEffects = async (item, dispatch) => {
  dispatch(loadStartAction());
  try {
    const updatedItem = await updateItem(item.id, item);
    dispatch(loadSuccessAction(updatedItem));
  } catch (err) {
    dispatch(loadErrorAction(err));
  }
};

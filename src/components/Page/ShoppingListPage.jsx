import { useContext, useEffect } from 'react';
import { Context } from '../../context/ContextProvider';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { 
  listLoadSuccessAction, 
  listLoadStartAction,
  listLoadErrorAction,
  newItemBodyChange,
} from '../../actions/list-actions';
import ShoppingList from './ShoppingList/ShoppingList';
import ShoppingListForm from './ShoppingListForm/ShoppingListForm';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      dispatch(listLoadStartAction());
      try {
        const items = await getShoppingListItems();
        dispatch(listLoadSuccessAction(items));
      } catch (err) {
        dispatch(listLoadErrorAction(err));
      }
    }); 
  }, []);
  
  return (
    <>
      <ShoppingListForm
        body={ state.newItemBody }
        onBodyChange={(newItemBody) => {
          dispatch(newItemBodyChange(newItemBody));
        } } />
      { state.loadingMode === 'loading' 
        ? <span>Loading!</span>
        : <ShoppingList shoppingList={ state.shoppingList } /> }
      
    </>
  );
}

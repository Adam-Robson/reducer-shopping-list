import { useContext, useEffect } from 'react';
import { Context } from '../../context/ContextProvider';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { 
  listSuccessAction, 
  listStartAction 
} from '../../actions/list-actions';
import ShoppingList from './ShoppingList/ShoppingList';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      dispatch(listStartAction());
      const items = await getShoppingListItems();
      dispatch(listSuccessAction(items));
    }); 
  }, []);
  
  return (
    <>
      { state.loadingMode === 'loading' 
        ? <span>Loading!</span>
        : <ShoppingList shoppingList={ state.shoppingList } /> }
      
    </>
  );
}

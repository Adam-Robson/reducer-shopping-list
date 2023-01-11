import { useContext, useEffect } from 'react';
import { Context } from '../../context/ContextProvider';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { shoppingListLoadSuccessAction } from '../../actions/shopping-list';
import ShoppingList from './ShoppingList/ShoppingList';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    (async () => {
      const items = await getShoppingListItems();
      const action = shoppingListLoadSuccessAction(items);
      dispatch(action);
    }); 
  }, []);
  return (
    <>
      <ShoppingList shoppingList={ state.shoppingList } />
    </>
  );
}

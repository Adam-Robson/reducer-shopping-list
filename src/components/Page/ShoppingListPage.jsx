import { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import { createShoppingListItem } from '../../services/shopping-list-items';
import ShoppingList from './ShoppingList/ShoppingList';
import ShoppingListForm from './ShoppingListForm/ShoppingListForm';
import { newItemBodyChange } from '../actions/list-actions';
import { postListEffects } from '../../effects/postListEffects';
export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  
  return (
    <>
      <ShoppingListForm
        body={ state.newItemBody }
        onBodyChange={(newItemBody) => {
          dispatch(newItemBodyChange(newItemBody));
        } }
        onSubmit={ async (newBodyItem) => {
          await createShoppingListItem(newBodyItem);
          postListEffects(dispatch);
        } } />
      { state.loadingMode === 'loading' 
        ? <span>Loading!</span>
        : <ShoppingList shoppingList={ state.shoppingList } /> }
      
    </>
  );
}

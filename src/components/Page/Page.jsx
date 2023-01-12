import { useContext, useEffect } from 'react';
import { Context } from '../../context/ContextProvider';
import { createItem } from '../../services/shopping-list-items';
import List from './ShoppingList/ShoppingList';
import Form from './ShoppingListForm/ShoppingListForm';
import { newItemTextChange } from '../actions/list-actions';
import { listEffects } from '../../effects/postListEffects';

export default function ListPage() {
  const { state, dispatch } = useContext(Context);
  
  useEffect(() => {
    listEffects(dispatch);
  }, []);

  const newChange = (newBodyItem) => {
    dispatch(newItemTextChange(newBodyItem));
  };

  const handleViewed = (itemId, viewed) => {
    dispatch();
  };

  return (
    <>
      <Form
        body={ state.newItemText }
        onBodyChange={(newItemText) => {
          dispatch(newItemTextChange(newItemText));
        } }
        onSubmit={ async (newItemText) => {
          await createItem(newItemText);
          listEffects(dispatch);
          dispatch(newItemTextChange(''));
        } } />
      { state.loadingMode === 'loading' 
        ? <span>Loading!</span>
        : <List list={ state.list } /> }
      
    </>
  );
}

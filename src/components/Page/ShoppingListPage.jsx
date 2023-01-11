import React, { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import ShoppingList from './ShoppingList/ShoppingList';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);

  return 
  <>
    <ShoppingList shoppingList={ state.shoppingList } />
  </>;
}

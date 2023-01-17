import { useEffect, useContext } from 'react';
import { Context } from '../../context/ContextProvder';
import {
  submitFormAction,
  itemCheckedAction
} from '../../actions/actions';
import List from '../List/List';
import Form from '../Form/Form';
import { listEffects } from '../../effects/listEffects';

// the user flow:
// 1. inputs description and qtyX
// 2. submit new item X
// 3. being able to check the checkbox

export default function Page() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    listEffects(dispatch);
  }, []);

  const handleSubmit = (description, qty) => {
    dispatch(submitFormAction(description, qty));
  };

  const changeCheckbox = (itemId, checked) => {
    dispatch(itemCheckedAction(itemId, checked));
  };
  return (
    <>
      <Form 
        onSubmit={ handleSubmit }
      />

      {/* { state.loadMode ? 
        <p>Loading!</p> :  */}
      <List 
        list={ state.list } 
        handleCheckedById={ 
          (itemId, checked) => {
            changeCheckbox(itemId, checked);
          } } /> 
    </>
  ); 
}

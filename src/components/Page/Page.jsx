import { useEffect, useContext } from 'react';
import { Context } from '../../context/ContextProvder';
import {
  formTextAction,
  formQtyAction,
  itemCheckedAction
} from '../../actions/actions';
import List from '../List/List';
import Form from '../Form/Form';
import { listEffects } from '../../effects/listEffects';


export default function Page() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    listEffects(dispatch);
  });

  const changeFormText = (newText) => {
    dispatch(formTextAction(newText));
  };

  const changeFormQty = (newQty) => {
    dispatch(formQtyAction(newQty));
  };

  const changeCheckbox = (itemId, checked) => {
    dispatch(itemCheckedAction(itemId, checked));
  };
  return (
    <>
      <Form 
        text={ state.newText }
        onTextChange={ changeFormText }

        qty={ state.newQty }
        onQtyChange={ changeFormQty }

      />

      { state.loadingMode ? 
        <p>Loading!</p> : 
        <List 
          list={ state.list } 
          handleCheckedById={ 
            (itemId, checked) => {
              changeCheckbox(itemId, checked);
            } } /> 
      }
    </>
  ); 
}

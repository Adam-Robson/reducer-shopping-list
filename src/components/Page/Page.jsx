import { useEffect, useContext } from 'react';
import { Context } from '../../context/ContextProvder';
import {
  qtyChangeAction,
  descriptionChangeAction,
  submitFormAction,
  itemCheckedAction
} from '../../actions/actions';
import List from '../List/List';
import Form from '../Form/Form';
import { listEffects } from '../../effects/listEffects';
import { createItem } from '../../services/fetch-utils';

const Page = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    listEffects(dispatch);
  }, []);

  const onDescriptionChange = (description) => {
    dispatch(descriptionChangeAction(description));
  };

  const onQtyChange = (qty) => {
    dispatch(qtyChangeAction(qty));
  };

  const handleSubmit = (description, qty) => {
    dispatch(submitFormAction(description, qty));
  };

  const changeCheckbox = (itemId, checked) => {
    dispatch(itemCheckedAction(itemId, checked));
  };

  return (
    <>
      <Form 
        description={ state.description }
        onDescriptionChange={ onDescriptionChange }
        qty={ state.qty }
        onQtyChange={ onQtyChange }

        onSubmit={ async (description, qty) => {
          await createItem(description, qty);
          handleSubmit(state.description, state.qty);
          listEffects(dispatch);
        }  }
      />
      {
        state.loadMode === 'loading' ? 
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
};

export default Page;

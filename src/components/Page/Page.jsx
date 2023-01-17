import { useEffect, useContext } from 'react';
import { Context } from '../../context/ContextProvder';
import {
  submitFormAction,
  itemCheckedAction
} from '../../actions/actions';
import List from '../List/List';
import Form from '../Form/Form';
import { listEffects } from '../../effects/listEffects';

const Page = () => {
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

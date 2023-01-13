import { useEffect } from 'react';
import { useListContext } from '../../context/ListContext';
import { getItems } from '../../services/fetch-utils';
import {
  loadStartAction,
  loadSuccessAction,
  loadErrorAction,
  formTextChangeAction,
} from '../../actions/actions';
import List from '../List/List';
import Form from '../../Form/Form';

const Page = () => {
  const { state, dispatch } = useListContext();

  useEffect(() => {
    async () => {
      dispatch(loadStartAction());
      try {
        const items = await getItems();
        dispatch(loadSuccessAction(items));
      } catch (err) {
        dispatch(loadErrorAction(err));
      }
    };
  });
  return (
    <>
      <Form 
        text={ state.newText }
        onTextChange={ (newText) => {
          dispatch(formTextChangeAction(newText));
        } } />

      { state.loadingMode ? 
        <p>Loading!</p> : 
        <List list={ state.list } /> }
    </>
  );
};


export default Page;

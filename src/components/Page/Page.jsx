import { useContext, useEffect } from 'react';
import { Context } from '../../context/ContextProvider';
import { createItem } from '../../services/db-requests';
import List from '../List/List';
import Form from '../Form/Form';
import { textChangeAction, listChangeAction } from '../../actions/actions';
import { listEffects } from '../../effects/listEffects';

export default function Page() {
  const { state, dispatch } = useContext(Context);
  
  useEffect(() => {
    listEffects(dispatch);
  }, []);

  const handleChange = (newText) => {
    dispatch(textChangeAction(newText));
  };

  const handleViewed = (itemId, viewed) => {
    dispatch(listChangeAction(itemId, viewed));
  };

  return (
    <>
      <Form
        body={ state.newText }
        onBodyChange={ handleChange }
        onSubmit={ async (newText) => {
          console.log(newText);
          await createItem(newText);
          listEffects(dispatch);
          dispatch(textChangeAction(''));
        } } />
      { state.loadingMode === 'loading' 
        ? <span>Loading!</span>
        : <List list={ state.list } 
          handleViewedById={ (itemId, viewed) => {
            handleViewed(itemId, viewed);
          } } />
      }
    </>
  );
}

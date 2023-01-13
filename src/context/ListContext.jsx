import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../components/reducers/reducer.js';
import { log } from '../components/reducers/log';

const Context = createContext({
  state: initialState,
  reducer 
});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    log(reducer),
    initialState
  );
  return <Context.Provider 
    value={ { 
      state, 
      dispatch 
    } }>
    { children }
  </Context.Provider>;
};

const useListContext = () => {
  const context = useContext(Context);
  context === undefined ?
    console.error(
      'useListContext can only be used within ContextProvider'
    ) :
    context;
};

export { useListContext, ContextProvider };


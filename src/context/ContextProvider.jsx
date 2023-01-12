import { createContext, useReducer } from 'react';
import { 
  initialState, 
  reducer 
} from '../components/reducers/shopping-list-item-reducer.test.jsx';

export const Context = createContext({
  state: initialState(),
  reducer
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const contextObj = { state, dispatch };

  return <Context.Provider 
    value={ { 
      contextObj
    } }>
    {children}
  </Context.Provider>;
};

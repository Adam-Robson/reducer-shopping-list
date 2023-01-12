import { createContext, useReducer } from 'react';
import { 
  initialState, 
  reducer, 
  reducerLogger
} from '../components/reducers/shopping-list-item-reducer.jsx';

export const Context = createContext({
  state: initialState(),
  reducer
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerLogger(reducer), 
    initialState()
  );

  return <Context.Provider value={ { state, dispatch } }>
    {children}
  </Context.Provider>;
};

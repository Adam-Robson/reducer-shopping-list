import React, { createContext, useReducer } from 'react';

export const Context = createContext({
  state: initialState(),
  reducer
});

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  
  return <Context.Provider 
    value={ { 
      state,
      dispatch 
    } }>
        {children}
    </Context.Provider>
}

import { ContextProvider } from '../context/ListContext';

describe('context', () => {
  test('returns context provider', () => {
    expect((children) => {
      ContextProvider({ 
        children 
      }).toBeInstanceOf(ContextProvider);
    });
  });
});


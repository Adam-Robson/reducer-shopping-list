import { ContextProvider } from '../context/ListContext';

describe('ListContext', () => {
  test('returns context provider', () => {
    expect((children) => {
      ContextProvider({ 
        children 
      }).toBeInstanceOf(ContextProvider);
    });
  });
});


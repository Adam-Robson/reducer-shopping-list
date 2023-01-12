export const reducerLogger = (reducer) => {
  return (state, action) => {
    console.info('Before', state);
    console.info('After', action);
    const newState = reducer(state, action);
    console.info('After', newState);
    return newState;
  };
};

export const loadStartAction = () => {
  return {
    type: 'load-start-action',
  };
};

export const loadSuccessAction = (shoppingList) => {
  return {
    type: 'load-success-action',
    shoppingList
  };
};

export const loadErrorAction = () => {
  return {
    type: 'load-error-action',
  };
};

export const newItemTextChange = (newItemText) => {
  return {
    newItemText,
    type: 'new-item-text-change'
  };
};

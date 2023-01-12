export const listLoadSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList
  };
};

export const listLoadStartAction = () => {
  return {
    type: 'item-list-load-start',
  };
};

export const listLoadErrorAction = () => {
  return {
    type: 'item-list-load-error'
  };
};

export const newItemBodyChange = (newItemBody) => {
  return {
    newItemBody,
    type: 'new-item-body-change'
  };
};

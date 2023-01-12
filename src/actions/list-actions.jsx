export const listSuccessAction = (shoppingList) => {
  return {
    type: 'shopping-list-load-success',
    shoppingList
  };
};

export const listStartAction = () => {
  return {
    type: 'item-list-load-start',
  };
};

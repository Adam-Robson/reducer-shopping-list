export const loadStartAction = () => {
  return {
    type: 'loadStartAction'
  };
};

export const loadSuccessAction = () => {
  return {
    type: 'loadSuccessAction'
  };
};

export const loadErrorAction = () => {
  return {
    type: 'loadErrorAction'
  };
};

export const formTextAction = (newText) => {
  return {
    ...newText,
    type: 'form-text-action'
  };
};

export const formQtyAction = (newQty) => {
  return {
    ...newQty,
    type: 'form-qty-action'
  };
};

export const itemCheckedAction = (itemId, checked) => {
  return {
    itemId,
    checked,
    type: 'item-checked-action'
  };
};

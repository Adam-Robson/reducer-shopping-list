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

export const formTextChangeAction = (newText) => {
  return {
    ...newText,
    type: 'form-text-change-action'
  };
};

export const formQtyChangeAction = (newQty) => {
  return {
    ...newQty,
    type: 'form-qty-change-action'
  };
};

export const itemCheckedAction = (itemId, checked) => {
  return {
    itemId,
    checked,
    type: 'item-checked-action'
  };
};

export const LOAD_START_ACTION_TYPE = 'load-start-action';

export const loadStartAction = () => {
  return {
    type: LOAD_START_ACTION_TYPE
  };
};

export const loadSuccessAction = () => {
  return {
    type: 'load-success-action'
  };
};

export const loadErrorAction = () => {
  return {
    type: 'load-error-action'
  };
};

export const itemCheckedAction = (itemId, checked) => {
  return {
    itemId,
    checked,
    type: 'item-checked-action'
  };
};

export const submitFormAction = (description, qty) => {
  return {
    description,
    qty,
    type: 'submit-form-action'
  };
};

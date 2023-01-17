export const LOAD_START_ACTION = 'load-start-action';
export const LOAD_SUCCESS_ACTION = 'load-success-action';
export const LOAD_ERROR_ACTION = 'load-error-action';
export const ITEM_CHECKED_ACTION = 'item-checked-action';
export const SUBMIT_FORM_ACTION = 'submit-form-action';

export const loadStartAction = () => {
  return {
    type: LOAD_START_ACTION
  };
};

export const loadSuccessAction = () => {
  return {
    type: LOAD_SUCCESS_ACTION
  };
};

export const loadErrorAction = () => {
  return {
    type: LOAD_ERROR_ACTION
  };
};

export const itemCheckedAction = (itemId, checked) => {
  return {
    itemId,
    checked,
    type: ITEM_CHECKED_ACTION
  };
};

export const submitFormAction = (description, qty) => {
  return {
    description,
    qty,
    type: SUBMIT_FORM_ACTION
  };
};

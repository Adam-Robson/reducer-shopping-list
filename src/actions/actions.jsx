export const loadStartAction = () => {
  return {
    type: 'load-start-action'
  };
};

export const loadSuccessAction = (list) => {
  return {
    type: 'load-success-action',
    list
  };
};

export const loadErrorAction = () => {
  return {
    type: 'load-error-action',
  };
};

export const textChangeAction = (newText) => {
  return {
    newText,
    type: 'text-change-action'
  };
};

export const listChangeAction = (postId, viewed) => {
  return {
    postId,
    viewed,
    type: 'list-change-action'
  };
};

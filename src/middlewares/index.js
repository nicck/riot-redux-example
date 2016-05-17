export const logger = store => next => action => {
  console.log('Dispatching', typeof action === 'function' ? `function ${ action.name }` : action);
  return next(action);
};

// https://github.com/gaearon/redux-thunk
export const thunk = store => next => action =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action);

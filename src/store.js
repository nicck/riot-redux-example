import { createStore, applyMiddleware } from 'redux';
import { logger, thunk } from './middlewares';
import { theapp } from './reducers';

const store = createStore(theapp, applyMiddleware(logger, thunk));

module.exports = store;  // works with both require and import

// export default store; // default does not work with require

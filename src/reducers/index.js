import { combineReducers } from 'redux';

import { basket } from './basket';
import { counter } from './counter';
import { theinput } from './theinput';
import { route } from './route';

export const theapp = combineReducers({
    basket,
    counter,
    theinput,
    route
});

// module.exports = { theapp };

// const theapp = (state = {}, action) => {
//     return {
//         counter: counter(state.counter, action),
//         theinput: theinput(state.theinput, action),
//     }
// }

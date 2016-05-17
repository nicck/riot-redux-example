require('./tags/root.tag');

import Riot from 'riot';
import Store from './store';
import { routeTo } from './actions';

Riot.mount('#root', 'root');

Riot.route(function() {
    const path = Array.prototype.slice.call(arguments);
    const action = routeTo(path);

    Store.dispatch(action);
});

Riot.route.start(true);

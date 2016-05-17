import Riot from 'riot';
import { fetchBasket } from '../actions';

export function routeTo(path = []) {
    const routeParams = parsePath(path);

    /* jshint ignore:start */
    return function routeToFn(dispatch, getState) {
        dispatch({ type: 'ROUTE', ...routeParams });

        switch (routeParams.name) {
            case 'basket_index':
                dispatch(fetchBasket());
                break;
            case 'basket_add':
                window.setTimeout(() => Riot.route('/basket'), 5000);
                break;
            default:
                //
        }
    };
    /* jshint ignore:end */
}

function parsePath(path) {
    const controller = path[0] || 'root';
    let id = path[1];
    let action = path[2];

    if (id && !isId(id)) {
        action = id;
        id = undefined;
    }
    else if (!action && isId(id)) {
        action = 'show';
    }
    else if (!action && !id){
        action = 'index';
    }

    const name = `${ controller }_${ action }`;
    const location = window.location;

    return { controller, action, id, name, location };
}

function isId(value) {
    return Number.isInteger(Number.parseInt(value, 10));
}

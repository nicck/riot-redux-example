import Riot from 'riot';

export const route = function (state = { controller: 'root' }, dispatchedAction = {}) {
    if (dispatchedAction.type === 'ROUTE') {
        const { controller, action, id, name } = dispatchedAction;
        const query = Riot.route.query();

        return { controller, action, id, name, query };
    } else {
        return state;
    }
};

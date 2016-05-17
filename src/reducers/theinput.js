export const theinput = function (state = 'default', action = {}) {
    switch (action.type) {
        case 'TEXT_CHANGE':
            return action.value;
        default:
            return state;
    }
};

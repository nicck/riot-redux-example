export const counter = function (state, action) {
    let newState = state || {
        value: 0,
        updating: false
    };

    switch (action.type) {
        case 'ROUTE':
            if (action.name === 'counter_show') {
                newState.value = Number(action.id);
            }
            break;
        case 'INC_START':
            newState.updating = true;
            break;
        case 'INC_FINISH':
            newState.updating = false;
            newState.value = state.value + 1;
            break;
        case 'DEC':
            newState.value = state.value - 1;
            break;
    }

    return newState;
};

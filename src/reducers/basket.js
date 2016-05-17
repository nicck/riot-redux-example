export function basket(state, action) {
    let newState = state || {
        loading: true,
        value: 0
    };

    switch (action.type) {
        case 'FETCH_BASKET_START':
            newState.loading = true;
            break;
        case 'FETCH_BASKET_FINISH':
            newState.loading = false;
            newState.value = action.value;
            break;
    }

    return newState;
}

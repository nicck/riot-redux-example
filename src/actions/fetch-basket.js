export function fetchBasket() {
    return function fetchBasketSartFn(dispatch, getState) {
        dispatch({ type: 'FETCH_BASKET_START' });

        window.setTimeout(function() {
            dispatch({ type: 'FETCH_BASKET_FINISH', value: 123 });
        }, 500);
    };
}

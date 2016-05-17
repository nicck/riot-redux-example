// http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
export function incAsync() {
    return function incAsyncFn(dispatch, getState) {
        dispatch({ type: 'INC_START' });

        window.setTimeout(function() {
            dispatch({ type: 'INC_FINISH' });
        }, 500);
    };
}

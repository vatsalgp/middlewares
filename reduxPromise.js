export default ({ dispatch }) => next => action => {
    if (action.payload && action.payload.then) {
        action.payload
            .then(payload => dispatch({ ...action, payload }))
            .catch(error => dispatch({ ...action, payload: error, error: true }));
    } else {
        next(action);
    }
};
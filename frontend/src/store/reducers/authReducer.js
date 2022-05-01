const initState = {
    userDetails: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "one":
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;
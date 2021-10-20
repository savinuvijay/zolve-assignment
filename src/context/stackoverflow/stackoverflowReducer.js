import { GET_LANGUAGES, GET_FILTERED_LANGUAGES, SET_LOADING } from "../types";

const StackoverflowReducer = (state, action) => {
    switch (action.type) {
        case GET_LANGUAGES:
        case GET_FILTERED_LANGUAGES:
            return {
                ...state,
                languages: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
export default StackoverflowReducer;

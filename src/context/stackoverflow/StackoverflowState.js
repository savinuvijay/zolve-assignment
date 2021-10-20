import React, { useReducer } from "react";
import axios from "axios";
import StackoverflowContext from "./stackoverflowContext";
import StackoverflowReducer from "./stackoverflowReducer";
import { GET_LANGUAGES, GET_FILTERED_LANGUAGES, SET_LOADING } from "../types";

const StackoverflowState = (props) => {
    const initialState = {
        languages: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(StackoverflowReducer, initialState);

    const getLanguages = async () => {
        setLoading(true);
        const res = await axios.get(
            `https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow`
        );
        dispatch({ type: GET_LANGUAGES, payload: res.data.items });
    };

    const getFilteredLanguages = async (filter) => {
        setLoading(true);
        let filterString = getFilterString(filter);
        const res = await axios.get(
            `https://api.stackexchange.com/2.2/tags?${filterString}`
        );
        dispatch({ type: GET_FILTERED_LANGUAGES, payload: res.data.items });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <StackoverflowContext.Provider
            value={{
                languages: state.languages,
                loading: state.loading,
                getLanguages,
                getFilteredLanguages,
                setLoading,
            }}
        >
            {props.children}
        </StackoverflowContext.Provider>
    );
};

export default StackoverflowState;

const getFilterString = (filter) => {
    let filterString = "";
    if (filter.page !== "") {
        filterString += `page=${filter.page}&`;
    }
    if (filter.pageSize !== "") {
        filterString += `pagesize=${filter.pageSize}&`;
    }
    if (filter.fromDate !== "") {
        filterString += `fromdate=${filter.fromDate / 1000}&`;
    }
    if (filter.toDate !== "") {
        filterString += `todate=${filter.toDate / 1000}&`;
    }
    filterString += "order=desc&sort=popular&site=stackoverflow";
    //page=1&pagesize=10&fromdate=1633046400&todate=1634601600&order=desc&sort=popular&site=stackoverflow
    return filterString;
};

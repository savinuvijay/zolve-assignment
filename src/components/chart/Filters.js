import React, { useState, useContext } from "react";
import StackoverflowContext from "../../context/stackoverflow/stackoverflowContext";

const Filters = () => {
    const stackoverflowContext = useContext(StackoverflowContext);
    const { getLanguages, getFilteredLanguages } = stackoverflowContext;

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [pageSize, setPageSize] = useState("30");
    const [page, setPage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        let filter = {
            fromDate: fromDate !== "" ? new Date(fromDate).getTime() : "",
            toDate: toDate !== "" ? new Date(toDate).getTime() : "",
            pageSize,
            page,
        };
        console.log(filter);
        getFilteredLanguages(filter);
        //githubContext.searchUsers(text);
        //setText("");
    };
    const onFromDateChange = (e) => setFromDate(e.target.value);
    const onToDateChange = (e) => setToDate(e.target.value);
    const onPageSizeChange = (e) => setPageSize(e.target.value);
    const onPageChange = (e) => setPage(e.target.value);

    const onReset = (e) => {
        setFromDate("");
        setToDate("");
        setPageSize("30");
        setPage("");
        getLanguages();
    };
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            width: "130px",
                            margin: "1.2rem 0",
                            padding: "5px",
                            textAlign: "left",
                        }}
                    >
                        <label htmlFor="fromDate">From date</label>
                    </div>
                    <input
                        type="date"
                        name="fromDate"
                        value={fromDate}
                        onChange={onFromDateChange}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            width: "130px",
                            margin: "1.2rem 0",
                            padding: "5px",
                            textAlign: "left",
                        }}
                    >
                        <label htmlFor="toDate">To date</label>
                    </div>
                    <input
                        type="date"
                        name="toDate"
                        value={toDate}
                        onChange={onToDateChange}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            width: "130px",
                            margin: "1.2rem 0",
                            padding: "5px",
                            textAlign: "left",
                        }}
                    >
                        <label htmlFor="pageSize">Page Size</label>
                    </div>
                    <input
                        type="text"
                        name="pageSize"
                        placeholder="Page Size"
                        value={pageSize}
                        onChange={onPageSizeChange}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            width: "130px",
                            margin: "1.2rem 0",
                            padding: "5px",
                            textAlign: "left",
                        }}
                    >
                        <label htmlFor="page">Page</label>
                    </div>
                    <input
                        type="text"
                        name="date"
                        placeholder="Page"
                        value={page}
                        onChange={onPageChange}
                    />
                </div>
                <input
                    type="submit"
                    value="search"
                    className="btn btn-dark btn-block"
                />
            </form>
            <button className="btn btn-light btn-block" onClick={onReset}>
                Reset
            </button>
        </div>
    );
};

export default Filters;

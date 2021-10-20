import React from "react";
import BarChart from "../chart/BarChart";
import Filters from "../chart/Filters";

const Chart = () => {
    return (
        <div className="grid-2">
            <BarChart />
            <div className="card">
                <Filters />
            </div>
        </div>
    );
};

export default Chart;

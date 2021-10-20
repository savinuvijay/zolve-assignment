import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import StackoverflowContext from "../../context/stackoverflow/stackoverflowContext";
import Spinner from "../layout/Spinner";
const BarChart = () => {
    const stackoverflowContext = useContext(StackoverflowContext);
    const { getLanguages, languages } = stackoverflowContext;
    var barColors = ["red", "green", "blue", "orange", "brown"];
    useEffect(() => {
        getLanguages();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="card">
            {languages.length > 0 ? (
                <Bar
                    data={{
                        labels: languages.map((l) => l.name),
                        datasets: [
                            {
                                label: "count",
                                backgroundColor: barColors,
                                data: languages.map((l) => l.count),
                            },
                        ],
                    }}
                    height={400}
                    width={400}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Languages Popularity",
                            },
                        },
                    }}
                />
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default BarChart;

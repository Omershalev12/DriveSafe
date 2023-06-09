// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line} from "react-chartjs-2";


import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const labels = ["03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023", "07/06/2023", "08/06/2023"];
const label = "Avarege Speed"

const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };

const data = {
  labels: labels,
  datasets: [
    {
      label: label,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [20, 10, 40, 16, 20, 30, 33],
      title: "grpahsd"
    },
  ]
};

const options = {
    plugins: {
      title: {
        display: true,
        font: {
          size: 16,
        },
      },
    },
  };

const LineChart = ({period}) => {
  return (
    <div id="graph">
    <h2>{period}</h2>
    <Line data={data} options={options}/>
    </div>
  );
};


export default LineChart;
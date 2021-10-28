import React, { useState, useEffect } from "react";
import axios from "axios";

import { Pie, Doughnut } from "react-chartjs-2";

var today = new Date(),
  Currentdate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-";

const data = {
  month: Currentdate,
};
function Chart() {
  const [value, setValue] = useState();

  var values = [];
  var type = [];

  value && value.map((data) => values.push(data.amount));
  value && value.map((data) => type.push(data.type));

  const state = {
    labels: type,
    datasets: [
      {
        backgroundColor: [
          "#B21500",
          "#C9DE00",
          "#398b23",
          "#00A6B4",
          "#6800B4",
          "#601564",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: values,
      },
    ],
  };
  
  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/pieChartData", data)

      .then((response) => {
        if (response.data.error) {
        } else {
          setValue(response.data);
        }
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
          
            fontSize: 20,
          },
        }}
      />
    </div>
  );
}
export default Chart;

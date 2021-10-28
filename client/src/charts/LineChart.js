import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function Chart() {
  const [value, setValue] = useState();

  var lables = [];
  var values = [];

  value && value.map((data) => values.push(data.newValue));
  value && value.map((data) => lables.push(data.updatedOn));

  const state = {
    labels: lables,
    datasets: [
      {
        label: "Chart Data",
        backgroundColor: ["#601564"],
        borderColor: "rgba(0,0,0,1)",

        borderWidth: 2,
        tension: 0.5,
        data: values,
      },
    ],
  };
  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/lineChartData")

      .then((response) => {
        if (response.data.error) {
          console.log(response);
        } else {
          setValue(response.data);
          console.log(value);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
export default Chart;

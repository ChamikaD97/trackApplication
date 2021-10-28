import React, { useState, useEffect } from "react";
import axios from "axios";

import CountUp from "react-countup";

function Remaining() {
  const [used, setUsedValue] = useState();
  const [currentValue, setCurrentValue] = useState();

  var today = new Date(),
    Currentdate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-";

  const data = {
    month: Currentdate,
  };

  if (currentValue - used < 0) {
    setCurrentValue(used);
    document.getElementById("rem").style.color = "#B21500";
  }
  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/getCurrentValue")

      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setCurrentValue(response.data[0].newValue);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://localhost:3001/Expence/getUsedValues", data)

      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setUsedValue(response.data[0].used);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 id="rem">
        Balance is{" "}
        <CountUp start={0} end={currentValue - used} duration={1}></CountUp>
        /=
      </h2>
    </>
  );
}

export default Remaining;

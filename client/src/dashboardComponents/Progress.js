import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../pages/Dashboard.module.css";

function Progress() {
  const [used, setUsedValue] = useState();
  const [currentValue, setCurrentValue] = useState();
  let percentage = 100 - ((currentValue - used) * 100) / currentValue;
  var today = new Date(),
    Currentdate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-";
  let progressWidth = Math.round(percentage) + "%";

  if (percentage > 100) {
    document.getElementById("progresBar").style.background = "#B21500";
    document.getElementById("progresBar").style.width = "100%";
    progressWidth = 100 + "%";
  } else if (percentage > 85) {
    document.getElementById("progresBar").style.background = "#B21500";
    document.getElementById("progresBar").style.width = progressWidth;
  } else if (percentage > 20) {
    document.getElementById("progresBar").style.background = "#398b23";
    document.getElementById("progresBar").style.width = progressWidth;
  } else if (percentage > 0) {
    document.getElementById("progresBar").style.background = "#00A6B4";
    document.getElementById("progresBar").style.width = "25%";
  }
  const data = {
    month: Currentdate,
  };
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
      .catch((error) => {  console.log(error);});

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
      <div className={styles.progresBar} width={50} id="progresBar">
        {currentValue} Used({progressWidth})
      </div>
    </>
  );
}

export default Progress;

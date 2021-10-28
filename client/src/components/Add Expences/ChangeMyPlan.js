import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
import styles from  "./AddExpences.css";

var today = new Date(),
  Currentdate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
function ChangeMyPlan() {
  const [maxOld, setCurrentMonthlyExpence] = useState();
  const [newMax, setNew] = useState();
  function update() {
    const formData = {
      maxOld: maxOld,
      newMax: newMax,
      date: Currentdate,
    };
    console.log(formData);

    axios
      .post("http://localhost:3001/Expence/updateMax", formData)

      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setCurrentMonthlyExpence(newMax);

          document.getElementById("val").value = null;
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    const data = {
      companyName: "",
      jobRole: "",
      location: "",
    };
    axios
      .post("http://localhost:3001/Expence/getMax", data)

      .then((response) => {
        if (response.data.error) {
        } else {
          setCurrentMonthlyExpence(response.data[0].newValue);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, [newMax]);
  return (
    <>
      <div className="changeForm">
        <p className="cardText">Change Max Month Expence</p>

        <hr />

        <h1 className="monthlyExpence">
          <CountUp start={0} end={maxOld} duration={2}></CountUp>
          /=
        </h1>
        <input
          type="number"
          min={0}
          id="val"
          placeholder="Update Monthly Expence Amount"
          className="updateVal"
          onChange={(e) => setNew(e.target.value)}
        ></input>
        <button className="update" onClick={update}>
          Update
        </button>
      </div>
    </>
  );
}

export default ChangeMyPlan;

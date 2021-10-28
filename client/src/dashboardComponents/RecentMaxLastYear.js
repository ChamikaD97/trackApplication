import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";

function RecentMaxLastYear() {
  const [maxMonth, setMaxMonth] = useState(10);
  const [des, setDescription] = useState("");
  const [date, setDate] = useState("");
  var today = new Date(),
    year = today.getFullYear();

  const data = { year: year };
  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/getRecentMaxLastYear", data)

      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setMaxMonth(response.data[0].Amount);
          setDescription(response.data[0].description);
          setDate(response.data[0].date);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h3>
        {des}
        {" on "}
        {date}
        {" for "}
        <CountUp start={0} end={maxMonth} duration={1}></CountUp>
        /=
      </h3>
    </>
  );
}

export default RecentMaxLastYear;

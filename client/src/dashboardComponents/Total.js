import React, { useState, useEffect } from "react";
import axios from "axios";

import CountUp from "react-countup";

function Total() {
  const [total, setTotal] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/getTotal")

      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setTotal(response.data[0].total);
        }
      })
      .catch((error) => {console.log(error);});
  }, []);

  return (
    <>
      <h3>
        <CountUp start={0} end={total} duration={1}></CountUp>/=
      </h3>
    </>
  );
}

export default Total;

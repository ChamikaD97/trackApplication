import React, { useState, useEffect } from "react";
import axios from "axios";

import CountUp from "react-countup";

function MaxCategory() {
  const [category, setMaxCategory] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/MaxCategery")

      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setValue(response.data[0].amount);
          setMaxCategory(response.data[0].type);
        }
      })
      .catch((error) => {          console.log(error);
      });
  }, []);
  return (
    <>
      <h3>
        {category}
        {" - "}
        <CountUp start={0} end={value} duration={1}></CountUp>
        /=
      </h3>
    </>
  );
}

export default MaxCategory;

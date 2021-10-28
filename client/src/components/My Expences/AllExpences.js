import React, { useState, useEffect } from "react";
import "./AllExpences.css";
import axios from "axios";

import { useHistory } from "react-router-dom";

function AllExpences() {
  let history = useHistory();
  const [expenceData, setExpenceData] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [type, setType] = useState("");
  const [des, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  var today = new Date(),
    Currentdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const viewExpence = (event) => {
    history.push("updateExpence/" + event.target.value);
  };

  useEffect(() => {
    axios
      .post("http://localhost:3001/Expence/getAllExpences")

      .then((response) => {
        if (response.data.error) {
        } else {
          setExpenceData(null);
          setExpenceData(response.data);
        }
      })
      .catch((error) => {});
  }, []);
  
  const getFilteredData = () => {
    setFromDate(document.getElementById("from").value);
    const data = {
      fromDate: fromDate,
      toDate: toDate,
      description: des,
      amount: amount,
      type: type,
    };
    axios
      .post("http://localhost:3001/Expence/getFilteredData", data)

      .then((response) => {
        if (response.data.error) {
        } else {
          setExpenceData(null);
          setExpenceData(response.data);
        }
      })
      .catch((error) => {});
  };
  
  const expences =
    expenceData &&
    expenceData.map((expenceData) => (
      <>
        <tr>
          <td>{expenceData.date}</td>
          <td>{expenceData.type}</td>
          <td>{expenceData.Amount}/=</td>
          <td>{expenceData.description}</td>
          <td>
            <button
              value={expenceData.id}
              onClick={viewExpence}
              className="view"
            >
            View
            </button>
          </td>
        </tr>
      </>
    ));
  return (
    <>
      <div className="mainGrid">
        <div className="recentExpences">
          <p className="cardText">
            You Can Filter Your Past Expences Made By You
          </p>
          <hr />
          <input
            className="filters"
            type="date"
            id="from"
            max={Currentdate}
            onClick={getFilteredData}
            placeholder="From Date"
          ></input>
          -
          <input
            className="filters"
            type="date"
            max={Currentdate}
            placeholder="To Date"
            onChange={getFilteredData}
          ></input>
          <input
            className="filters"
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
            onKeyUp={getFilteredData}
          ></input>
          <input
            className="filters"
            type="number"
            min={0}
            onKeyUp={getFilteredData}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount more than"
          ></input>
          <input
            className="filters"
            onChange={(e) => setDescription(e.target.value)}
            onKeyUp={getFilteredData}
            placeholder="Description"
          ></input>
          <div>
            <table className="table">
              <tr className="tableHead">
                <th>Expence Date</th>
                <th>Expence Type</th>
                <th> Amount</th>
                <th> Description</th>
                <th> Edit or Delete</th>
              </tr>
              {expences}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllExpences;

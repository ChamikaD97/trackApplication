import React, { useState } from "react";
import axios from "axios";

var today = new Date(),
  Currentdate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var first = new Date(),
  firstDay =
  first.getFullYear() + "-" + (first.getMonth() + 1) + "-01";

function AddForm() {
  const [date, setDate] = useState(Currentdate);
  const [type, setType] = useState("Select Any Type");
  const [info, setInfo] = useState("Add New Expence");
  const [amount, setAmount] = useState(0);

  const [description, setDescription] = useState("");

  function clear() {
    setAmount(0);
    setType("Select Any Type");
    setDate("mm/dd/yyyy");
    setDescription("");
  }

  function addExpence() {
    if (description === "") {
      document.getElementById("info").style.color = "red";
      setInfo("Please Fill All The Fields And Try Again!!!");
      return;
    }
    if (amount === 0) {
      document.getElementById("info").style.color = "red";
      setInfo("Amount Cannot Be Zero,Try Again!!!");
      return;
    }
    const formData = {
      date: date,
      description: description,
      amount: amount,
      type: type,
    };

    axios
      .post("http://localhost:3001/Expence/addExpence", formData)

      .then((response) => {
        if (response.data.error) {
          document.getElementById("info").style.color = "#B21500;";
          setInfo("Unable to Add ,Please Try Again!!!");
        } else {
          document.getElementById("info").style.color = "#398b23";
          setInfo("New Expence Is Successfully Added!!!");
          clear();
        }
      })
      .catch((error) => {
        document.getElementById("info").style.color = "red";
        setInfo("Unable to Add ,Please Try Again!!!");
      });
  }
  return (
    <>
      <div className="addForm">
        <p id="info" className="cardText">
          {info}
        </p>
        {}
        <hr />
        <label className="lable">Expence Date</label>
        <input
          type="date"
          className="input"
          min={firstDay}
          max={Currentdate}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />

        <label className="lable">Expence Type</label>
        <select className="select" onChange={(e) => setType(e.target.value)}>
          <option value="Other">Other</option>

          <option value="Food">Food</option>
          <option value="Internet">Internet</option>
          <option value="Shopping">Shopping</option>
          <option value="Telephone">Telephone</option>
          <option value="Travelling">Travelling</option>
        </select>
        <br />

        <label className="lable">Description </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="inputArea"
          rows="5"
          required
          placeholder="Enter Short Description About This Expence"
          cols="50"
          value={description}
        ></textarea>
        <br />

        <label className="lable">Amount (/=)</label>
        <input
          type="number"
          min={0}
          value={amount}
          className="input"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <br />
        <button className="addNew" onClick={addExpence}>
          Add
        </button>
        <button className="clear" onClick={clear}>
          Clear{" "}
        </button>
      </div>
    </>
  );
}

export default AddForm;

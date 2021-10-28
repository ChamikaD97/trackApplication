import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
var today = new Date(),
  Currentdate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var first = new Date(),
  firstDay =
  first.getFullYear() + "-" + (first.getMonth() + 1) + "-01";

function EditForm() {
  const { id } = useParams();
  let history = useHistory();

  const [date, setDate] = useState("");
  const [type, setType] = useState("Select Any Type");
  const [info, setInfo] = useState("Edit or DeleteYour Expence");
  const [amount, setAmount] = useState(0);

  const [description, setDescription] = useState("");

  function remove() {
    confirmAlert({
      title: "Confirm to Remove",
      message: "Are you sure to delete this???.",
      buttons: [
        {
          label: "Yes",
          onClick: confirmDelete,
        },
        {
          label: "No",
        },
      ],
    });
  }

  useEffect(() => {
    const data = {
      id: id,
    };
    axios
      .post("http://localhost:3001/Expence/getExpenceToEdit", data)

      .then((response) => {
        if (response.data.error) {
        } else {
          setDate(response.data[0].date);
          setAmount(response.data[0].Amount);
          setDescription(response.data[0].description);
          setType(response.data[0].type);
        }
      })
      .catch((error) => {});
  }, []);

  function updateExpence() {
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
      id: id,
      date: date,
      description: description,
      amount: amount,
      type: type,
    };

    axios
      .post("http://localhost:3001/Expence/updateExpence", formData)

      .then((response) => {
        if (response.data.error) {
          document.getElementById("info").style.color = "red";
          setInfo("Unable to Add ,Please Try Again!!!");
        } else {
          document.getElementById("info").style.color = "green";
          setInfo("Expence Is Successfully Updated!!!");
          history.push("/expence");
        }
      })
      .catch((error) => {
        document.getElementById("info").style.color = "red";
        setInfo("Unable to Update ,Please Try Again!!!");
      });
  }
  function confirmDelete() {
    const formData = {
      id: id,
    };

    axios
      .post("http://localhost:3001/Expence/deleteExpence", formData)

      .then((response) => {
        if (response.data.error) {
          document.getElementById("info").style.color = "red";
          setInfo("Unable to Add ,Please Try Again!!!");
        } else {
          document.getElementById("info").style.color = "green";
          setInfo("Expence Is Successfully Updated!!!");
          history.push("/expence");
        }
      })
      .catch((error) => {
        document.getElementById("info").style.color = "red";
        setInfo("Unable to Update ,Please Try Again!!!");
      });
  }
  return (
    <>
      <div className="editForm">
        <p id="info" className="cardText">
          {info}
        </p>
        {}
        <hr />
        <label className="lable">Expence Date</label>
        <input
          type="date"
          className="input"
          value={date}
          min={firstDay}
          max={Currentdate}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />

        <label className="lable">Expence Type</label>
        <select className="select" onChange={(e) => setType(e.target.value)}>
          <option value="">{type}</option>
          <option value="Food">Food</option>
          <option value="Internet">Internet</option>
          <option value="Shopping">Shopping</option>
          <option value="Telephone">Telephone</option>
          <option value="Travelling">Travelling</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label className="lable">Description </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="inputArea"
          rows="4"
          cols="50"
          placeholder="Enter Short Description About This Expence"
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
        <button className="edit" onClick={updateExpence}>
          Edit
        </button>
        <button className="delete" onClick={remove}>
          Delete{" "}
        </button>
      </div>
    </>
  );
}

export default EditForm;

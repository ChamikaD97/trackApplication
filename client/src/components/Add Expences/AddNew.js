import React from "react";
import AddNewExpence from "./AddForm";
import ChangeMyPlan from "./ChangeMyPlan";

function AddNew() {
  return (
    <>
      <div className="mainGridNew">
        <AddNewExpence />
        <ChangeMyPlan />
      </div>
    </>
  );
}

export default AddNew;

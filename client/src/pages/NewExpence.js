import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ExpenceSector from "../components/Add Expences/AddNew";
import styles from "./NewExpence.module.css";

function NewExpences() {
  return (
    <>
      <div className={styles.mainGrid}>
        <Navigation />
        <h1 className={styles.heading}>Expence Management</h1>
        <div className={styles.expences}>
          <ExpenceSector className="expence" />
        </div>
      </div>
    </>
  );
}

export default NewExpences;

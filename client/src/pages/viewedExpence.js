import React from "react";

import Navigation from "../components/Navigation/Navigation";
import ViewEditExpence from "../components/My Expences/EditMyExpence";

import styles from "./UpdateExpence.module.css";

function viewedExpence() {
  return (
    <>
      <div className={styles.mainGrid}>
        <Navigation />
        <h1 className={styles.heading}>Expence Management</h1>
        <div className={styles.expences}>
          <ViewEditExpence className="expence" />
        </div>
      </div>
    </>
  );
}

export default viewedExpence;

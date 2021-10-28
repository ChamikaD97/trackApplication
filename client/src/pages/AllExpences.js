import React from "react";
import Navigation from "../components/Navigation/Navigation";
import AllExpencesList from "../components/My Expences/AllExpences";
import styles from "./Expences.module.css";

function AllExpences() {
  return (
    <>
      <div className={styles.mainGrid}>
        <Navigation />
        <h1 className={styles.heading}>Expence Management</h1>
        <div className={styles.expences}>
          <AllExpencesList className="expence" />
        </div>
      </div>
    </>
  );
}

export default AllExpences;

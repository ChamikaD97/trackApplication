import React from "react";
import LineChart from "../charts/LineChart";
import Navigation from "../components/Navigation/Navigation";
import PieChart from "../charts/PieChart";

import styles from "./Dashboard.module.css";

import Total from "../dashboardComponents/Total";
import Progress from "../dashboardComponents/Progress";
import MaxCategory from "../dashboardComponents/MaxCategory";
import RecentMaxLastYear from "../dashboardComponents/RecentMaxLastYear";
import Remaining from "../dashboardComponents/Remaining";

function Dashboard() {
  return (
    <>
      <div className={styles.mainGrid}>
        <Navigation />
        <h1 className={styles.heading}>Dashboard</h1>

        <div className={styles.progress}>
          <Progress />{" "}
        </div>
        <div className={styles.progress}></div>

        <div className={styles.chart}>
          <p className="cardText">This Month Expences</p>
          <hr />
          <PieChart />
        </div>

        <div className={styles.chart2}>
          <p className="cardText">Change of Monthly Limit</p>
          <hr />
          <LineChart />
        </div>
        <div className={styles.status}>
          <Remaining />
        </div>
        <div className={styles.maxMonth}>
          <p className="cardText">Maxmimum Expence Last Year</p>
          <hr />
          <div className={styles.centerDiv}>
            <RecentMaxLastYear />
          </div>
        </div>
        <div className={styles.maxDay}>
          <p className="cardText">Maxmimum Expence Categry</p>
          <hr />
          <div className={styles.centerDiv}>
            <MaxCategory />
          </div>
        </div>
        <div className={styles.maxYear}>
          <p className="cardText">Total Expences Of You</p>
          <hr />
          <div className={styles.centerDiv}>
            <Total />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

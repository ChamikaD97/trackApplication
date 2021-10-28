import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <>
      <div className={styles.navigation}>
        <>
          <IconContext.Provider value={{ color: "#fff" }}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.navText}>
                  <Link to={item.path}>
                    <span className="navbar-span-cls">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </IconContext.Provider>
        </>
      </div>
    </>
  );
}

export default Navigation;

import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar} style={{ background: "#fff" }}>
        <div className={styles.button}>ABOUT</div>
        <div className={styles.button}>WORKS</div>
        <div className={styles.button}>BLOGS</div>
        <div className={styles.button}>CONTACT</div>
      </div>
    </div>
  );
};

export default Sidebar;

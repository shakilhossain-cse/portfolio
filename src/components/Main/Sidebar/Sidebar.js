import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar} style={{ background: "#fff" }}>
        <div className={styles.button}>About</div>
        <div className={styles.button}>Work</div>
        <div className={styles.button}>Blogs</div>
        <div className={styles.button}>Contact me</div>
      </div>
    </div>
  );
};

export default Sidebar;

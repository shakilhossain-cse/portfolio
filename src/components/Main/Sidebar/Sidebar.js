import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ category, setCategory }) => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar} style={{ background: "#fff" }}>
        <div className={styles.button} onClick={() => setCategory("about")}>
          ABOUT
        </div>
        <div className={styles.button} onClick={() => setCategory("works")}>
          WORKS
        </div>
        <div className={styles.button} onClick={() => setCategory("blog")}>
          BLOGS
        </div>
        <div className={styles.button} onClick={() => setCategory("contact")}>
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

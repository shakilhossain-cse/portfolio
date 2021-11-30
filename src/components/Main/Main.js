import React from "react";
// import About from "./About/About";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Works from "./Works/Works";

const Main = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Works />
      </div>
    </div>
  );
};

export default Main;

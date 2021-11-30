import React from "react";
import About from "./About/About";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <About />
    </div>
  );
};

export default Main;

import React from "react";
import Contact from "./Contact/Contact";
// import About from "./About/About";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";
// import Works from "./Works/Works";

const Main = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Contact />
      </div>
    </div>
  );
};

export default Main;

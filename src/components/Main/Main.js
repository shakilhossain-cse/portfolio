import React, { useState } from "react";
import Contact from "./Contact/Contact";
import About from "./About/About";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Works from "./Works/Works";
import Blog from "./Blog/Blog";

const Main = () => {
  const [category, setCategory] = useState("about");
  return (
    <div className={styles.container}>
      <Sidebar setCategory={setCategory} />
      <div className={styles.content}>
        {category === "about" ? (
          <About />
        ) : category === "works" ? (
          <Works />
        ) : category === "contact" ? (
          <Contact />
        ) : category === "blog" ? (
          <Blog />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Main;

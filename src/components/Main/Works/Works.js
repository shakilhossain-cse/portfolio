import React, { useEffect, useState } from "react";
import styles from "./Works.module.css";

const Works = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <>
      <h2>WORKS DEMO</h2>
      <div className={styles.works}>
        {projects.map((project) => (
          <div className={styles.work} key={project.id}>
            <img src={project.image} alt="" />
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noreferrer" 
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <i
                    style={{
                      margin: "0",
                      color: "tomato",
                      textDecoration: "none",
                    }}
                  >
                    live Link
                  </i>
                </a>
                <a
                  href={project.clintside}
                  target="_blank"
                  rel="noreferrer" 
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <i
                    style={{
                      margin: "0",
                      color: "tomato",
                    }}
                  >
                    Github Link
                  </i>
                </a>
              </div>
              <p
                style={{
                  textAlign: "justify",
                  margin: "0",
                  color: "rgb(63 60 60)",
                }}
              >
                {project.deities.slice(0, 90)}
              </p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;

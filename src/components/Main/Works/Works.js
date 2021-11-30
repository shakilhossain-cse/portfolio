import React from "react";
import styles from "./Works.module.css";

const Works = () => {
  return (
    <>
      <h2>WORKS DEMO</h2>
      <div className={styles.works}>
        <div className={styles.work}>
          <img
            src="https://inbio-react.netlify.app/static/57ab87af87223d70a70d396075f46c8c/d0f18/portfolio-01.webp"
            alt=""
          />
          <div>
            <i style={{ margin: "0", color: "tomato" }}>Lorem ipsum dolor</i>
            <p
              style={{
                textAlign: "justify",
                margin: "0",
                color: "rgb(63 60 60)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              eos, optio autem iure assumenda{" "}
            </p>
          </div>
        </div>
        <div className={styles.work}>
          <img
            src="https://inbio-react.netlify.app/static/57ab87af87223d70a70d396075f46c8c/d0f18/portfolio-01.webp"
            alt=""
          />
          <div>
            <i style={{ margin: "0", color: "tomato" }}>Lorem ipsum dolor</i>
            <p
              style={{
                textAlign: "justify",
                margin: "0",
                color: "rgb(63 60 60)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              eos, optio autem iure assumenda{" "}
            </p>
          </div>
        </div>
        <div className={styles.work}>
          <img
            src="https://inbio-react.netlify.app/static/57ab87af87223d70a70d396075f46c8c/d0f18/portfolio-01.webp"
            alt=""
          />
          <div>
            <i style={{ margin: "0", color: "tomato" }}>Lorem ipsum dolor</i>
            <p
              style={{
                textAlign: "justify",
                margin: "0",
                color: "rgb(63 60 60)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              eos, optio autem iure assumenda{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

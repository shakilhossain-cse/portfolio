import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.image}>
          <img
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/88370897_189827079124088_1483575849721528320_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH0umIu9dJx4Xhji9bE0Xch-dllmOutkCz52WWY662QLH-_-ktr4wrpoFKuV_fWALWyb-mlhr_xkfmSCP4PDblY&_nc_ohc=ZkO_fhfnJB4AX9NXa9a&_nc_ht=scontent.fdac14-1.fna&oh=ea39b16c473bad4dd0388142acd32f20&oe=61CA03A5"
            alt=""
          />
        </div>
        <div className={styles.info}>
          <p
            style={{
              color: "#ff3b5e",
              letterSpacing: "4px",
              fontWeight: "500",
            }}
          >
            VISIT MY PORTFOLIO & HIRE ME
          </p>
          <h1 style={{ fontWeight: "700" }}>About Me</h1>
          <p style={{ color: "rgb(136 136 136)", fontSize: "19px" }}>
          Hello! My name is Md Shajkil Hossain.A hard working self-motivated and enthusiastic web developer with a deep interest in JavaScript ,as well as the ability to communicate effectively in a team setting, and possessing a strong willingness to learn about modern web technologies .
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3 style={{ textAlign: "center" }}>What I am Doing</h3>
          <div className={styles.works}>
            <div className={styles.work}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                <line x1="2" y1="20" x2="2.01" y2="20"></line>
              </svg>
              <div>
                <h3 style={{ textAlign: "center" }}>RESPONSIVE DESIGN</h3>
                <p style={{ textAlign: "center" }}>
                without Mobile friendly we can't imagine any website now. Website should be mobile friendly becauase the user always used their mobile first. I prefer responsive design.
                </p>
              </div>
            </div>
            <div className={styles.work}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <div>
                <h3 style={{ textAlign: "center" }}>WEB DEVELOPMENT</h3>
                <p style={{ textAlign: "center" }}>
                I have been working on web development world now. I like to use MongoDB, Express, React JS, Node JS, Firebase, Heroku for full functional websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

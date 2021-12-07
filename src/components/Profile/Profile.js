import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.useInfo}>
          <div className={styles.photo}>
            <img
              src="https://i.ibb.co/0nw8KLb/125066437-385761169530677-5343176292778031493-n.jpg"
              alt="profile_photo"
            />
          </div>
          <div className={styles.data}>
            <h2>SHAKIL HOSSAIN</h2>
            <p>Front-end Developer</p>
            <a
              href="https://drive.google.com/file/d/10aPPEvsKcNkKUoFGb29m5gGUN878MgF_/view"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download Resume</button>
            </a>
          </div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.userContact}>
          <div className={styles.contactData}>
            <p>Email</p>
            <h4>shakilhossainp.cse@gmail.com</h4>
          </div>
          <div className={styles.contactData}>
            <p>Phone</p>
            <h4>+8801568438412</h4>
          </div>
          <div className={styles.contactData}>
            <p>Location</p>
            <h4>Bogura,Bangladesh</h4>
          </div>
          <div className={styles.contactData}>
            <p>BIRTHDAY</p>
            <h4>01 jan 2001</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

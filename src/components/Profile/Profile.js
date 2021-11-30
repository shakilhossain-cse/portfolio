import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.useInfo}>
          <div className={styles.photo}>
            <img
              src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/240462304_567782011328591_9115769117975561781_n.jpg?_nc_cat=105&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG9bx7BQ_XFFLndqCjSyWDxu4IBrw_5wyy7ggGvD_nDLMe4mlE9xgWH-gwHCrnQL1qjoF4jud55NQ2qm3U1JmYx&_nc_ohc=jfE-I3V303YAX-IlGGI&tn=f6pF-vacycQDVdUU&_nc_ht=scontent.fdac14-1.fna&oh=067899be4c15fd2dae33ab6e9bf651b2&oe=61AA3E46"
              alt="profile_photo"
            />
          </div>
          <div className={styles.data}>
            <h2>SHAKIL HOSSAIN</h2>
            <p>Front-end Developer</p>
            <button>Download Resume</button>
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
            <h4>+88015000000</h4>
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

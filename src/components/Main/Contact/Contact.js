import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <h3>CONTACT ME</h3>
      <div className={styles.contact}>
        <form action="">
          <input type="text" placeholder="Type Your Name" />
          <br />
          <input type="text" placeholder="Type Your Email" />
          <br />
          <textarea name="" id="" cols="30" rows="10" placeholder="Type your text"></textarea>
          <br />
          <button>SEND</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

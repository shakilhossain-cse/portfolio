import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmxhc9i",
        "template_kfjce86",
        form.current,
        "user_n3t6TgosIye2CZD0VYqkF"
      )
      .then(
        (result) => {
          if (result.text) {
            alert("Your Massage sent successfully");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h3>CONTACT ME</h3>
      <div className={styles.contact}>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Type Your User Name"
            name="user_name"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Type Your Email"
            name="user_email"
            required
          />
          <br />
          <textarea
            id=""
            cols="30"
            rows="10"
            name="message"
            placeholder="Type your text"
            required
          ></textarea>
          <br />
          <button type="submit">SEND</button>
        </form>
      </div>
    </>
  );
};

export default Contact;

import styles from "./contactbody.module.css";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

export default function ContactBody() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate message field
    if (!message.trim()) {
      alert("Please enter a message before submitting.");
      return;
    }

    const serviceId = "service_8ccpkl3";
    const templateId = "template_7a9sp8o";
    const publicKey = "1iTUM96xHer9u5iCR";

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      company,
      services,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setServices("");
        setMessage("");
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.parallaxSection}>
        <div className={styles.overlay}>
          <h2>Contact Us</h2>
          <p>We’d love to hear from you.</p>
          <p>Reach out and let’s start the conversation.</p>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <div className={styles.fieldContainer}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldContainer}>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.fieldContainer}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldContainer}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.fieldContainer}>
                <label>Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className={styles.fieldContainer}>
                <label>Services</label>
                <select
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                >
                  <option value="">---Select---</option>
                  <option value="Immediately">Immediately</option>
                  <option value="In a few months">In a few months</option>
                  <option value="This Year">This Year</option>
                </select>
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <label>Message</label>
              <textarea
                placeholder="Message"
                style={{ width: "192%", height: "80px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
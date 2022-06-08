import { Fragment, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [details, setDetails] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name === "" || details.email === "") {
      addToast("Please fill all inputs", { appearance: "error" });
    } else {
      const data = JSON.parse(localStorage.getItem("contacts")) || {
        contacts: [],
      };
      localStorage.setItem(
        "contacts",
        JSON.stringify({
          contacts: [
            ...data.contacts,
            { ...details, id: Math.floor(Math.random() * 1000) },
          ],
        })
      );
      setDetails({ name: "", email: "" });
      navigate("/contact-app/contacts");
      addToast("Contact added successfully", { appearance: "success" });
    }
  };
  return (
    <Fragment>
      <h3>Add Contact</h3>
      <form className={styles.container} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          name="name"
          value={details.name}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="email"
          name="email"
          value={details.email}
        />
        <button type="submit">Add</button>
      </form>
    </Fragment>
  );
};

export default ContactForm;

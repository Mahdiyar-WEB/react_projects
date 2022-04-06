import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "./EditContact.module.css";
import http from "../../../services/httpServices";

const EditContact = () => {
  const { updateContact } = http();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [text, setText] = useState({ name: "", email: "" });
  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);
    setText(query);
  }, []);

  const changeHandler = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (text.name === "" || text.email === "") {
      addToast("Please fill all inputs", { appearance: "error" });
    } else {
      updateContact(text.id, text).then((res) => {
        navigate("/contact-app/contacts");
        addToast("Contact edited successfully ", { appearance: "success" });
      });
    }
  };
  return (
    <form onSubmit={(e) => submitHandler(e)} className={styles.container}>
      <div>
        <p>name:</p>
        <input
          type="text"
          onChange={(e) => changeHandler(e)}
          value={text.name}
          name="name"
          placeholder="Enter Edited name"
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          onChange={(e) => changeHandler(e)}
          value={text.email}
          name="email"
          placeholder="Enter Edited email"
        />
      </div>

      <button type="submit">Edit</button>
    </form>
  );
};

export default EditContact;

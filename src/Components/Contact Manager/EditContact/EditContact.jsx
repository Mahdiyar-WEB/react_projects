import { useNavigate, useLocation,useParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import styles from "./EditContact.module.css";

const EditContact = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [text, setText] = useState({ name: "", email: "" });
  const { search } = useLocation();
  const {id} = useParams();
  
  useEffect(() => {
    const query = queryString.parse(search);
    setText(query);
  }, []);

  const changeHandler = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const submitHandler =  (e) => {
    e.preventDefault();
    if (text.name === "" || text.email === "") {
      addToast("Please fill all inputs", { appearance: "error" });
    } else {
        const {contacts} = JSON.parse(localStorage.getItem("contacts"));
        console.log(contacts);
        console.log(id);
        const index = contacts.findIndex(contact=> contact.id === Number(id));
        const definedContacts = contacts[index];
        console.log(definedContacts);
        definedContacts.name = text.name;
        definedContacts.email = text.email;
        contacts[index] = definedContacts;
        localStorage.setItem("contacts",JSON.stringify({contacts:[...contacts]}));
        navigate("/contact-app/contacts");
        addToast("Contact edited successfully ", { appearance: "success" });
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

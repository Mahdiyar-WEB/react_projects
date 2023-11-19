import { Fragment, useEffect, useState } from "react";
import Contact from "../Conatact/Contact";
import styles from "./ContactList.module.css";
import { useToasts } from "react-toast-notifications";

let allContacts = [];
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const { addToast } = useToasts();

  const deleteHandler = (id) => {
    const {contacts} = JSON.parse(localStorage.getItem("contacts"));
    const filteredContacts =  contacts.filter(contact=> contact.id !== id);
    localStorage.setItem("contacts",JSON.stringify({contacts:[...filteredContacts]}));
    setContacts(filteredContacts); 
    addToast("Contact removed successfully", { appearance: "success" });
  };
  const changeHandler = (text) => {
    if (!text) {
      setContacts(allContacts);
    } else {
      const cloneContacts = [...allContacts];
      const searchedContacts = cloneContacts.filter((contact) =>
        Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(text.toLowerCase())
      );
      setContacts(searchedContacts);
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts")) || {contacts:[]};
    allContacts = [...contacts, ...data.contacts];
    setContacts(allContacts);
  }, []);

  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search"
        style={{ marginTop: "20px" }}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {!contacts && <h2 className={styles.head2}>There is no contacts</h2>}
      <ul className={styles.container}>
        {contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              onDelete={() => deleteHandler(contact.id)}
              key={contact.id}
            />
          );
        })}
        {!contacts.length && <h2 className={styles.noContact}>Please add contact</h2>}
      </ul>
    </Fragment>
  );
};

export default ContactList;

import { Fragment, useEffect, useState } from "react";
import Contact from "../Conatact/Contact";
import styles from "./ContactList.module.css";
import { useToasts } from "react-toast-notifications";
import http from "../../../services/httpServices";

let allContacts = [];
const ContactList = () => {
  const { getContacts, deleteContacts } = http();
  const [contacts, setContacts] = useState([]);
  const { addToast } = useToasts();

  const deleteHandler = async (id) => {
    await deleteContacts(id);
    getContacts()
      .then((res) => setContacts(res.data))
      .catch((error) => alert(error));
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
    getContacts()
      .then((res) => {
        setContacts(res.data);
        allContacts = [...res.data];
        console.log(allContacts);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search..."
        style={{ marginTop: "20px" }}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {contacts.length === 0 && (
        <h2 className={styles.head2}>There is no contacts</h2>
      )}
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
      </ul>
    </Fragment>
  );
};

export default ContactList;

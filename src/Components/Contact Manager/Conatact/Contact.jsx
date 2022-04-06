import styles from "./Contact.module.css";
import { BiUser, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <li className={styles.container}>
      <div className={styles.details}>
        <span className={styles.userIcon}>
          <BiUser />
        </span>
        <div className={styles.details2}>
          <span>{name}</span>
          <span>{email}</span>
        </div>
      </div>
      <div className={styles.details3}>
        <Link
          to={{
            pathname: `/contact-app/contacts/${String(id)}`,
            search: `name=${name}&email=${email}&id=${id}`,
          }}
        >
          <button className={styles.show_btn}>Show</button>
        </Link>
        <Link
          to={{
            pathname: `/contact-app/edit/${id}`,
            search: `name=${name}&email=${email}&id=${id}`,
          }}
        >
          <button className={styles.show_btn}>Edit</button>
        </Link>
        <button className={styles.submit_btn} onClick={onDelete}>
          <BiTrash />
        </button>
      </div>
    </li>
  );
};

export default Contact;

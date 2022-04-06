import { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import styles from "./FullContact.module.css";
import queryString from "query-string";

const FullContact = () => {
  const [details, setDetails] = useState({});
  const { search } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);
    console.log(query);
    setDetails(query);
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <h3>
          <BiUserCircle />
        </h3>
        <h4>Name: {details.name}</h4>
        <h4>Email: {details.email}</h4>
        <h4>ID: {details.id}</h4>
      </div>
      <Link to="/contact-app/contacts">
        <button>&larr; Back</button>
      </Link>
    </div>
  );
};

export default FullContact;

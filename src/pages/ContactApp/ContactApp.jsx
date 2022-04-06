import styles from "./ContactApp.module.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../../Components/Contact Manager/layout/Layout";
import ContactList from "../../Components/Contact Manager/ContactList/ContactList";
import ContactForm from "../../Components/Contact Manager/ContactForm/ContactForm";
import FullContact from "../../Components/Contact Manager/FullContact/FullContact";
import EditContact from "../../Components/Contact Manager/EditContact/EditContact";

const ContactApp = () => {
  return (
    <main className={styles.container}>
      <Layout>
        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contacts/:id" element={<FullContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/add-contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default ContactApp;

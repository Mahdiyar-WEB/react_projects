import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const items = [
    { to: "/contact-app/contacts", name: "Contacts" },
    { to: "/contact-app/add-contact", name: "Add Contacts" },
  ];
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.container2}>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.activeLink : styles.navLink
                  }
                  to={item.to}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

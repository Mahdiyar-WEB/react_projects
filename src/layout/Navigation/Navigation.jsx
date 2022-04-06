import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
const items = [
  { label: "Home", to: "/" },
  { label: "TodoApp", to: "/todo-app" },
  { label: "Expense Tracker", to: "/expense-tracker" },
  { label: "ContactApp", to: "/contact-app" },
];

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className={styles.container}>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={(navData) =>
                    navData.isActive && styles.active_link
                  }
                  to={item.to}
                >
                  {item.label}
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

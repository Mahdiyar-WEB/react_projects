import styles from "./Navbar.module.css";

const Navbar = ({ remaining }) => {
  return (
    <nav  className={styles.navbar}>
      {remaining ? (
        <h2>
          Remaining Todos: <span className={styles.remaining}>{remaining}</span>
        </h2>
      ) : (
        <h2>All Todos Completed</h2>
      )}
    </nav>
  );
};
export default Navbar;

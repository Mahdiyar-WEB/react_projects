import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container} >
      <img src={require("../assets/images/Aftab.png")} alt="projects" />
      <h2>Welcome to my projects</h2>
    </div>
  );
};

export default Home;

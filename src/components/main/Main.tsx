import styles from "./Main.module.scss";
import NavBar from "./navbar/NavBar";
import Content from "./content/Content";
import Aside from "./aside/Aside";

function Main() {
  return (
    <div className={styles.main}>
      <NavBar />
      <Content />
      <Aside />
    </div>
  );
}

export default Main;

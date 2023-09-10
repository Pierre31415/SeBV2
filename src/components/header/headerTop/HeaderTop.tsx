import styles from "./HeaderTop.module.scss";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import DarkMode from "../../../DarkMode";
import logo from "./SEBlogoPlat01.png";
import { NavLink } from "react-router-dom";

function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      <div className={styles.burgerMenuTop}>
        <BurgerMenu />
      </div>
      <NavLink className={styles.logoTopImg} to="/">
        <img
          className={styles.logoTop}
          src={logo}
          alt="logo Science et Bivouac"
        />
      </NavLink>

      <div className={styles.darkModeTop}>
        <DarkMode />
      </div>
    </div>
  );
}

export default HeaderTop;

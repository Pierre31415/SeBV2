import styles from "./Header.module.scss";
import HeaderTop from "./headerTop/HeaderTop";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      // Pour le sous-titre
      const h3Header = document.querySelector(
        `.${styles.h3Header}`
      ) as HTMLElement;
      const scrollY = window.scrollY;
      const speed = -1.2;
      h3Header.style.transform = `translateY(${scrollY * speed}px)`;

      // Pour le background
      const header = document.querySelector(`.${styles.header}`) as HTMLElement;
      const scrollPosition = window.pageYOffset;
      header.style.backgroundPositionY = `calc(70% + ${
        scrollPosition * 0.5
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <HeaderTop />

      <header className={`${styles.header} d-flex flex-row align-items-center`}>
        <div className={`${styles.headerMain} }flex-fill `}>
          <div className={styles.headerMainInner}>
            <h3 className={styles.h3Header}>
              Trucs et astuces de bivouac, avec de vrais morceaux de science à
              <span className="noWrap"> l'intérieur !</span>
            </h3>
          </div>{" "}
          <div className={styles.darkModeHeader}></div>
        </div>
      </header>
    </>
  );
}

export default Header;

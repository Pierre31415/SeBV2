import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface AccordionItemProps {
  header: string;
  symbol: string;
  [key: string]: any;
}

const AccordionItem = ({ header, symbol, ...rest }: AccordionItemProps) => (
  <Item
    {...rest}
    header={
      <>
        <span className="material-symbols-outlined">{symbol}</span>
        {header}
        <div className={styles.chevronTest}></div>
        {/* <img className={styles.chevron} src={chevronDown} alt="Chevron Down" /> */}
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

function NavBar() {
  return (
    <div className={styles.navBar}>
      <NavLink className={styles.navBarAccueil} to="/">
        <h2 className="my-30">ACCUEIL</h2>
      </NavLink>
      <div className={styles.burgerContainer}></div>
      <div className={styles.accordion}>
        <Accordion transition transitionTimeout={250}>
          <AccordionItem symbol="biotech" header="Science !">
            <ul>
              <NavLink className={styles.liNav} to="/temperature">
                <li>Température</li>
              </NavLink>
              <hr />
              <NavLink className={styles.liNav} to="/nutrition">
                <li>Nutrition</li>
              </NavLink>{" "}
              <hr />{" "}
              <NavLink className={styles.liNav} to="/psy">
                <li>Psychologie</li>
              </NavLink>
            </ul>
          </AccordionItem>

          <AccordionItem symbol="construction" header="Matos">
            <ul>
              <NavLink className={styles.liNav} to="/sacADos">
                <li className={styles.subcat}>Sac à dos</li>
              </NavLink>
              <hr />
              <NavLink className={styles.liNav} to="/hamac">
                <li className={styles.subcat}>Hamac</li>
              </NavLink>
              <hr />
              <NavLink className={styles.liNav} to="/tente">
                <li className={styles.subcat}>Tente</li>
              </NavLink>
              <hr />

              <NavLink className={styles.liNav} to="/hamacVsTente">
                <li className={styles.subcat}> Hamac vs tente</li>
              </NavLink>
              <hr />

              <NavLink className={styles.liNav} to="/batons">
                <li className={styles.subcat}>Les bâtons</li>
              </NavLink>
            </ul>
          </AccordionItem>

          <AccordionItem symbol="psychology" header="Techniques">
            <ul>
              <NavLink className={styles.liNav} to="/noeuds">
                <li className={styles.subcat}>Nœuds</li>
              </NavLink>
              <hr />

              <NavLink className={styles.liNav} to="/orienter">
                <li className={styles.subcat}>S'orienter</li>
              </NavLink>
              <hr />

              <NavLink className={styles.liNav} to="/feu">
                <li className={styles.subcat}>Le feu</li>
              </NavLink>
            </ul>
          </AccordionItem>

          <AccordionItem symbol="checklist" header="Préparatifs">
            <ul>
              <NavLink className={styles.liNav} to="/trajet">
                <li className={styles.subcat}>Trajet</li>
              </NavLink>
              <hr />

              <NavLink className={styles.liNav} to="/loi">
                <li className={styles.subcat}>Réglementation</li>
              </NavLink>
              <hr />

              <NavLink className={styles.liNav} to="/entrainement">
                <li className={styles.subcat}>Entraînement</li>
              </NavLink>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default NavBar;

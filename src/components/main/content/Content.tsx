import { Routes, Route } from "react-router-dom";
import styles from "./Content.module.scss";
import imgAside from "../aside/sawing.gif";
import Accueil from "./articles/Accueil";
import Psychologie from "./articles/psychologie/Psychologie";
import Temperature from "./articles/temperature/Temperature";
import Nutrition from "./articles/nutrition/Nutrition";
import HamacVsTent from "./articles/hamacVsTente/HamacVsTente";
import Hamac from "./articles/hamac/Hamac";
import SacADos from "./articles/sacADos/SacADos";
import Batons from "./articles/batons/Batons";
import Noeuds from "./articles/noeuds/Noeuds";
import Orienter from "./articles/orienter/Orienter";
import Feu from "./articles/feu/Feu";
import Trajet from "./articles/trajet/Trajet";
import Loi from "./articles/loi/Loi";
import Entrainement from "./articles/entrainement/Entrainement";

import Tente from "./articles/tente/Tente";

function Content() {
  return (
    <div className={styles.contentContainer}>
      <div className={`${styles.content} flex-fill container p-20 b3 test`}>
        <Routes>
          <Route path="*" element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/psy" element={<Psychologie />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/hamacVsTente" element={<HamacVsTent />} />
          <Route path="/hamac" element={<Hamac />} />
          <Route path="/sacADos" element={<SacADos />} />
          <Route path="/batons" element={<Batons />} />
          <Route path="/noeuds" element={<Noeuds />} />
          <Route path="/orienter" element={<Orienter />} />
          <Route path="/feu" element={<Feu />} />
          <Route path="/trajet" element={<Trajet />} />

          <Route path="/entrainement" element={<Entrainement />} />
          <Route path="/loi" element={<Loi />} />
          <Route path="/tente" element={<Tente />} />
        </Routes>
      </div>

      {/* SITE EN CONSTRUCTION en dessous si petit écran */}
      <div className={styles.asideSmallScreen}>
        <div className={styles.innerAsideSmallScreen}>
          {" "}
          <h2 className="my-30">Site en construction !</h2>
          <p>
            Ce site n'en est qu'à ses tout débuts, plein de choses sont à venir
            tant sur le fond que sur la forme ! Bon séjour à vous sur ce site
            qui s'épanouit !
          </p>
        </div>
        <img
          className={styles.imgAside}
          src={imgAside}
          alt="en cours de travaux"
        />
      </div>
    </div>
  );
}

export default Content;

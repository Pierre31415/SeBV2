import React, { useState, useEffect, useRef } from "react";
import styles from "../Articles.module.scss";
import Fancybox from "../../../../../Fancybox";

//Ci-dessous, permet de faire apparaître un petit bouton de Sommaire à droite après un certain scroll

window.addEventListener("scroll", function () {
  var menuAppearing = document.getElementById("menuAppearing");
  var scrollPosition = window.scrollY;

  if (
    menuAppearing &&
    !menuAppearing.classList.contains(`${styles.visible}`) &&
    scrollPosition >= 800
  ) {
    menuAppearing.classList.add(`${styles.visible}`);
  } else if (
    menuAppearing &&
    menuAppearing.classList.contains(`${styles.visible}`) &&
    scrollPosition < 800
  ) {
    menuAppearing.classList.remove(`${styles.visible}`);
  }
});

const Psychologie = () => {
  const [isButton1, setIsButton1] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsButton1((prevState) => !prevState);
  };

  const resetClasses = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsButton1(true);
    }
  };

  //Ci-dessous, permet de changer les classes du petit bouton de sommaire et de son sommaire quand on clique ailleurs pour le faire se retracter
  useEffect(() => {
    document.addEventListener("click", resetClasses);
    return () => {
      document.removeEventListener("click", resetClasses);
    };
  }, []);

  /////////////////////
  return (
    <>
      <h2 className={styles.h2article}>Psychologie et bivouac</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#psy1">Définition de la santé mentale</a>
            </li>
            <li>
              <a href="#psy2">Quelques études</a>
            </li>
            <li>
              <a href="#psy3">Conclusion</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <h5 className={styles.h5article}>
            Imaginez que la pratique du{" "}
            <strong className={styles.strongh5}>bivouac</strong> améliore notre
            <strong className={styles.strongh5}> santé mentale</strong>, <br />{" "}
            ce serait plutôt la classe n’est-il pas ? 😎
          </h5>
        </div>
      </div>
      <div id="menuAppearing" className={`${styles.invisible}`}>
        <div ref={containerRef} className={styles.Container1MenuAppearing}>
          <div
            className={
              isButton1 ? styles.Menu1MenuAppearing : styles.Menu2MenuAppearing
            }
          >
            <h4>- SOMMAIRE- </h4>
            <ol>
              <li>
                <a href="#psy1">Définition de la santé mentale</a>
              </li>
              <li>
                <a href="#psy2">Quelques études</a>
              </li>
              <li>
                <a href="#psy3">Conclusion</a>
              </li>
            </ol>
          </div>
          <div
            className={
              isButton1
                ? styles.Button1MenuAppearing
                : styles.Button2MenuAppearing
            }
            onClick={handleButtonClick}
          >
            <span className="material-symbols-outlined">
              format_list_bulleted
            </span>
          </div>
        </div>
      </div>
      <div id="psy1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        1) D’ailleurs en fait, la santé mentale, c’est quoi ?
      </h3>
      <div>
        <p>
          <div className={styles.imgArticleContainer}>
            <img
              title="Une santé mentale en fer !"
              className={styles.imgArticleRightTop}
              src={require("./img/psy02.png")}
              alt="Cerveau en bonne santé"
            />
          </div>
          👉 L’{" "}
          <a
            href="https://fr.wikipedia.org/wiki/Organisation_mondiale_de_la_sant%C3%A9"
            title="arrow icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            OMS
          </a>{" "}
          définit la{" "}
          <em>
            <span className={styles.fat}>santé</span>
          </em>{" "}
          comme{" "}
          <span className={styles.citation}>
            « un état de complet bien-être physique, mental et social, et ne
            consiste pas seulement en une absence de maladie ou d’infirmité »
          </span>
          . Triptyque génial qui s’applique à plein de choses de la vie (vie en
          couple, travail, communauté...) soit dit en passant.{" "}
        </p>

        <p>
          La <span className={styles.fat}>santé mentale</span> fait ainsi partie
          intégrante de la santé : il ne peut pas y avoir de bonne santé sans
          bonne santé mentale ! Parallèlement, prendre soin de sa santé mentale,
          c’est prendre soin de sa santé globale !
        </p>
        <p>
          La dimension de la santé mentale qui va nous intéresser le plus ici
          est la{" "}
          <strong className={styles.strongText}>
            <span className={styles.fat}>santé mentale positive</span>
          </strong>{" "}
          : elle correspond au sentiment de bien-être, l’épanouissement
          personnel, la capacité à développer des relations sociales positives,
          et d’autres choses encore…
        </p>
      </div>{" "}
      <div id="psy2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        2) Et le bivouac dans tout ça ? Que nous apprend la science ?
      </h3>
      <p>
        L’impact de la pratique du bivouac n’est encore que timidement étudiée
        par les scientifiques, voici déjà quelques études qui disposent de
        résultats très intéressants. 🔬
      </p>
      <div>
        <p>
          <div
            className={`${styles.imgArticleContainer} ${styles.imgBrightness}`}
          >
            <Fancybox
              options={{
                compact: false,
              }}
            >
              <a
                data-fancybox="gallery"
                href={require("./img/PsyHerissonBIG.jpg")}
                data-caption="Rien de tel qu'on bon bivouac ! (Source : <a href='https://www.instagram.com/hedgehog_azuki/?hl=en' target='_blank'>hedgehog_azuki, Instagram </a>)"
              >
                <img
                  title="Rien de tel qu'un bon bivouac !"
                  className={styles.imgArticleLeftTop}
                  alt="hérisson dans une tente"
                  src={require("./img/PsyHerissonSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          <ul>
            <li>
              <span className={styles.dot}></span>Les aventures dans la nature
              permettraient d’{" "}
              <span className={styles.fat}>
                améliorer entre autre la satisfaction envers la vie, le bonheur
                et la pleine conscience,
              </span>{" "}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S014019711600049X"
                title="Lien vers l'étude"
                target="_blank"
                rel="noopener noreferrer"
              >
                selon une étude de Michael Mutz et Johannes Müller
              </a>
              . La pleine conscience, c’est super important, c’est un peu une
              clé de voûte de la bonne santé mentale ! Pour la faire courte, la
              pleine conscience est un état de vigilance interne (pensées,
              émotions,…) ou externe (sons, environnement autour de soi,…), qui
              participe directement à un sentiment de sérénité et à la santé
              mentale positive.
            </li>
            <li>
              {" "}
              <span className={styles.dot}></span>
              En plus de ça, le bivouac permettrait d’{" "}
              <span className={styles.fat}>
                améliorer significativement notre sentiment de maîtrise et
                faciliterait les liens sociaux
              </span>{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/23828947/"
                title="Lien vers l'étude"
                target="_blank"
                rel="noopener noreferrer"
              >
                d'après une étude de Sue Cotton et Felicity Butselaar
              </a>
              , y compris pour les personnes souffrant de pathologies mentales.
              On notera que les effets bénéfiques s’estomperaient au bout de 4
              semaines.
            </li>{" "}
            <li>
              <span className={styles.dot}></span>
              Au vue des effets positifs des aventures dans la nature sur la
              santé mentale, des thérapies ont même été élaborées dans cette
              optique. L'efficacité de ces nouvelles méthodes de soin ont même
              été étudiées au travers de méta-analyses (étude d'un regroupement
              d'études, la crème de la crème de la recherche scientifique !),
              comme la{" "}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2352827321002093?via%3Dihub"
                title="Lien vers l'étude"
                target="_blank"
                rel="noopener noreferrer"
              >
                méta-analyse de Peter A Coventry et de son équipe en 2021
              </a>
              , qui démontre que{" "}
              <span className={styles.fat}>
                les activités dans la nature réduisent l'anxiété ou l'humeur
                dépressive, augmentent les émotions positives et réduisent les
                négatives.
              </span>{" "}
              Un hamac au milieu de la forêt comme thérapie, quoi de mieux dans
              la vie ?
            </li>
          </ul>
        </p>
      </div>
      <h3 className={styles.h3article}>3) Un p'tit mot pour conclure ?</h3>
      <div id="psy3" className={styles.linkSommaire}></div>
      <p id="zone1">
        Vous l'aurez compris, les études scientifiques nous indiquent que le
        bivouac améliore clairement notre santé mentale sur bien des aspects.
        Aussi, il semble pertinent de{" "}
        <span className={styles.fat}>
          bivouaquer régulièrement (au moins une fois par mois) pour pérenniser
          les effets positifs
        </span>{" "}
        offerts par l’aventure dans la nature. 😉🌲 🌳
      </p>
    </>
  );
};

export default Psychologie;

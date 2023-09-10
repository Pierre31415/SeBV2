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

const Entrainement = () => {
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
      <h2 className={styles.h2article}>
        L'entraînement, la clé d'un bivouac heureux
      </h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#entrainement1">Entrainement aux techniques </a>
            </li>
            <li>
              <a href="#entrainement2"> Entrainement physique </a>
            </li>
            <li>
              <a href="#entrainement3"> Entrainement psychologique</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Pai Mei approuve cet article"
            className={styles.imgArticle}
            src={require("./img/paiMei.gif")}
            alt="entrainement"
          />
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
                <a href="#entrainement1">Entrainement aux techniques </a>
              </li>
              <li>
                <a href="#entrainement2"> Entrainement physique </a>
              </li>
              <li>
                <a href="#entrainement3"> Entrainement psychologique</a>
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
      <div id="entrainement1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Entrainement aux techniques</h3>
      <p>
        {" "}
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
              href={require("./img/failBIG.jpg")}
              data-caption="Mmmmh. Il aurait peut-être fallu lire la notice et s'entraîner AVANT de partir en bivouac !"
            >
              <img
                title="Au moins il y a une tente !"
                className={styles.imgArticleLeftTop}
                alt="échec de tente"
                src={require("./img/failSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        S'entrainer aux techniques avant de partir à l'aventure, c'est essentiel
        ! En effet après une journée de marche, avec la fatigue accumulée, la
        lumière du jour qui s'estompe et peut-être le stress de vouloir agir
        vite, vous n'aurez que très peu de ressources psychiques à attribuer à
        l'élaboration d'hypothèses sur la manière de monter votre bivouac
        surtout si c'est votre première fois.
      </p>
      <p>
        Ainsi le top est qu'en amont de votre excursion vous vous{" "}
        <span className={styles.fat}>
          entraîniez au montage de votre bivouac ainsi qu'aux nœuds calmement
        </span>
        , <span className={styles.fat}>plusieurs fois et régulièrement</span>,
        chez vous ou à l'extérieur pour bien vous imprégner des gestes à
        effectuer, la crème de la crème étant qu'ils deviennent des{" "}
        <span className={styles.fat}>automatismes</span>, un peu comme lorsque
        vous faites vos lacets. À partir de là vous pourrez partir l'esprit
        serein pour vos aventures !
      </p>
      <div id="entrainement2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Entrainement physique</h3>
      <p>
        {" "}
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
              href={require("./img/hal.gif")}
              data-caption="Un échauffement professionnel !"
            >
              <img
                title="Un échauffement professionnel !"
                className={styles.imgArticleRightTop}
                alt="animaux"
                src={require("./img/hal.gif")}
              />
            </a>
          </Fancybox>
        </div>
        Le corps humain est une machine magique{" "}
        <span className={styles.fat}>capable de s'adapter</span>, d'autant plus
        lorsque cela est fait{" "}
        <span className={styles.fat}>progressivement</span>.
        <p>
          Il fut un temps où je pensais qu'il fallait se dépasser comme une
          brute pour progresser, mais c'est faux, voire propice aux blessures de
          manière incidieuse car les tendons peuvent s'abîmer à long terme sans
          qu'on le sente au début. La clé du succès c'est la progression
          pas-à-pas, et savoir apprendre à{" "}
          <span className={styles.fat}>écouter son corps</span>.
        </p>
      </p>
      <p>
        En fonction bien-sûr de votre énergie sportive, il semble pertinent de{" "}
        <span className={styles.fat}>
          s'entrainer au moins quelques semaines avant un long périple
        </span>
        , en rallongeant la durée de vos promenandes, et lorsque vous vous en
        sentez capable, en commençant à utiliser votre sac à dos qui sera lesté
        progressivement. <br />
        Prenez le soin d'écouter votre corps ! Vous êtes courbaturé·e ou vous
        avez un peu mal à une articulation ? Pas de soucis, l'aventure peut être
        reportée à plus tard, ce sera l'occasion de s'interroger sur les
        éventuelles causes de tel ou tel soucis (Chaussures mal lacées qui
        créent des ampoules ? Manque d'hydratation qui fait mal aux
        articulations ? Sac trop lourd pour les chevilles ?... ).{" "}
        <span className={styles.fat}>
          Prenez votre temps, votre aventure en sera d'autant plus agrable et
          sécurisée
        </span>{" "}
        !
      </p>
      <div id="entrainement3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Entrainement psychologique</h3>
      <p>
        Cette partie s'adresse surtout aux personnes qui ont{" "}
        <span className={styles.fat}>peur de bivouaquer</span>, typiquement en
        ce qui concerne le fait de passer du temps dehors{" "}
        <span className={styles.fat}>la nuit</span>.
      </p>
      <p>
        C'est vrai, de part le silence nocturne, chaque petit bruit semble
        démultiplié ! Pour celles et ceux qui n'ont pas encore passé la nuit en
        forêt, vous n'avez pas idée du boucan que ça peut faire un petit oiseau
        qui sautille sur des feuilles mortes à 2h du matin !{" "}
        <span className={styles.fat}>
          Avoir peur est normal que ce soit face à l'inconnu ou lorsque l'on est
          surpris·e
        </span>
        , la clé de voûte pour se détendre c'est l'{" "}
        <span className={styles.fat}>acceptation</span>, d'ailleurs quelques
        exercices peuvent nous donner un coup de pouce en ce sens, j'en décris
        un plus en-bas.
      </p>
      <p>
        {" "}
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
              href={require("./img/lapin.gif")}
              data-caption="Ouais non, ça c'est un lapin adulte ça."
            >
              <img
                title="Ouais non, ça c'est un lapin adulte ça."
                className={styles.imgArticleLeftTop}
                alt="animaux"
                src={require("./img/lapin.gif")}
              />
            </a>
          </Fancybox>
        </div>
        En ce qui concerne les animaux, une attaque d'animal n'arrivera jamais
        en France, à moins vraiment de s'être placé·e dans son refuge (cela peut
        se deviner à la présence de crottes partout) ou si vous menacez ses
        petits. J'ai déjà entendu parler d'une personne dont la tente a été
        rongée par un renard, car la nourriture odorante avait été laissée
        exposée dans la tente... Bref les accidents sont très facilement
        évitables. <br /> J'ai adoré mes premiers contacts avec des sangliers la
        nuit, lors de balades en fin de crépuscule et sans lumière. Je les
        devinais proches, à moins de 7 mètres, et effectuais un léger détour de
        quelques pas pour les respecter, sous le regard bienveillant et paisible
        de ces forces de la forêt. Mention spéciale aussi pour la nuit où toute
        une colonne de marcassins a déboulé devant moi alors que je me tenais à
        moins de 5 mètres, leur mère à proximité semblant avoir compris que je
        comptais attendre poliment la traversée des petits. Un moment magique.
      </p>
      <p>
        <span className={styles.fat}>
          Vous pouvez avoir confiance envers les animaux
        </span>{" "}
        en France, surtout si vous évitez d'embêter les bébés, la pire chose qui
        puisse vous arriver est de vous faire réveiller par un piou-piou qui
        sautille joyeusement sur des feuilles mortes près de vous. Apprenez à
        vous <span className={styles.fat}>habituer à ces sons</span>, à{" "}
        <span className={styles.fat}>les reconnaître</span>, plus vous y serez
        habitué·e plus vous aurez l'esprit serein.
      </p>
      <p>
        Un <span className={styles.fat}>exercice efficace de relaxation </span>
        est de se concentrer sur sa respiration, en inspirant et expirant
        lentement, ceci permet de ralentir et harmoniser le débit cardiaque (qui
        a tendance à s'emballer quand on a peur), c'est ce qu'on appelle la{" "}
        <a
          href="https://dumas.ccsd.cnrs.fr/dumas-03463783"
          title="Lien vers l'étude"
          target="_blank"
          rel="noopener noreferrer"
        >
          cohérence cardiaque
        </a>
        .
      </p>
      <p>
        En ce qui concerne la <span className={styles.fat}>peur du noir</span>,
        ce qui marche bien c'est l'{" "}
        <a
          href="https://www.cairn.info/revue-enfances-et-psy-2015-1-page-106.htm?contenu=resume"
          title="Lien vers l'étude"
          target="_blank"
          rel="noopener noreferrer"
        >
          habituation
        </a>{" "}
        avec une démarche progressive, exactement comme pour une préparation
        physique. Par exemple, une personne phobique du noir pourrait aller en
        forêt la nuit en étant accompagnée pendant 10 minutes, la fois suivante
        pendant 20 minutes, la fois suivante seule pendant 5 minutes, puis
        10,... Vous avez compris.{" "}
        <span className={styles.fat}>
          Prendre son temps, y aller progressivement
        </span>
        . <span className={styles.fat}>Les "régressions" sont normales</span> et
        font partie du processus, il faut ainsi les accueillir et les accepter
        pour pouvoir continuer à progresser.
      </p>
      <p className={styles.italicBig}>
        J'espère que tout ceci vous aidera à être prêt·es au mieux pour profiter
        un max de votre bivouac !
      </p>
    </>
  );
};

export default Entrainement;

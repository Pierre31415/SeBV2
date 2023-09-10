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

const Loi = () => {
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
      <h2 className={styles.h2article}>Réglementation</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#loi1">Prélude</a>
            </li>
            <li>
              <a href="#loi2">Bivouac Versus Camping sauvage</a>
            </li>
            <li>
              <a href="#loi3">Bivouac</a>
            </li>{" "}
            <li>
              <a href="#loi4">Camping sauvage</a>
            </li>{" "}
            <li>
              <a href="#loi5">Le feu</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Feu de camp"
            className={styles.imgArticle}
            src={require("./img/cops.gif")}
            alt="Un feu de camp"
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
                <a href="#loi1">Prélude</a>
              </li>
              <li>
                <a href="#loi2">Bivouac Versus Camping sauvage</a>
              </li>
              <li>
                <a href="#loi3">Bivouac</a>
              </li>{" "}
              <li>
                <a href="#loi4">Camping sauvage</a>
              </li>{" "}
              <li>
                <a href="#loi5">Le feu</a>
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
      <div id="loi1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Prélude</h3>
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
              href={require("./img/dechetsBIG.jpg")}
              data-caption="Le Mont Everest devient une poubelle géante à cause des touristes sans conscience morale. <br/> Heureusement le gouvernement népalais impose maintenant aux alpinistes de ramener 8Kg de déchets lors de leur descente (Source : <a href='https://www.ledauphine.com/france-monde/2014/03/03/les-alpinistes-devront-ramener-8-kilos-de-dechets-en-descendant-l-everest' target='_blank'>Le Dauphiné</a>) "
            >
              <img
                title="Beaucoup trop de touristes laissent leurs déchets"
                className={styles.imgArticleLeftTop}
                alt="déchets"
                src={require("./img/dechetsSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>{" "}
        Avant de commencer, précisons que la réglementation en ce qui concerne
        le bivouac (ou le camping sauvage) ne sont pas à percevoir comme une
        contrainte, mais comme des outils bienveillants pour protéger la faune,
        la flore et les personnes vivant à proximité. <br />
        Et ça vaut le coup de bien respecter ces règles car l'amende peut
        grimper jusqu'à 1500 € !
      </p>{" "}
      <p>
        En tout cas voici les trois règles officieuses les plus importantes :{" "}
        <span className={styles.fat}>éviter toute nuisance sonore</span>,{" "}
        <span className={styles.fat}>emporter avec soi tous les déchets</span>{" "}
        (oui même les crottes et le PQ) pour jetter tout ça proprement dans une
        poubelle plus tard, et <span className={styles.fat}>pas de feu</span> !
        Ces règles sont riches de sens, les personnes adeptes du bivouac et de
        la randonnée auraient meilleure réputation si elles les respectaient
        mieux !
      </p>
      <div id="loi2" className={styles.linkSommaire}></div>{" "}
      <h3 className={styles.h3article}>2) Bivouac Versus Camping sauvage</h3>
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
              href={require("./img/bivouacSauvageBIG.jpg")}
              data-caption="Se reveiller avec ça comme vue, je pense que ça vit bien ! (Source : <a href='https://unsplash.com/fr/photos/ma5cNyRLQ6k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink' target='_blank'>Unsplash </a>)"
            >
              <img
                title="Belle vue au réveil"
                className={styles.imgArticleRightTop}
                alt="Belle vue au réveil"
                src={require("./img/bivouacSauvageSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>{" "}
        <p>Ces deux termes désignent deux choses différentes 👉</p>
        <ul>
          <li>
            {" "}
            <span className={styles.dot}></span>
            <span className={styles.fat}>Le bivouac </span>: Il s'agit
            d'installer sa loyale tente, son fidèle hamac ou autre le temps
            d'une nuit, du coucher de soleil jusqu'au au lendemain matin.
          </li>
          <li>
            {" "}
            <span className={styles.dot}></span>
            <span className={styles.fat}>Le camping sauvage </span>: Il s'agit
            de rester au même endroit pendant plusieurs jours, que ce soit en
            tente, hamac, véhicule ou autre. Le terme de "sauvage" se justifie
            du fait que le camping est alors effectué en dehors des espaces
            dédiés.
          </li>
        </ul>
        <p>
          En France, il n'existe pas vraiment de différence légale entre le
          bivouac et le camping sauvage, à ceci près que le bivouac a tendance a
          être plus toléré dans les parcs ou réserves naturelles.
        </p>
        <p>
          En terme de réglementation, "le bivouac et le camping sauvages sont
          tolérés là où ils ne sont pas interdits". Il y a tout de même quelques
          nuances que nous allons éxaminer.
        </p>
      </p>{" "}
      <div id="loi3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Bivouac</h3> Les règles sont les mêmes
      que pour le camping sauvage , sauf pour les réserves ou parcs naturels
      dans lesquels il est admis d'installer son bivouac au coucher du soleil et
      de l'avoir remballé avant le lever du soleil (
      <span className={styles.fat}>19h à 9h environ</span>). À la fin de l'heure
      autorisée il arrrive que les gardiens patrouillent pour enchaîner les
      contraventions. Je vous invite donc à faire preuve de rigueur !{" "}
      <div id="loi4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Camping sauvage</h3>{" "}
      <p>
        Selon le{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031721244/"
          target="_blank"
          rel="noopener noreferrer"
        >
          code de l'urbanisme
        </a>
        , "Le camping est librement pratiqué, hors de l'emprise des routes et
        voies publiques, dans les conditions fixées par la présente
        sous-section, avec l'accord de celui qui a la jouissance du sol, sous
        réserve, le cas échéant, de l'opposition du propriétaire."
        <br />
        En d'autres termes,{" "}
        <span className={styles.fat}>
          il est autorisé de camper sur n'importe quel terrain, mais à la
          condition de bénéficier de l'autorisation du propriétaire
        </span>
        . Il est autrement interdit !
      </p>
      <p>
        En dehors du cas des terrains privés, il est autorisé de camper partout
        où ce n'est pas interdit (une forêt domaniale par exemple).
      </p>
      <p>Petite liste des interdictions pour le camping sauvage : </p>
      <ul>
        {" "}
        <div className={styles.imgArticleContainer}>
          <img
            title="ça fait beaucoup de règles !"
            className={styles.imgArticleLeftTop}
            id="noBrightness"
            src={require("./img/simpsonRead.gif")}
            alt="Lire une liste"
          />
        </div>
        <li>
          <span className={styles.dot}></span>
          Sur les rivages de la mer et dans les sites inscrits ou protégés
        </li>
        <li>
          <span className={styles.dot}></span>
          Dans un site classé ou inscrit dans les zones de protection du
          patrimoine de la nature et des sites (réserve naturelle)
        </li>
        <li>
          <span className={styles.dot}></span>
          Dans les bois, forêts et parcs classés comme espaces boisés à
          conserver
        </li>
        <li>
          <span className={styles.dot}></span>Sur les routes et les voies
          publiques
        </li>
        <li>
          <span className={styles.dot}></span>À moins de 500m d’un monument
          historique classé ou inscrit
        </li>
        <li>
          <span className={styles.dot}></span>
          Dans un rayon de 200m autour d’un point d’eau capté pour la
          consommation
        </li>
        <li>
          <span className={styles.dot}></span>
          Autour des zones définies par la municipalité par arrêté pour des
          raisons de sécurité ou de salubrité
        </li>
      </ul>
      <p>
        Voici un site trop bien qui indique la réglementation pour les parcs
        nationaux et plein d'autres choses :{" "}
        <a
          href="https://www.lecampingsauvage.fr/legislation-et-reglementation/camping-sauvage-bivouac##parcs_nationaux"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lecampingsauvage.fr
        </a>
        .
      </p>
      <div id="loi5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Le feu</h3>
      <p>
        L’article L131-1 du code forestier interdit d’allumer un feu de camp sur
        un terrain dont on n’est pas propriétaire ou que l’on occupe sans
        l’accord du propriétaire dès lors que l’on se trouve à moins de 200
        mètres d’une forêt ou d’un bois.
      </p>
      <p>
        On notera d'ailleurs que même si on est propriétaire, des spécificités
        peuvent s'appliquer localement ou ponctuellement (canicule).
      </p>
      <p>
        Pour faire simple :{" "}
        <span className={styles.fat}>
          pas de feu à moins de 200m d'une forêt
        </span>{" "}
        ! Et jamais de feu sur terrain privé sans{" "}
        <span className={styles.fat}>accord du ou de la propriétaire</span> !
      </p>
      <p>
        Soit dit en passant la gendarmerie ou les agents de l'ONF peuvent
        laisser passer un bivouac illégal tout discret et sans déchet, mais s'il
        y a eu un feu, même un petit barbecue, préparez-vous à une amende salée
        !
      </p>
    </>
  );
};

export default Loi;

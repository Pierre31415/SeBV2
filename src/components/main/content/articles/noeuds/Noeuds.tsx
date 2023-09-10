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

const Noeuds = () => {
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
      <h2 className={styles.h2article}>Les nœuds</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#noeud1">Prélude</a>
            </li>
            <li>
              <a href="#noeud2">Nœud tendeur</a>
            </li>
            <li>
              <a href="#noeud3">Nœud du pêcheur</a>
            </li>{" "}
            <li>
              <a href="#noeud4">Nœud de Prusik</a>
            </li>{" "}
            <li>
              <a href="#noeud5">Nœud coulant</a>
            </li>
            <li>
              <a href="#noeud6">Nœud de boucle en Huit</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Rien de tel qu'on bon bol d'air frais !"
            className={styles.imgArticle}
            src={require("./img/knotsGif.gif")}
            alt="Cerveau en bonne santé"
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
                <a href="#noeud1">Prélude</a>
              </li>
              <li>
                <a href="#noeud2">Nœud tendeur</a>
              </li>
              <li>
                <a href="#noeud3">Nœud du pêcheur</a>
              </li>{" "}
              <li>
                <a href="#noeud4">Nœud de Prusik</a>
              </li>{" "}
              <li>
                <a href="#noeud5">Nœud coulant</a>
              </li>
              <li>
                <a href="#noeud6">Nœud de boucle en Huit</a>
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
      <div id="noeud1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Prélude</h3>
      <div>
        <p>
          Les noeuds, c'est la vie, mais en mieux ! Je vous présente ici un
          inventaire des quelques noeuds qui vous permettront de tout faire en
          bivouac ! En plus les connaître vous permettra d'épater vos ami(e)s au
          cours de soirées mondaines endiablées !
        </p>
        <p>
          Plus sérieusement, je vous invite à réviser vos nœuds régulièrement,
          cela vous fera gagner un temps très précieux voire de la sécurité pour
          votre bivouac rn situation réelle !
        </p>
      </div>{" "}
      <div id="noeud2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Nœud tendeur</h3>
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
              href={require("./img/nTendeurBIG.jpg")}
              data-caption="Nœud tendeur"
            >
              <img
                title="Nœud tendeur"
                className={styles.imgArticleRightTop}
                alt="Nœud tendeur"
                src={require("./img/nTendeurSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <p>
          {" "}
          Lui c'est la classe absolue pour le bivouac, il permet de{" "}
          <span className={styles.fat}>
            tendre une corde et d'ajuster la tension
          </span>{" "}
          de celle-ci.
        </p>
        <p>
          {" "}
          Exemple typique d'utilisation : relier le tarp à un piquet et tendre
          la corde selon votre bon vouloir en faisant glisser le noeud le long
          de la corde.
        </p>
        <p>
          {" "}
          S'il y a UN noeud qu'on doit connaître, c'est celui-ci, on peut
          pratiquement tout faire avec lui ! Je vous invite à jouer avec la
          tension de la corde, il y a toujours des petits ajustements à faire
          pour perfectionner le bivouac.
        </p>
      </p>
      <div id="noeud3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Nœud du pêcheur</h3>
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
              href={require("./img/nPecheur.jpg")}
              data-caption="Nœud du pêcheur"
            >
              <img
                title="Nœud du pêcheur"
                className={styles.imgArticleLeftTop}
                alt="Nœud du pêcheur"
                src={require("./img/nPecheur.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <p>
          {" "}
          Lui c'est plus une brique de Lego qui servira pour la suite, notamment
          le nœud de Prusik. Il permet{" "}
          <span className={styles.fat}>
            de fusionner deux extrémités de corde entre elles
          </span>
          .
        </p>
        <p>
          Vous noterez qu'il peut aussi vous servir à "rallonger" une corde à
          partir de deux plus petites ! C'est très précieux si votre stock de
          paracorde s'épuise, ou pour éviter d'avoir à emmener des kilos de
          corde avec vous dans le sac à dos !
        </p>
        <p>
          Je vous invite à être généreux·se quant aux dépassements de bouts de
          corde lorsque vous réaliserez de nœud, ça vous facilitera beaucoup la
          manœuvre !
        </p>
      </p>
      <div id="noeud4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Nœud de Prusik</h3>
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
              href={require("./img/nPrusikBIG.jpg")}
              data-caption="Nœud de Prusik"
            >
              <img
                title="Nœud de Prusik"
                className={styles.imgArticleRightTop}
                alt="Nœud de Prusik"
                src={require("./img/nPrusikSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Le noœud de Prusik est assez magique : il{" "}
        <span className={styles.fat}>glisse</span> facilement le long d'une
        corde, mais lorsqu'il est tendu cela le resserre fermement autour la
        corde, le <span className={styles.fat}>bloquant</span>.
      </p>
      <p>
        Il peut être utile par exemple pour y accrocher le tarp à une paracorde
        tendue au-dessus de ce dernier, cela permet en outre de régler la
        tension de l'accroche du tarp.
      </p>
      <div id="noeud5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Nœud coulant</h3>
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
              href={require("./img/nCoulantBIG.jpg")}
              data-caption="Nœud coulant"
            >
              <img
                title="Nœud coulant"
                className={styles.imgArticleLeftTop}
                alt="Nœud coulant"
                src={require("./img/nCoulantSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Plus communément appelé "nœud du pendu", il permet de se{" "}
        <span className={styles.fat}>reserrer</span> autour d'un élément
        lorsqu'il est soumis à une tension.
      </p>
      <p>
        Personnellement, j'ai tendance à utiliser un nœud coulant du côté d'un
        élément auquel de veux accrocher ma paracorde, comme un piquet ou un
        arbre, tandis que l'autre côté de la paracorde se verra attribué un nœu
        tendeur.
      </p>
      <div id="noeud6" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>6) Nœud de boucle en Huit</h3>
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
              href={require("./img/nBoucleBIG.jpg")}
              data-caption="Nœud de boucle en Huit"
            >
              <img
                title="Nœud de boucle en Huit"
                className={styles.imgArticleRightTop}
                alt="Nœud de boucle en Huit"
                src={require("./img/nBoucleSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Même en plein milieu d'une corde, il permet facilement et rapidement de{" "}
        <span className={styles.fat}>créer une boucle</span>.
      </p>
      <p>
        Ce nœud est utilisable par exemple pour accrocher votre hamac à la corde
        attachée à un des deux arbres.
      </p>
      <p>
        Compte tenu de la facilité de ce nœud, je vous invite à ne pas hésiter à
        en faire plusieurs un peu espacés dans une zone pour augmenter les
        possibilités d'accroche possibles.
      </p>
      <p>
        Je vous coneille aussi d'être généreux·se sur la taille de la boucle
        quand vous confectionnez le nœud. Attention cependant : ce nœud grignote
        très vite de la longueur de corde !{" "}
      </p>
    </>
  );
};

export default Noeuds;

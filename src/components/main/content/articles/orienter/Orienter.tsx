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

const Orienter = () => {
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
      <h2 className={styles.h2article}>S'orienter</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#orienter1">Prélude</a>
            </li>
            <li>
              <a href="#orienter2">Matos</a>
            </li>
            <li>
              <a href="#orienter3">Utiliser ue boussole et une carte</a>
            </li>
            <li>
              <a href="#orienter4">L'étoile polaire</a>
            </li>
            <li>
              <a href="#orienter5">Le soleil</a>
            </li>
            <li>
              <a href="#orienter6">La mousse sur les arbres</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Rien de tel qu'on bon bol d'air frais !"
            className={styles.imgArticle}
            src={require("./img/mapIntro.jpg")}
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
                <a href="#orienter1">Prélude</a>
              </li>
              <li>
                <a href="#orienter2">Matos</a>
              </li>
              <li>
                <a href="#orienter3">Utiliser ue boussole et une carte</a>
              </li>
              <li>
                <a href="#orienter4">L'étoile polaire</a>
              </li>
              <li>
                <a href="#orienter5">Le soleil</a>
              </li>
              <li>
                <a href="#orienter6">La mousse sur les arbres</a>
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
      <div id="orienter1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Prélude</h3>
      <div>
        <p>
          Ici on discutera des techniques d'orientation qui ne sont pas
          techno-dépendantes comme les GPS, téléphones ou autres, dont les
          batteries ne tiendraientt jamais le coup sur de longues balades, et
          qui manqueraient de réseau ou saboteraient votre plaisir d'observation
          de la nature.
        </p>
        <p>
          Il existe d'autres méthodes que celles que je vous présenterai (comme
          s'orienter avec la lune, utiliser une montre digitale,...), mais je me
          contenterai de vous présenter les plus accessibles et fonctionnelles.
        </p>
        <p>
          Comment bien souvent, je vous invite vivement à faire quelques tests
          et entraînements chez vous avant de partir à l'aventure !
        </p>
        <p>C'est parti !</p>
        <div id="orienter2" className={styles.linkSommaire}></div>
        <h3 className={styles.h3article}>2) Matos</h3>
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
                href={require("./img/boussoleD4BIG.jpg")}
                data-caption="Une chouette boussole complète : légère, dotée d'une petite fente pour déterminer un élément à l'horizon vers lequel se diriger, et un petit miroir pour vérifier la bonne orientation pendant cette manœuvre"
              >
                <img
                  title="Un chouette boussole !"
                  className={styles.imgArticleRightTop}
                  alt="boussole"
                  src={require("./img/boussoleD4SMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          Pour vous orienter vous n'aurez besoin de presque rien, concrètement
          juste une boussole et une ou des cartes !
        </p>
        <ul>
          <li>
            <p>
              {" "}
              <span className={styles.dot}></span>
              <span className={styles.fat}>La boussole</span> : Les boussoles
              plates en plastique transparent sont top je trouve. Attention aux
              chocs j'en ai fendu une qui est tombée sur un rocher, laissant
              échaper son liquide et la rendant inutilisable !
            </p>
            <p>
              {" "}
              Pour l'avoir testé, je vous recommande le format de boussole avec
              une petite fente pour déterminer un élément à l'horizon vers
              lequel se diriger, et un petit miroir pour vérifier la bonne
              orientation pendant cette manœuvre.
            </p>
            NB : Les boussoles en métal sont peut-être résistantes (ou pas,
            j'imagine bien une fuite après une chute), mais trop lourdes quant à
            leurs équivalents en plastique.
          </li>
          <li>
            <p>
              {" "}
              <span className={styles.dot}></span>
              <span className={styles.fat}>Une carte</span> : Je vous recommande
              les{" "}
              <span className={styles.fat}>
                cartes IGN à l'échelle 1 : 25000
              </span>
              . Celles en papier sont cependant fragiles quant au vent et
              peuvent prendre l'eau, il est alors très souhaitable de les
              plastifier soi-même ou d' utiliser un porte-carte, ce dernier
              étant très efficace mais lourd voire encombrant. Je n'ai pas
              réussi à trouver beaucoup de retours, mais du peu que j'ai lu les
              cartes IGN "Top 25R" (avec R pour "résistantes") sont très bonnes,
              elles sont déjà plastifiées (donc étanches) et résistantes à la
              déchirure, en plus d'avoir un meilleur contraste des couleurs. Par
              contre pour contrebalancer le gain de poids à cause du plastique,
              la surface de la carte est répartie en recto-verso, ce qui rend la
              vision globale d'un trajet plus compliquée.
            </p>
            NB : À vous de voir où tenir la carte ! Certaines personnes la
            gardent autour du cou, d'autres accrochée au sac à dos (par exemple
            derrière le sac et c'est le copain ou la copine de derrière qui lit
            la carte), dans la main, dans la grande poche latérale du pantalon
            (mon choix depuis peu),...
          </li>
        </ul>
      </div>
      <div id="orienter3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Utiliser ue boussole et une carte</h3>
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
              href={require("./img/boussole1.PNG")}
              data-caption="D'abord, orienter le N de la boussole par rapport au méridien"
            >
              <img
                title="Le méridien"
                className={styles.imgArticleLeftTop}
                alt="Méridien"
                src={require("./img/boussole1.PNG")}
              />
            </a>
          </Fancybox>
        </div>
        <ul>
          <li>
            {" "}
            <span className={styles.dot}></span> Déterminez où vous êtes et où
            vous voulez aller.
          </li>
          <li>
            <span className={styles.dot}></span>Créez une ligne imaginaire (ou
            au crayon, soyons fous) entre vos points de départ et de
            destination. Posez votre splendide boussole le long de cette ligne,
            la flèche pointant en direction du point de destination. Tournez le
            cadran de telle sorte que sa partie "N" pointe parallèlement au{" "}
            <span className={styles.fat}>méridien</span>, une grande ligne noire
            un chouille penchée vers la gauche en France.
          </li>
        </ul>
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
              href={require("./img/boussole2.PNG")}
              data-caption="On obtient l'azimut"
            >
              <img
                title="Azimut"
                className={styles.imgArticleLeftTop}
                alt="Azimut"
                src={require("./img/boussole2.PNG")}
              />
            </a>
          </Fancybox>
        </div>
        <ul>
          <li>
            <span className={styles.dot}></span>L'angle formé depuis le "N"
            jusqu'à la flèche rouge en suivant le sens des aiguilles d'une
            montres s'appelle l' <span className={styles.fat}>azimut</span>.
            Dans l'exemple il est de 200°. Il n'est pas requis que vous le
            mémorisiez.
          </li>
        </ul>
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
              href={require("./img/boussole3.png")}
              data-caption="Aligner le N du cadran avec l'aiguille Nord (en rouge classiquement) de la boussole : on obtient le cap à suivre !"
            >
              <img
                title="Cap"
                className={styles.imgArticleLeftTop}
                alt="Cap"
                src={require("./img/boussole3.png")}
              />
            </a>
          </Fancybox>
        </div>
        <ul>
          <li>
            <span className={styles.dot}></span>À présent tenez la boussole face
            à vous, la flèche rouge qui pointe bien devant vous. Tournez avec
            elle jusqu'à ce que l'aiguille Nord (en rouge) coincide bien avec le
            "N" du cadran. La flèche rouge vous indique maintenant la voie à
            suivre !
          </li>
          <li>
            <span className={styles.dot}></span> Si possible, le mieux serait
            que vous identifiez à l'horizon un{" "}
            <span className={styles.fat}>cap</span>, c'est-à-dire quelque chose
            plus ou moins dans votre direction (un arbre, un clocher,...), ainsi
            vous pourrez ranger votre boussole et suivre ce cap. C'est là que
            les boussoles avec une petite fente et un miroir sont top pour cette
            partie !
          </li>
          <li>
            {" "}
            <span className={styles.dot}></span>Pour une orientation plus
            précise, il faudrait calculer la déclinaison magnétique, qui change
            chaque année (quoique très peu en France). Mais ça demande pas mal
            de calculs qu'on ne peut pas vraiment effectuer dans le cadre de la
            randonnée. Personnellement je n'ai jamais eu besoin de le faire.
          </li>
        </ul>
      </p>
      <div id="orienter4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) L'étoile polaire</h3>
      <p>
        Cette méthode et les suivantes ne vous indiqueront pas le chemin ou de
        calculer un azimut, ce sont juste des méthodes pour trouver le Nord (de
        manière plus ou moins approximative !).
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
              href={require("./img/polarisBIG.jpg")}
              data-caption="D'abord trouver les étoiles les plus brillantes, c'est la Grande Ourse, à partir de là comme sur cette image vous pourrez trouver l'Étoile Polaire, qui indique toujours le Nord !"
            >
              <img
                title="Trouver l'Étoile Polaire"
                className={styles.imgArticleRightTop}
                alt="boussole"
                src={require("./img/polarisSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Vous pouvez vous aider des étoiles s'il fait sombre et que vous êtes
        loin des pollutions lumineuses.
      </p>
      <p>
        Les étoiles les plus brillantes que vous verrez dans le ciel forment la
        Grande Ourse, qui a l'apparence d'une casserole. Attention si l'étoile
        bouge c'est un avion ou un satellite ^^'
      </p>
      <p>
        À partir du bord de la casserole qui n'a pas de manche, comptez 5 fois
        la hauteur de la casserole et vous tomberez sur l'Étoile Polaire, qui
        indique toujours le Nord !
      </p>
      <p>
        L'Étoile Polaire est située dans l'axe de rotation de la Terre, côté
        Nord, donc quelle que soit la rotation de la Terre elle indiquera le
        Nord.
      </p>
      <p>
        Cette astuce ce fonctionne que si vous partez à l'aventure dans
        l'hémisphère Nord, en effet dans l'hémisphère Sud vous ne pourrez pas
        voir l'Étoile Polaire, on se guide alors avec la Croix du Sud qui est
        plus difficilement repérable.
      </p>
      <div id="orienter5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Le Soleil</h3>
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
              href={require("./img/soleil.jpg")}
              data-caption="D'abord trouver les étoiles les plus brillantes, c'est la Grande Ourse, à partir de là comme sur cette image vous pourrez trouver l'Étoile Polaire, qui indique toujours le Nord !"
            >
              <img
                title="Trouver l'Étoile Polaire"
                className={styles.imgArticleLeftTop}
                alt="boussole"
                src={require("./img/soleil.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Là on commence à aller vers de la grosse approximation en termes de
        finesse d'orientation !
        <br />
        En tout cas la soleil va d' Est en Ouest, ainsi gardez en tête ce petit
        bonhomme sur l'image qui a la main droite tendue vers le Soleil le
        matin, son dos face au Soleil le midi, et la main gauche tendue vers le
        Soleil le soir. Ainsi il regarde toujours vers le Nord.
      </p>
      <p>
        Si vraiment vous voulez faire le job à l'arrache en plein jour, dites
        vous que très grossièrement votre ombre indique le nord !
      </p>
      <div id="orienter6" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>6) La mousse sur les arbres</h3>
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
              href={require("./img/treeBIG.jpg")}
              data-caption="La mousse sur les arbres indique le Nord. Plus ou moins. Voire souvent pas du tout ^^"
            >
              <img
                title="La mousse sur les arbres indique le Nord"
                className={styles.imgArticleRightTop}
                alt="La mousse sur les arbres indique le Nord"
                src={require("./img/treeSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Alors là on est presque plus sur de l'aléatoire que de la fiabilité ! 😅
      </p>
      <p>
        La mousse aime la fraîcheur et l'obscurité. Or le Soleil illumine
        surtout le côté Sud des arbres (dans notre hémisphère Nord bien sûr).
        Donc la mousse vous indique le Nord car elle est surtout présente sur le
        côté Nord des arbres.
      </p>
      <p>
        Ça, c'est en théorie. Il suffit en fait que la forêt soit naturellement
        humide, qu'elle ait des zones d'ombres ou des courants d'air humides
        localisés pour que la mousse puisse pousser de manière totalement
        indépendante du Nord !{" "}
      </p>
      <p>
        Ainsi, gardez l'astuce de la mousse en plan Z si vous n'avez rien
        d'autre sous la main pour vous orienter !
      </p>
    </>
  );
};

export default Orienter;

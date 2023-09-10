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

const HamacVsTent = () => {
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
        Hamac vs Tente <br />
        ⚡️ Le duel ultime ⚡️
      </h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#TvsH1">Prélude</a>
            </li>
            <li>
              <a href="#TvsH2">Avantages du hamac</a>
            </li>

            <li>
              <a href="#TvsH3">Inconvénients du hamac</a>
            </li>
            <li>
              <a href="#TvsH4">Avantages de la tente</a>
            </li>

            <li>
              <a href="#TvsH5">Inconvénients de la tente</a>
            </li>
            <li>
              <a href="#TvsH6">Verdict !</a>
            </li>
          </ol>
        </div>

        <div className={styles.sommaireSide}>
          <img
            title="Pokemon Edition Bivouac"
            className={styles.imgArticle}
            src={require("./img/tenteVsHamac.jpg")}
            alt="Pokemon version Bivouac"
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
                <a href="#TvsH1">Prélude</a>
              </li>
              <li>
                <a href="#TvsH2">Avantages du hamac</a>
              </li>

              <li>
                <a href="#TvsH3">Inconvénients du hamac</a>
              </li>
              <li>
                <a href="#TvsH4">Avantages de la tente</a>
              </li>

              <li>
                <a href="#TvsH5">Inconvénients de la tente</a>
              </li>
              <li>
                <a href="#TvsH6">Verdict !</a>
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
      <div id="TvsH1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        1) Par tous les dieux, ce duel va être épique !
      </h3>
      <div>
        <p>
          Avec une voix de commentateur sportif enflammé, on va comparer les
          avantages et inconvénients des tentes et des hamac, afin de déterminer
          quel sera le vainqueur qui marquera nos mémoires pour l'éternité ! 🏆
          🥇
        </p>
        <p>
          En vrai il y aura des redites par rapport aux articles concernant les
          hamacs et les tentes, mais l'idée est de synthétiser et comparer ici.
        </p>
        <p>
          On rappellera tout de même au passage que la tente et le hamac ne sont
          pas les seuls manières de bivouaquer, par exemple certaines personnes
          se contenteront d'un sac de couchage protégé par un tarp dans une
          perspective minimaliste.
        </p>
      </div>{" "}
      <div id="TvsH2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Avantages du hamac</h3>
      <div>
        <p>
          <ul>
            <li>
              {" "}
              <div className={styles.imgArticleContainer}>
                {" "}
                <img
                  className={styles.imgArticleLeftTop}
                  id="noBrightness"
                  src={require("./img/racoon.webp")}
                  alt="Les dangers du hamac ! Ou pas !"
                />
              </div>
              <span className={styles.dot}></span>
              <span className={styles.fat}>Le confort</span> : Grâce à sa
              capacité à épouser la forme de notre corps, le hamac c'est
              sacrément confortable !
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>Installation presque partout</span> :
              Tant qu'il y a des arbres (ou autres structures solides de
              substitution ), on peut installer un hamac ! Alors qu'une tente
              requiert un sol impeccable !
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>Pas de condensation</span> : Grâce à
              son très bon passage d'air sous le tarp et autour du hamac
              lui-même, vous êtes à l'abris de la condensation !
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Plus résililent qu'une tente face à la pluie
              </span>{" "}
              : En effet si une grosse pluie traverse un peu le tarp ou coule à
              travers les coutures, les goutelettes seront repoussées vers
              l'extérieur du bivouac en glissant sous le tarp.
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Le hamac a tendance à prendre moins de place et de poids qu'une
                tente, et peut coûter moins cher
              </span>{" "}
              : C'est bien sûr à prendre avec des pincettes car des tentes
              fragiles et très bas de gamme qui ne coûteront presque rien
              existent, mais à qualité équivalente ce point reste vrai.
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>Respect de la nature</span> : Un
              hamac peut ne laisser aucune trace, surtout avec des sangles
              larges qui protègent l'écorce des arbres, tandis qu'une tente
              écrase le sol, voire requiert de déplacer des pierres ou de
              creuser un peu le sol.
            </li>{" "}
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Protection contre les petites bêbêtes
              </span>{" "}
              : La position surélevée du hamac lui permet de vous protéger des
              petits animaux poilus ou non qui voudraient grignoter votre
              bivouac pour accéder à l'intérieur. D'ailleurs aucune attaque de
              loup-garou n'a été reportée par des personnes bivouaquant en hamac
              !
            </li>
          </ul>
        </p>
      </div>
      <div id="TvsH3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Inconvénients du hamac</h3>
      <div>
        <p>
          <ul>
            <li>
              {" "}
              <div className={styles.imgArticleContainer}>
                {" "}
                <img
                  title="Ce genre de hamac ne devrait pas exister !"
                  className={styles.imgArticleRightTop}
                  id="noBrightness"
                  src={require("./img/hammockFall.gif")}
                  alt="Les dangers du hamac ! Ou pas !"
                />
              </div>
              <span className={styles.dot}></span>
              <span className={styles.fatRed}>Idées reçues</span> : Beaucoup de
              personnes craignent le hamac à cause des risques de chute (alors
              qu'ils sont inexistants avec un bivouac bien géré), notamment à
              cause de ces improbables hamacs en filet tendus par des barres.
            </li>
            <li>
              {" "}
              <span className={styles.dot}></span>
              <span className={styles.fatRed}>
                Quasi-impossible de dormir à deux
              </span>{" "}
              : Les personnes dormant dans un hamac suivent les lois de la
              gravité et convergeront vers le milieu du hamac, s'écrasant l'une
              l'autre. Passer du temps à deux en hamac c'est possible, mais pour
              dormir ensemble c'est une autre histoire.
            </li>
            <li>
              <span className={styles.fatRed}>
                <span className={styles.dot}></span>Requiert un peu plus de
                connaissances techniques que la tente
              </span>{" "}
              : surtout en ce qui concerne les noeuds, et le réglage parfois
              subtil des composants du hamac.
            </li>
            <li>
              <span className={styles.fatRed}>
                {" "}
                <span className={styles.dot}></span>Quasi-impossible de changer
                de vêtement dans un hamac
              </span>{" "}
              : alors que dans une tente ça reste plutôt facile.
            </li>
            <li>
              <span className={styles.fatRed}>
                <span className={styles.dot}></span>Pas possible de dormir sur
                le ventre
              </span>{" "}
              : alors que dans une tente c'est facile !
            </li>{" "}
            <li>
              <span className={styles.fatRed}>
                <span className={styles.dot}></span>Moins discrect que la tente
              </span>{" "}
              : En effet, surtout à cause de la hauteur du tarp, un hamac est
              plus visible qu'une tente. Et les tarps camo réflechissent tous un
              peu la lumière (comme si le tarp devenait blanc), ils ne
              permetteront donc pas de rendre le bivouac en hamac invisible !
            </li>
          </ul>
        </p>
      </div>
      <div id="TvsH4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Avantages de la tente</h3>
      <div>
        <p>
          <ul>
            <li>
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
                    href={require("./img/tentInTheWildBIG.jpg")}
                    data-caption="Bivouaquer en tente, c'est comme avoir sa petite maison dans la nature ! (Source : <a href='https://unsplash.com/fr/photos/XJXxeU5y1gk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink' target='_blank'>Unsplash </a>)"
                  >
                    <img
                      title="Bivouaquer en tente, c'est comme avoir sa petite maison dans la nature ! "
                      className={styles.imgArticleLeftTop}
                      alt=""
                      src={require("./img/tentInTheWildSMALL.jpg")}
                    />
                  </a>
                </Fancybox>
              </div>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Sentiment d'être abrité·e dans sa petite maison
              </span>{" "}
              : Et une petite maison transportable en plus !
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Installation possible quand il n'y a pas d'arbres
              </span>{" "}
              : En haute montagne par exemple, ou sur des territoires lunaires
              comme l'Islande.
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>Dormir à plusieurs</span> : Il est
              très facile de trouver des modèles de tentes qui permettent de
              dormir à plusieurs, ce qui amène au point suivant...
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Variété des modèles disponibles
              </span>{" "}
              : Il y a de tout en tentes : des grandes, des petites, des
              résistantes au vent, des ventilées, des chaudes, des rapides à
              monter...
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>
                Peut être plus discret qu'un hamac
              </span>{" "}
              : En raison de sa faible hauteur, surtout en ce qui concerne les
              tente-sarcophages qui peuvent vous rendre invisible rien que dans
              des hautes herbes !
            </li>
            <li>
              <span className={styles.dot}></span>
              <span className={styles.fat}>Organisation dans la tente</span> :
              Dans une tente il est facile d'étaler, ranger son matos, de se
              changer ou autre.
            </li>{" "}
          </ul>
        </p>
      </div>{" "}
      <div id="TvsH5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Inconvénients de la tente</h3>
      <div>
        <p>
          <ul>
            <li>
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
                    href={require("./img/BearTentBIG.jpg")}
                    data-caption=""
                  >
                    <img
                      title="Juste un bivouac normal en Russie"
                      className={styles.imgArticleRightTop}
                      alt="Ours dans une tente"
                      src={require("./img/BearTentSMALL.jpg")}
                    />
                  </a>
                </Fancybox>
              </div>
              <span className={styles.dot}></span>
              <span className={styles.fatRed}>Propice à la condensation</span> :
              Les contrastes thermiques, la vapeur de la cuisine, l'humidité de
              votre respiration,... les tentes ventilent mal, alors elle
              accumulent l'humidité. Pas la peine d'essayer de faire sécher vos
              vêtements dans une tente !
            </li>
            <li>
              {" "}
              <span className={styles.dot}></span>
              <span className={styles.fatRed}>
                Difficulté à trouver un terrain bien plat
              </span>{" "}
              : entre les branches, les pierres, les plantes,... Trouver un
              terrain tout plat pour la tente est souvent curieusment difficile.
            </li>
            <li>
              <span className={styles.fatRed}>
                <span className={styles.dot}></span>Matelas gonflable
              </span>{" "}
              : Pour qu'une tente soit confortable, il vous faut un matelas
              gonflable, le problème majeur de ces derniers est qu'ils ont
              toujours un risque élevé de crever pendant vore bivouac, mettant
              en péril votre confort la nuit voire votre aventure entière.
            </li>
            <li>
              <span className={styles.fatRed}>
                {" "}
                <span className={styles.dot}></span>Accessible aux animaux
              </span>{" "}
              : je me souviens l'anecdote d'un randonneur qui racontait que
              lorsqu'il s'est réveillé le matin et qu'il est sorti de sa tente,
              il a découvert que cette dernière a été abondamment rongée,
              sûrement par un renard : pensez TOUJOURS à cacher les odeurs de
              votre nourriture, par exemple dans un sac étanche !
            </li>
            <li>
              <span className={styles.fatRed}>
                <span className={styles.dot}></span>Les risques de l'emplacement
                de la tente
              </span>{" "}
              : il suffit qu'il y ait une légère concavité au sol, même dans une
              belle prairie qui semble toute plate, pour qu'en cas de pluie
              votre tente soit parfaitement noyée. Idem pour le risque de montée
              de niveau des points d'eau comme les ruisseaux en cas de pluie !
            </li>{" "}
            <li>
              <span className={styles.fatRed}>
                <span className={styles.dot}></span>Dégrade la nature
              </span>{" "}
              : Au minimum, une tente écrase le sol. Voire pire pour se préparer
              un emplacement on peut vouloir déplacer des cailloux, des plantes,
              des branchages, dégradant chaque fois un peu plus les petits
              écosystèmes.
            </li>
          </ul>
        </p>
      </div>
      <div id="TvsH6" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>6) Verdict !</h3>
      <p>
        Et bieeeeen... ça dépend de ce que vous cherchez et{" "}
        <span className={styles.fat}>quelles sont vos priorités</span> !
      </p>
      <p>
        Ce qui est sûr, c'est que{" "}
        <span className={styles.fat}>
          si vous voulez bivouaquer en montagne ou en couple l'un·e à côté de
          l'autre, la tente semble être le choix évident
        </span>{" "}
        !
      </p>
      <p>
        <span className={styles.fat}>
          Si vous êtes plutôt baroudeuse ou baroudeur solo et n'envisagez pas de
          faire de haute montagne, le hamac semble être un meilleur choix
        </span>
        . Sa résilience et son confort en font un allié splendide pour partir à
        l'aventure !
      </p>
      <p>
        Personnellement, j'ai jeté mon dévolu sur le hamac, ayant appris à bien
        le gérer j'y dors sincèrement mieux que dans mon lit ! ❤️ Et le jour où
        je souhaiterai explorer des montagnes, je m'offirai une tente solide et
        durable, ainsi qu'un tapis de sol épais et isolant increvable.
      </p>
    </>
  );
};

export default HamacVsTent;

//           On rappellera aussi que la tente et le hamac ne sont pas les seules
//           manières de bivouaquer, certaines personnes préféreront dormir à même
//           de sol avec un sac de couchage et une bâche dans une optique
//           minimaliste par exemple.
//         </p>
//         <div className={Style.doubleArray}>
//           <div className={Style.flex1}>
//             <h6>
//               <strong>Tente</strong>
//             </h6>
//             <p className={Style.lesPlus}>Les +</p>
//             <ul>
//               <li>Sentiment d'être abrité(e) dans sa petite maison</li>
//               <li>
//                 Parfait pour les terrains dépourvus d'arbres (en montagne par
//                 exemple)
//               </li>
//               <li>
//                 Il est très facile de trouver des modèles de tentes dans
//                 lesquelles dormir à plusieurs
//               </li>
//               <li>
//                 Hauteur moindre qu'un hamac, donc potentiellement plus discret
//               </li>
//               <li>
//                 Il est assez facile de se changer ou d'étaler son matériel dans
//                 une tente
//               </li>
//             </ul>
//             <p className={Style.lesMoins}>Les -</p>
//             <ul>
//               <li>
//                 Prédispose à la condensation à cause du manque de passage d’air
//               </li>
//               <li>
//                 Difficile de trouver un terrain plat et pas trop chaotique
//               </li>
//               <li>
//                 Quasi impossible de faire sécher des vêtements sous la tente
//               </li>
//               <li>
//                 Pour que ce soit vraiment confortable, il faut un matelas
//                 gonfable, qui a toujours un risque de se déglonfler
//               </li>
//               <li>
//                 Accessible aux animaux (renards qui grattent s'ils sentent la
//                 nourriture)
//               </li>
//               <li>
//                 Une tente dans une lègère concavité peut être noyée s'il pleut,
//                 une tente placée trop proche de l'eau aussi si l'eau monte
//                 (pluie ou marrée)
//               </li>
//               <li>Ecrase le sol en-dessous</li>
//             </ul>
//           </div>

//           <div className={Style.versus}>
//             <p>Versus</p>
//           </div>

//           <div className={Style.flex1}>
//             <h6>
//               <strong>Hamac</strong>
//             </h6>

//             <p className={Style.lesPlus}>Les +</p>
//             <ul>
//               <li>
//                 Confortable voire très confortable (on peut dormir sur le côté
//                 si le hamac est assez grand)
//               </li>
//               <li>
//                 Installable partout, même en pente, tant qu'il y a des arbres
//               </li>
//               <li>Pas de condensation grâce au très bon passage d'air</li>
//               <li>
//                 Plus résilient qu'une tente qui a des risques de fuites d'eau de
//                 pluie internes à travers les coutures
//               </li>
//               <li>
//                 A tendance à coûter moins cher qu'une tente et peut prendre un
//                 peu moins de place
//               </li>
//               <li>
//                 Ne laisse pas de trace ni au sol ni à l'arbre si bien utilisé
//               </li>
//             </ul>
//             <p className={Style.lesMoins}>Les -</p>
//             <ul>
//               <li>
//                 Le poids total du hamac et de ses accessoires (underblanket par
//                 exemple) peut être un peu plus élevé qu'une tente
//               </li>
//               <li>Impossible de dormir confortablement à deux</li>
//               <li>Plus technique à installer et maîtriser qu'une tente</li>
//               <li>
//                 Idées reçues sur les risques de chute véhiculées à cause des
//                 hamacs de jardin à barres transversales. Ces hamamcs ne sont pas
//                 vraiment confortables en plus, je ne sais même pas pourquoi ils
//                 existent 🤣
//               </li>
//               <li>Très difficile de se changer dans le hamac</li>
//             </ul>
//           </div>
//         </div>
//         <h5>Alors, qui gagne ce duel épique ?</h5>
// <p>
//   Et bieeeeen... ça dépend de ce que vous cherchez et{" "}
//   <span className={Style.fat}>quelles sont vos priorités</span> !
// </p>
// <p>
//   Ce qui est sûr, c'est que{" "}
//   <span className={Style.fat}>
//     si vous voulez bivouaquer en montagne ou en couple l'un(e) à côté de
//     l'autre, la tente semble être le choix évident
//   </span>{" "}
//   !
// </p>
// <p>
//   <span className={Style.fat}>
//     Si vous êtes plutôt baroudeuse ou baroudeur solo et n'envisagez pas
//     de faire de haute montagne, le hamac semble être un meilleur choix
//   </span>
//   . Sa résilience et son confort en font un allié splendide pour partir
//   à l'aventure !
// </p>
{
  /* <p>
  Personnellement, j'ai jeté mon dévolu sur le hamac, ayant appris à bien le
  gérer j'y dors sincèrement mieux que dans mon lit ! ❤️ Et le jour où je
  souhaiterai explorer des montagnes, je m'offirai une tente solide et durable.
</p>; */
}
//         <p className={Style.italicBig}>
//           Tadaaaa ! J'espère que cette petite analyse vous aura donné un petit
//           coup de pouce dans votre choix de maison transportable !
//         </p>
//       </div>
//     );
//   }
// }

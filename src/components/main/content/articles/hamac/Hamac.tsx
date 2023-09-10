import React, { useState, useEffect, useRef } from "react";
import styles from "../Articles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Fancybox from "../../../../../Fancybox";

function Arrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "50px",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <Arrow className={undefined} style={undefined} onClick={undefined} />
  ),
  prevArrow: (
    <Arrow className={undefined} style={undefined} onClick={undefined} />
  ),
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       arrow: false,
  //     },
  //   },
  // ],
};

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

// ////////////

//////////////////////

const Hamac: React.FC = () => {
  useEffect(() => {}, []);

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
      <h2 className={styles.h2article}>Hamac</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#hamac1">Pourquoi le hamac c'est trop bien ?</a>
            </li>
            <li>
              <a href="#hamac2">Limites du hamac</a>
            </li>
            <li>
              <a href="#hamac3">Quel matos pour un hamac ?</a>
            </li>
            <li>
              <a href="#hamac4">Installation d'un hamac en bivouac</a>
            </li>
            <li>
              <a href="#hamac5">Bien utiliser son hamac</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="L'effet hamac"
            className={styles.imgArticle}
            src={require("./img/hammockCat.gif")}
            alt="Un chat heureux dans un hamac"
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
                <a href="#hamac1">Pourquoi le hamac c'est trop bien ?</a>
              </li>
              <li>
                <a href="#hamac2">Limites du hamac</a>
              </li>
              <li>
                <a href="#hamac3">Quel matos pour un hamac ?</a>
              </li>
              <li>
                <a href="#hamac4">Installation d'un hamac en bivouac</a>
              </li>
              <li>
                <a href="#hamac5">Bien utiliser son hamac</a>
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
      <div id="hamac1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        1) Pourquoi le hamac c'est trop bien ?
      </h3>
      <p>
        Plusieurs bonnes raisons démontrent que le hamac est un superbe outil
        pour le bivouac :{" "}
      </p>
      <ul>
        <li>
          <p>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>La qualité du sommeil
            </span>{" "}
            : Bien préparé, un hamac est vraiment très confortable, car son
            tissu épouse les formes de notre corps, contrairement à un sol dur
            ou un lit bon marché. La légende voudrait que dormir dans un hamac
            soit mauvais pour notre colonne vertébrale, mais c'est faux. <br />{" "}
            D'ailleurs les personnes en hamac auraient moins de maux de dos que
            celles dormant en lit ! Je n'arrive pas à trouver la source /
            l'étude scientifique qui le démontre, mais cet article en fait
            mention (à traduire en français) :{" "}
            <a
              href="https://mais.opovo.com.br/jornal/cienciaesaude/2017/08/pesquisa-indica-que-quem-dorme-de-rede-tem-menos-dores-nas-costas.html"
              title="Lien vers l'article"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Les hamac sont-ils mauvais pour notre dos ?"
            </a>
            .<br />
            Si le hamac est exposé au vent, son mouvement de balancier
            augmenterait aussi la qualité du sommei. C'est cependanbt un
            argument à moitié recevable, car quand on accroche un hamac à des
            arbres, c'est qu'on est souvent entouré de forêt qui stoppe en
            grande partie le vent.
          </p>
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>La facilité d'installation
          </span>{" "}
          : Surtout quand il est utilisé avec peu de matos, il est simple et
          rapide d'installer son hamac. Il est posable n'importe où tant qu'il y
          a des arbres, même en pente ou au-dessus d'un terrain chaotique.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>La ventilation
          </span>{" "}
          : L'air passe bien dans un bivouac en hamac, on peut par exemple
          utiliser l'espace sous le tarp pour y faire sécher du linge. Pas de
          condensation sous le tarp avec un hamac, on est toujours au sec !
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Respect de la nature
          </span>{" "}
          : Un hamac n'écrase pas le sol contrairement à une tente, il permet de
          ne laisser aucune trace de notre passage, surtout avec des sangles
          larges qui protègent aussi l'écorce de l'arbre. 🌳
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Protection contre les bêêêtes
          </span>{" "}
          : Les petits animaux ne peuvent atteindre ni ronger votre hamac en
          hauteur. C'est toujours rassurant !
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Hautement customisable
          </span>{" "}
          : il existe tellement de moyens de jouer avec le tarp, le cordage ou
          le matos d'isolation pour faire ce qu'on veut en bivouaquant avec un
          hamac !
        </li>
      </ul>
      <div id="hamac2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Limites du hamac</h3>
      <ul>
        {" "}
        <li>
          {" "}
          <div className={styles.imgArticleContainer}>
            {" "}
            <img
              className={styles.imgArticleLeftTop}
              id="noBrightness"
              src={require("./img/simpsonHammock.gif")}
              alt="Les dangers du hamac ! Ou pas !"
            />
          </div>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Idées reçues sur le hamac
          </span>{" "}
          : Beaucoup de personnes ont peur des chutes, alors qu'elles sont
          inexistantes avec un hamac bien géré. Cette crainte est sûrement
          générée par les hamacs "recangulaires" tendus typiquement par deux
          barres, je ne sais même pas pourquoi ça existe, ils sont
          inconfortables et on tombe facilement avec eux. Il existe aussi la
          peur du mal de dos, mais comme décrit plus haut,au contraire le dos se
          porte très bien en hamac voiremieux que dans un lit.
        </li>
        <li>
          {" "}
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>On ne peut dormir qu'en solo
          </span>{" "}
          : Même si certains hamacs sont vendus comme compatibles pour 2
          personnes ou plus, c'est horrible de dormir à plusieurs en hamac, j'ai
          déjà essayé, et sans surprise les personnes dans le hamac suivent la
          gravité et convergent toutes les deux vers le milieu du hamac,
          s'écrasant mutuellement l'une contre l'autre. Les moments intimes sont
          cependant tout à fait possibles soit dit en passant. Si plusieurs
          personnes veulent bivouaquer en hamac ensemble, le mieux est que
          chacune d'elle pose son hamac proche de l'autre.
        </li>
        <li>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Il est vraiment souhaitable de
            maîtriser quelques noeuds
          </span>{" "}
          : Surtout en ce qui concerne l'installation du tarp. C'est facile mais
          ça requiert un peu d'apprentissage et d'entraînement.
        </li>
        <li>
          <span className={styles.fatRed}>
            {" "}
            <span className={styles.dot}></span>Quasi-impossible de changer de
            vêtement dans un hamac
          </span>{" "}
          : D'où l'intérêt d'avoir un tapis de sol, même si c'est optionnel.
        </li>
        <li>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Pas possible de dormir sur le
            ventre
          </span>{" "}
          : Promis ce n'est pas possible, j'ai tout essayé. On y dort
          généralement sur le dos, ou alors sur le côté assez facilement.
        </li>{" "}
        <li>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Moins discrect que d'autres
            bivouacs
          </span>{" "}
          : En effet, surtout à cause de la hauteur du tarp, un hamac est plus
          visible que d'autres formes de bivouac, ce qui est à prendre en
          considération si vous voulez restez discret·ète.
        </li>
      </ul>
      <div id="hamac3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Quel matos pour un hamac ?</h3>
      <p>
        Plusieurs ingrédients sont nécessaires à l'installation d'un hamac en
        bivouac, d'autres sont optionnels.
      </p>
      <p>
        <ul>
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
                href={require("./img/proHammockBIG.jpg")}
                data-caption="un hamac avec moustiquaire integrée"
              >
                <img
                  title="un hamac avec moustiquaire integrée"
                  className={styles.imgArticleRightTop}
                  alt="un hamac avec moustiquaire integrée"
                  src={require("./img/proHammockSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          <li>
            <span className={styles.fat}>
              <span className={styles.dot}></span>Le hamac lui-même
            </span>{" "}
            : Qui l'eût cru ? Plus sérieusement, je vous invite à vous orienter
            vers des hamacs assez longs surtout si vous êtes une personne de
            plutot grande taille. Les hamacs avec moustiquaire intégrée c'est le
            top du top de ce que j'ai pu tester (le matos réuni est alors moins
            lourd, moins volumineux, plus facile et rapide à monter, moins cher
            qu'acheter un hamac et une moustiquaire à installer autour, et pour
            finir s'il fait chaud l'absence de moustiquaire sous vos fesses
            permettra de faire passer l'air frais !).
          </li>
          <li>
            <span className={styles.fat}>
              <span className={styles.dot}></span>Du cordage ou des sangles pour
              attacher le hamac{" "}
            </span>
            : Je vous invite à vous orienter plutôt vers les sangles, plus
            promptes à préserver l'arbre sur lequel vous les accrocherez grâce à
            leur largeur.
          </li>
          <li>
            <span className={styles.fat}>
              <span className={styles.dot}></span>Une moustiquaire si votre
              hamac n'est en pas déjà équipé
            </span>{" "}
            : C'est techniquement optionnel, mais se protéger des insectes et en
            partie du vent (la moustiquaire stoppant un peu le vent), ça compte
            beaucoup pour le confort dans votre hamac.
          </li>
          <li>
            <span className={styles.fat}>
              <span className={styles.dot}></span>Un tarp / une bâche
            </span>{" "}
            : Ces deux termes désignent la même chose, le premier est anglais
            mais communément utilisé dans le milieu du bivouac. Je vous invite à
            éviter vivement les moins chers qui se déformeront ou céderont dès
            les premières pluies (c'est du vécu). Les plus chers ne sont pas
            forcément les meilleurs (je pense notamment à Fjällraven qui produit
            d'excellents vêtements, mais le tarp qu'ils ont conçu coûte très
            cher, est mal conçu et fuite de partout quand il pleut).
            <br />
            Un tarp de 3m x 3m fait le job, prendre plus gros -comme souvent-
            coûterait plus cher, pèserait plus lourd et ne serait pas
            nécessaire. Après ça dépend de la configuration de bivouac que vous
            voulez !
          </li>{" "}
          <li>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>Plein de cordage
            </span>{" "}
            : Un petit paquet de 15m de paracorde fera le job, mais ça part vite
            ! Le cordage est nécessaire surtout pour l'installation du tarp.
          </li>{" "}
          <li>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>De quoi couper le cordage
            </span>{" "}
            : Pour couper le cordage vous n'allez pas le mordre en grognant et
            en secouant la tête ! Un couteau suisse, un couteau de cuisine, une
            paire de ciseaux, un couteau de bushcraft,... tant que le cordage
            est coupé vous avez gagné !
          </li>{" "}
          <li>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>Des mousquetons
            </span>{" "}
            : Optionnels, ils sont quand même bien pratiques pour un hamac, par
            exemple pour accrocher une lampe frontale à un cordage au-dessus de
            notre tête dans le hamac. Il en faut des légers (en résine ou
            polymères), évitez de prendre du métal inutilement lourd, on n'a pas
            besoin de mousqueton de pompier qui descend en rappel !
          </li>{" "}
          <li>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>Un sac de couchage
            </span>{" "}
            : Même en été il sert, surtout en fin de nuit !
          </li>
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
                  href={require("./img/underblanketBIG.jpg")}
                  data-caption="Un underblanket, c'est la chose bleutée sur cette photo"
                >
                  <img
                    title="Un underblanket, c'est la chose bleutée sur cette photo"
                    className={styles.imgArticleLeftTop}
                    alt=""
                    src={require("./img/underblanketSMALL.jpg")}
                  />
                </a>
              </Fancybox>
            </div>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>Un underblanket / underquilt
            </span>{" "}
            : Difficile à traduire en français, ce matériel désigne une sorte de
            couverture qui vient se placer sous le hamac, surtout pour éviter le
            syndrome des fesses froides.
            <br />
            Si vous avez lu mon{" "}
            <NavLink
              className={styles.liNav}
              to="/temperature"
              target="_blank"
              rel="noopener noreferrer"
            >
              article qui concerce la températue
            </NavLink>
            , alors vous comprenez que notre popotin en hamac écrase le sac de
            couchage, annulant son pouvoir isolant localement. L'underblanket
            est là pour contrer ça et offrir de l'isolation que notre glorieux
            postérieur n'écrasera pas. <br />
            D'ailleurs quand vous installez l'underblanket, ne le tendez pas à
            fond, il faut justement qu'il y ait un peu de jeu pour qu'il reste
            épais et isole bien. La difficulté est de bien doser pour que le
            vent ne passe pas non plus entre le hamac l'underblanket, autrement
            ce dernier ne sert plus à rien.
          </li>
          <li>
            <span className={styles.fat}>
              {" "}
              <span className={styles.dot}></span>Un tapis de sol
            </span>{" "}
            : Complètement optionnel, mais tellement confortable pour se changer
            ou poser ses affaires sans se recouvrir de chataîgnes et de feuilles
            mortes ! Pas la peine de prendre des sortes de couvertures de survie
            même prétenduement résistantes, elles sont très fragiles et inutiles
            au sol sous un hamac. Si vous prenez un tapis moelleux et respirant
            (un peu comme ceux pour la gym), vous pourrez l'utiliser dans le
            hamac, je n'ai cependant jamais testé cela et ne sais pas ce que ça
            vaut, je pense que cela annulerait la capacité du hamac à épouser
            les formes de notre corps, perdant ainsi en confort. Par contre
            apparament un tapis de gym placé dans le sens de la largeur du hamac
            permettrait de transformer ce dernier en fauteuil confortable !
          </li>
        </ul>

        <h4 className={styles.h4Red}>Matos à éviter</h4>
        <ul>
          <li>
            <span className={styles.fatRed}>
              {" "}
              <span className={styles.dot}></span>Une couverture de survie pour
              se chauffer le dessous du corps
            </span>{" "}
            : Le problème est que les couvertures de survie ne sont pas du tout
            respirantes, donc très vite vous allez transpirer, accumulant une
            horrible petite flaque de sueur par dessus votre couverture de
            survie, générant de la conduction thermique et donc vous
            refroidissant.
          </li>
          <li>
            <span className={styles.fatRed}>
              {" "}
              <span className={styles.dot}></span>Un coussin
            </span>{" "}
            : Franchement dans le cadre d'un bivouac un coussin est une grande
            perte de place et de poids, en effet votre tête est déjà soutenue en
            hauteur par la pente du hamac qui remonte doucement.
          </li>
        </ul>
      </p>

      <div id="hamac4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        4) Installation d'un hamac en bivouac
      </h3>

      <p>
        Je vous ai écris pas mal d'infos, je vous propose maintenant d'illustrer
        tout ça par l'installation d'un bivouac en photos, en l'occurence avec
        ma façon de procéder. On notera qu'il y a plein de façons d'installer
        son hamac, en fonction de vos préférences ou des situations !
      </p>

      {/* ////////////////////// */}
      {/* ////////////////////// */}
      {/* ////////////////////// */}
      {/* ////////////////////// */}
      <div className={styles.carouselGris}>
        <div className={styles.carouselGros}>
          <Slider {...settings}>
            <div>
              <img
                // title="Rien de tel qu'un bon bivouac !"
                alt="étape 1"
                src={require("./img/step01BIG.jpg")}
              />
              <p className={styles.pSlider}>
                1. Je choisis un endroit incluant deux arbres vivants et assez
                spatieux pour le tarp. Je compte 5 grands pas entre les deux
                arbres ce qui est idéal pour mon hamac.{" "}
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step02BIG.jpg")} />
              <p className={styles.pSlider}>
                2. Tout à fait optionnel, ce tapis me sera bien pratique pour
                poser mon matos pendant l'installation du bivouac. Il me servira
                plus tard à me changer facilement par exemple. Ici c'est un
                tapis de sol d'occasion pour sac de couchage de l'armée
                allemande.
              </p>
            </div>
            <div>
              {" "}
              <img alt="" src={require("./img/step03BIG.jpg")} />
              <p className={styles.pSlider}>
                3. J'accroche les sangles aux arbres. Ici j'utilise des
                "Moonstraps" de Ticket To The Moon
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step04BIG.jpg")} />
              <p className={styles.pSlider}>
                4. J'accroche mon hamac avec moustiquaire intégrée (Hammock pro,
                Ticket To The Moon) à une des sangles. Je tiens l'autre
                extremité.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step05BIG.jpg")} />
              <p className={styles.pSlider}>
                5. Je tire le hamac de son sac de transport qui ressemble à une
                banane mutante radioactive. C'est un système tellement simple,
                rapide et efficace !
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step06BIG.jpg")} />
              <p className={styles.pSlider}>
                6. J'accroche le hamac à sa deuxième sangle. Ça ressemble déjà à
                quelque chose ! Je vérifie qu'il est à peu près à 40cm au-dessus
                du sol.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step07BIG.jpg")} />
              <p className={styles.pSlider}>
                7. Je contrôle l'inclinaison des sangles. La méthode est super
                simple : imitez un revolver du Far West avec vos doigts,
                l'inclinaison idéale doit visuellement toucher votre pouce et
                votre index. Un hamac trop tendu est très inconfortable (épaules
                écrasées selon mon vécu), un hamac trop lâche pliera trop votre
                dos. Ça vaut donc le coup de corriger plusieurs fois s'il le
                faut !
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step08BIG.jpg")} />
              <p className={styles.pSlider}>
                8. Je dispose mes cordages enroulés autour de bâtonnets, mes
                mousquetons, mes piquets et des bouts de cordage sur mon tapis.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step09BIG.jpg")} />
              <p className={styles.pSlider}>
                9. Je commence à attacher mon underquilt, j'utilise des
                mousquetons de manière optionnelle pour les parties proches du
                milieu de l'underquilt. (mon underquilt : Snugpak Underquilt)
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step10BIG.jpg")} />
              <p className={styles.pSlider}>
                10. Je fais en sorte que l'underquilt ne soit que peu tiré par
                ses élastiques : il faut qu'il soit assez lâche pour ne pas se
                faire ratatiner par mon poids quand je grimperai dans le hamac,
                mais assez proche du hamac pour que le vent ne passe que peu
                voire pas.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step11BIG.jpg")} />
              <p className={styles.pSlider}>
                11. Je lasse les longs élastiques de l'underquilt comme des
                lacets de chaussures, en profitant de ma sangle pleines de
                boucles pour les y attacher.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step12BIG.jpg")} />
              <p className={styles.pSlider}>
                12. L'underquilt est bien installé, juste assez relâché et tendu
                comme il faut !
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step13BIG.jpg")} />
              <p className={styles.pSlider}>
                13. Je vérifie que la hauteur du hamac est bonne : tout est
                nickel je peux m'asseoir tranquillement.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step14BIG.jpg")} />
              <p className={styles.pSlider}>
                14. Je commence à installer le long cordage qui tiendra le tarp.
                Je l'attache un chouille au-dessus de l'insertion des sangles
                avec un noeud tendeur.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step15BIG.jpg")} />
              <p className={styles.pSlider}>
                15. Mon cordage en paracorde est attaché entre les deux arbres,
                j'ai pu régler la tension grâce aux noeuds tendeurs.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step16BIG.jpg")} />
              <p className={styles.pSlider}>
                16. Je place sur la longue corde des noeuds de Prusik qui me
                serviront à accrocher mon tarp.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step17BIG.jpg")} />
              <p className={styles.pSlider}>
                17. Je commence à accrocher mon tarp. Je préfère cette méthode
                dans laquelle c'est la longue corde qui maintient le tarp,
                plutôt que le cordage sous le tarp qui le laisserait glisser, ou
                encore le tarp tendu fermement entre les arbres ce qui endommage
                les coutures assez vite. (mon tarp : DD Hammock, 3x3m, multicam)
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step18BIG.jpg")} />
              <p className={styles.pSlider}>
                18. Je joue avec deux mousquetons pour attacher les extremités
                du tarp aux noeuds de Prusik qui me permettent de régler la
                longueur, et improvise un noeud au niveau de la partie centrale
                du tarp.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step19BIG.jpg")} />
              <p className={styles.pSlider}>
                19. J'attache maintenant les deux ailes du tarp à ce que je
                peux, en l'occurence deux petits arbustes. J'utilise de la
                paracorde et des noeuds tendeurs.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step20BIG.jpg")} />
              <p className={styles.pSlider}>
                20. Mon hamac est équipé de petites boucles qui permettent de le
                tendre latéralement pour éviter que la moustiquaire ne tombe sur
                le visage. J'attache ces petites boucles à des passants du tarp
                grâce à de la paracorde et des noeuds tendeurs.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step21BIG.jpg")} />
              <p className={styles.pSlider}>
                21. J'examine les parties de l'underblanket qui me permettraient
                de mieux le tendre si besoin. J'en profite pour les tirer un peu
                et améliorer la tension des parois de l'underblanket.
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step22BIG.jpg")} />
              <p className={styles.pSlider}>
                22. Astuce de la classe suprême : attacher des petits bouts de
                corde aux sangles ! Ainsi en cas de pluie, l'eau qui coule le
                long de l'arbre suivra la sangle, puis ces petits bouts de corde
                et tombera, évitant ainsi que les gouttes ne viennent couler
                tout le long de la sangle pour se vider dans votre hamac !
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step23BIG.jpg")} />
              <p className={styles.pSlider}>
                23. J'installe mon sac de couchage tout doux - tout mou - tout
                chaud ! (Snugpak Osprey 12)
              </p>
            </div>
            <div>
              <img alt="" src={require("./img/step24BIG.jpg")} />
              <p className={styles.pSlider}>
                24. Je place mon sac sur le tapis et sous le tarp à l'abris de
                la pluie. Mon bivouac est prêt pour une nuit confortable, au
                chaud et au sec !
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div id="hamac5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Bien utiliser son hamac</h3>
      <ul>
        {" "}
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Rentrer dans le hamac
          </span>{" "}
          : Écartez les deux volets du hamac avec vos mains et visez avec votre
          popotin pour atterir en douceur. Une nuit j'ai voulu m'asseoir
          directement sans chercher à écarter la toile du hamac et suis tombé
          sur les fesses derrière le hamac : rien de grave ce n'était une chute
          que de 40cm sur un sol forestier mousseux, mais depuis je vérifie à
          100% d'y rentrer dans les règles de l'art !
        </li>
        <li>
          {" "}
          <div className={styles.imgArticleContainer}>
            {" "}
            <img
              className={styles.imgArticleRightTop}
              id="noBrightness"
              src={require("./img/hammockLying.avif")}
              alt="Les dangers du hamac ! Ou pas !"
            />
          </div>
          <span className={styles.fat}>
            <span className={styles.dot}></span>S'installer dans le hamac
          </span>{" "}
          : - La meilleure position est en diagonale, vous offrant un dos plus
          droit et des épaules non compressées pour un sommeil tip top ! Tractez
          vous avec vos bras en vous agripant au tissu du hamac pour vous
          positionner, et jouez avec vos jambes et vos bras pour les plier comme
          il faut pour vous sentir à l'aise (l' illustration ci-contre est pas
          mal !). <br />- Dormir dans le sens de la longueur du hamac, ça se
          fait mais ce n'est pas le mieux niveau confort, surtout pour les
          épaules qui ont tendance à se faire compresser latéralement par les
          parois du hamac. <br />- Dormir à 90 dégrés au sens du hamac marche
          bien à ce qu'il paraît, mais je suis beaucoup trop grand pour l'avoir
          pu tester sur mon hamac (la largeur des grands hamacs fait souvent
          1.60m, or je mesure 1.82m).
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Hygiène et nettoyage
          </span>{" "}
          : - À chaque fois que vous vous apprétez à rentrer dans votre hamac,
          je vous invite à retirer tous les éventuels résidus qui pourraient
          vous gêner (typiquement des fragments de feuilles mortes), qui malgré
          leur petite taille pourraient vraiment vous gratter et vous gêner la
          nuit. <br /> - Laver le hamac peut être interessant, à vous d'en juger
          mais étudiez bien les consignes du fabricant !
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Organiser l'intérieur du hamac
          </span>{" "}
          : Prenez votre temps à organiser l'intérieur de votre hamac, en
          prenant en compte que la température baissera au cours de la nuit. Par
          exemple j'ai toujours ma lampe frontale et mon téléphone accrochés sur
          une corde juste au-dessus de ma tête, mon sac de couchage et une veste
          sont entassés à mes pieds s'il fait chaud en début de nuit, prêts à
          être utilisés si la nuit se rafraichit. C'est encore une fois un
          exemple parmis l'océan de possiblités.
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>Rangement
          </span>{" "}
          : Une fois votre aventure terminée, rangez bien toutes vos affaires
          dans un endroit sec, propre et à l'abris des UV. Les choses
          "moelleuses" comme les sacs de couchage ou les underquilts doivent
          être stockés décompressés, pour que leur mousse ne se ratatine pas
          avec le temps.
          <br />
          Pour vous faire part d'une de mes expérimentations, j'avais laissé mon
          bivouac pendant des semaines dehors, ce qui en a résulté est une
          catastrophe globale : mon premier tarp (bas de gamme) était détruit
          par des énormes cloques formées à cause la pluie, mon sac à dos
          accroché à un arbre était rempli de pourriture, des araignées avaient
          pondu partout dessus et à l'intérieur 😬, une colonie de fourmis
          s'était installée dans le fond du hamac et les élastiques de
          l'underblanket se sont grandement dégradés. Ainsi donc je vous invite
          vivement à ranger avec rigueur vos affaires dès que faire se peut, ça
          vaut VRAIMENT le coup ! 👍
        </li>
      </ul>
    </>
  );
};

export default Hamac;

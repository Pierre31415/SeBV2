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

const Tente = () => {
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
      <h2 className={styles.h2article}>Tente</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#tente1">Avatanges d'une tente</a>
            </li>
            <li>
              <a href="#tente2">Iconvénientsd'une tente</a>
            </li>
            <li>
              <a href="#tente3">Quels types de tente ?</a>
            </li>
            <li>
              <a href="#tente4">Matos pour une tente</a>
            </li>
            <li>
              <a href="#tente5">Installation</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Il fallait ce gif pour ce thème, c'était le destin"
            className={styles.imgArticle}
            src={require("./img/tentInsideSMALL.jpg")}
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
                <a href="#tente1">Avatanges d'une tente</a>
              </li>
              <li>
                <a href="#tente2">Iconvénientsd'une tente</a>
              </li>
              <li>
                <a href="#tente3">Quels types de tente ?</a>
              </li>
              <li>
                <a href="#tente4">Matos pour une tente</a>
              </li>
              <li>
                <a href="#tente5">Installation</a>
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
        </div>{" "}
      </div>
      <div id="tente1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Avantages d'une tente</h3>
      <div>
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
                  href={require("./img/tentOrangeBlueBIG.jpg")}
                  data-caption="Bivouaquer en tente, c'est comme avoir sa petite maison dans la nature ! (Source : <a href='https://unsplash.com/fr/photos/8f_VQ3EFbTg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink' target='_blank'>Unsplash </a>)"
                >
                  <img
                    title="Bivouaquer en tente, c'est comme avoir sa petite maison dans la nature ! "
                    className={styles.imgArticleLeftTop}
                    alt=""
                    src={require("./img/tentOrangeBlueSMALL.jpg")}
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
            comme l' Islande.
          </li>
          <li>
            <span className={styles.dot}></span>
            <span className={styles.fat}>Dormir à plusieurs</span> : Il est très
            facile de trouver des modèles de tentes qui permettent de dormir à
            plusieurs, ce qui amène au point suivant...
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
            <span className={styles.fat}>Facilité de montage</span> : Une tente
            requiert peu voire pas de connaissance pour pouvoir être montée
          </li>
          <li>
            <span className={styles.dot}></span>
            <span className={styles.fat}>Organisation dans la tente</span> :
            Dans une tente il est facile d'étaler et ranger son matos, comme son
            sac à dos qui est alors à l'abris de tout si vous en avez la place.
            Il est facile aussi de s'y changer.
          </li>{" "}
        </ul>
      </div>{" "}
      <div id="tente2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Inconvénients d'une tente</h3>
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
                href={require("./img/tentWaterBIG.jpg")}
                data-caption="Il y a des erreurs qu'on ne fait plus jamais ! Ici, il a du pleuvoir pendant la nuit, augmentant la largeur de la rivière, noyant la tente qui a été posée trop proche de l'eau !"
              >
                <img
                  title="Attention à l'emplacement de la tente !"
                  className={styles.imgArticleRightTop}
                  alt="tente noyée"
                  src={require("./img/tentWaterSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          <span className={styles.dot}></span>
          <span className={styles.fatRed}>Propice à la condensation</span> : Les
          contrastes thermiques (ne serait-ce que la lumière du soleil sur la
          tente un matin frais), la vapeur de la cuisine, l'humidité de votre
          respiration,... les tentes ventilent mal, alors elle accumulent
          l'humidité. Même pas la peine d'essayer de faire sécher vos vêtements
          dans une tente ! Je vous invite en tout cas, quelle que soit la
          saison, à sélectionner une tente qui ventile le mieux possible !
        </li>
        <li>
          {" "}
          <span className={styles.dot}></span>
          <span className={styles.fatRed}>
            Difficulté à trouver un terrain bien plat
          </span>{" "}
          : Entre les branches, les pierres, les plantes,... Trouver un terrain
          tout plat pour la tente est souvent curieusment difficile.
        </li>
        <li>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Matelas gonflable
          </span>{" "}
          : Pour qu'une tente soit confortable, il vous faut un matelas
          gonflable, le problème majeur de ces derniers est qu'ils ont toujours
          un risque élevé de crever pendant vore bivouac, mettant en péril votre
          confort la nuit voire votre aventure entière.
        </li>
        <li>
          <span className={styles.fatRed}>
            {" "}
            <span className={styles.dot}></span>Accessible aux animaux
          </span>{" "}
          : Je me souviens de l'anecdote d'un randonneur qui racontait que
          lorsqu'il s'est réveillé le matin et qu'il est sorti de sa tente, il a
          découvert que cette dernière a été abondamment rongée, sûrement par un
          renard : pensez TOUJOURS à cacher les odeurs de votre nourriture, par
          exemple dans un sac étanche !
        </li>
        <li>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Les risques de l'emplacement de
            la tente
          </span>{" "}
          : Il suffit qu'il y ait une légère concavité au sol, même dans une
          belle prairie qui semble toute plate, pour qu'en cas de pluie votre
          tente soit parfaitement noyée. Idem pour le risque de montée de niveau
          des points d'eau comme les ruisseaux en cas de pluie !
        </li>{" "}
        <li>
          <span className={styles.fatRed}>
            <span className={styles.dot}></span>Dégrade la nature
          </span>{" "}
          : Au minimum, une tente écrase le sol. Voire pire pour se préparer un
          emplacement on peut vouloir déplacer des cailloux, des plantes, des
          branchages, dégradant chaque fois un peu plus les petits écosystèmes.
        </li>
      </ul>
      <div id="tente3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Quels types de tente ?</h3>
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
              href={require("./img/tent4seasonsBIG.png")}
              data-caption="Une tente géodésique 4 saisons robuste (Nemo Chogori 2P) !"
            >
              <img
                title="Une tente géodésique 4 saisons robuste !"
                className={styles.imgArticleLeftTop}
                alt=""
                src={require("./img/tent4seasonsSMALL.png")}
              />
            </a>
          </Fancybox>
        </div>
        <span className={styles.fat}>
          <span className={styles.dot}></span>1, 2 places ou plus ?
        </span>{" "}
        Pour donner la réponse courte : cela dépend beaucoup des modèles et des
        fabricants ! Je vous invite à bien consulter les mensurations et les
        données techniques des tentes qui vous interesseraient !
        <br />
        En général en tout cas,{" "}
        <span className={styles.fat}>
          comptez une place de plus si vous voulez ranger votre sac à dos avec
          vous dans la tente
        </span>
        . Ainsi par exemple, une tente 3 places est adaptée à un couple qui veut
        poser les sacs à dos à l'abris dans la tente.
      </p>
      <p>
        {" "}
        <span className={styles.fat}>
          <span className={styles.dot}></span>Quelle forme ?{" "}
        </span>
        Il existe de multiples formes de tentes avec des aptitudes différentes :
        <br />-<span className={styles.fat}> Tente dôme / géodésique</span> :
        adaptée à des conditions météo difficiles grâce à sa solidité, mais a
        tendance à peser assez lourd. La tente géodésique est concrètement une
        tente dôme avec plus d'arceaux pour plus de solidité, elle est donc plus
        résistante que la dôme classique.
        <br />-<span className={styles.fat}> Tente tunnel</span> : permet
        d'atteindre de grands volumes, possède même parfois plusieurs
        compartiments communiquants !
        <br />-<span className={styles.fat}> Tente tipi </span> : peut être
        compatible avec un poele à bois
        <br />-<span className={styles.fat}> Tente sarcophage </span> : tente
        très basse qui permet d'être très discret·ète, mais impossible de ranger
        ses affaires ou de se changer dedans !<br />-
        <span className={styles.fat}> Tente d'assaut </span> : c' est une tente
        4 saisons ultra légère mono paroi destinée à être emportée par les
        alpinistes / himalayistes.
      </p>
      <p>
        {" "}
        <span className={styles.fat}>
          <span className={styles.dot}></span>2, 3, 4 saisons ?
        </span>{" "}
        Il s'agit surtout d'un{" "}
        <span className={styles.fat}>indice de solidité</span>
        . Une tente 4 saisons est ainsi plus résistante face aux intempéries. On
        parle même de tentes 5 saisons pour un indice de résistance
        particulièrement élevé !
        <br />
      </p>
      <p>
        <span className={styles.fat}>
          <span className={styles.dot}></span>Mono ou double paroi ?
        </span>{" "}
        <br />-<span className={styles.fat}> Mono paroi </span> (ou mono-toit) :
        légère, mais à cause du manque de ventilation la condensation s'accumule
        vite.
        <br />-<span className={styles.fat}> Double-paroi </span> :
        classiquement la paroi côté intérieur est très respirante (souvent faite
        en mesh, une sorte de moustiquaire), tandis que la partie résistante aux
        intempéries est placée par dessus comme un couvercle laissant un large
        filet d'air passer par le-dessous.
        <br />
      </p>
      <p>
        {" "}
        <span className={styles.fat}>
          <span className={styles.dot}></span>Autoportante ou non ?
        </span>{" "}
        Ce terme désigne{" "}
        <span className={styles.fat}>
          la capacité de la tente à tenir debout "toute seule"
        </span>
        . L'usage de sardines (les petits piquets) est alors optionnel, ce qui
        est très intéressant pour les terrains où en planter est impossible
        (sable, sol rocheux,...).
        <br /> Ainsi, une tente semi-autoportante peut tenir debout toute seule,
        mais tendre de la corde rattachée à des sardines lui permet de gagner en
        volume.
        <br /> Les tentes non-autoportantes ont tout de même l'avantage d'être
        souvent faciles à monter.
        <br />
      </p>
      <div id="tente4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Matos pour une tente</h3>
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
              href={require("./img/footprintBIG.jpg")}
              data-caption="Un footprint devant la tente qu'il va protéger"
            >
              <img
                title="Un footprint devant la tente qu'il va protéger"
                className={styles.imgArticleRightTop}
                alt="un footprint"
                src={require("./img/footprintSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <p>
          {" "}
          Il n'y a pas besoin de grand chose de plus qu'une tente pour profiter
          de sa petite maison transportable, mais voici quelques éléments tout
          de même :
        </p>{" "}
        <ul>
          <li>
            {" "}
            <span className={styles.dot}></span>{" "}
            <span className={styles.fat}>
              Un matelas gonflable / un tapis de sol
            </span>{" "}
            : <br /> - En plus de leur rôle évident de confort, ils ont aussi un
            rôle important d'<span className={styles.fat}> isolation</span> pour
            éviter que vous ne ressentiez la faîcheur du sol rentrer en contact
            avec le dos. Ainsi, plus vous bivouaquerez en climat froid, plus il
            faudra un matelas / un tapis isolant. <br /> -
            <span className={styles.fat}>
              {" "}
              Le coefficient "R" -ou "R Value"-{" "}
            </span>
            mesure ce pouvoir isolant. En été une valeur jusqu'à 2 fera le job,
            alors qu'en hiver chercher à atteindre au moins 3 semble pertinent.
            Les R values s'additionnent, ainsi si vous avez un tapis de R=1 et
            un matelas gonflable de R=2, votre isolation totale sera de R=3.
            <br /> - Le risque avec les matelas gonflables, c'est les risques de{" "}
            <span className={styles.fat}>fuite </span> d'air, ainsi pensez à
            vous équiper de quoi le réparer vite fait, comme des rustines par
            exemple. <br />
          </li>
          <li>
            {" "}
            <span className={styles.dot}></span>{" "}
            <span className={styles.fat}>Un sac de couchage</span> : il y a pas
            mal de choses à dire, j'écrirai un article à leur sujet très
            bientôt. En tout cas étudiez bien les températures "de confort"
            selon le fabriquant, et n'ayez pas peur de prendre un sac un petit
            peu trop chaud (même en été les fins de nuit sont fraîches !).
          </li>
        </ul>
        <br />
        <span className={styles.dot}></span>{" "}
        <span className={styles.fat}>Un footprint</span> : c'est un tapis
        résistant à placer SOUS la tente pour limiter sa dégradation à cause du
        sol (plantes épineuses, cailloux pointus,...). Il faut qu'il soit aux
        bonne dimensions de la tente. Je le recommande chaudement car cela
        augmente considérablement la durée de vie de la tente, donc vous
        économiserez à long terme et ferez preuve d'écologisme car du matériel
        qui dure plus longtemps c'est de ressources en moins à utiliser pour en
        produire à nouveau !
        <br />
      </p>
      <div id="tente5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Installation</h3>
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
              href={require("./img/tenteFailBIG.jpg")}
              data-caption="Prenez garde au vent !"
            >
              <img
                title="Prenez garde au vent !"
                className={styles.imgArticleLeftTop}
                alt=""
                src={require("./img/tenteFailSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <ul>
          <li>
            <span className={styles.dot}></span> Choisissez un endroit assez
            éloigné d'un point d'eau (pour éviter les remontées en cas de
            pluie), et pas dans une concavité. Le sol doit être le plus plat
            possible, autrement pour glisserez sur votre matelas.
          </li>
          <li>
            <span className={styles.dot}> </span>Installez le tapis de sol
            (alias footprint) si vous en avez un.
          </li>
          <li>
            <span className={styles.dot}> </span>Orientez votre tente de telle
            sorte que l'entrée soit dans le sens contraire de celui du vent,
            pour éviter qu'il ne s'engoufre dans la tente.
          </li>{" "}
          <li>
            <span className={styles.dot}> </span>Si votre tente doit se monter
            avec des arceaux, la prochaine étape de l’installation consistera à
            les mettre dans leurs fentes respectives. Ne forcez pas, cela
            pourrait endommager la toile de votre tente.
          </li>{" "}
          <li>
            <span className={styles.dot}> </span>Assurez-vous que tout est bien
            tendu et attaché
          </li>{" "}
          <li>
            <span className={styles.dot}> </span>Profitez bien de votre petit
            coin de chez vous dans la nature ! 🌳
          </li>
        </ul>
      </p>
    </>
  );
};

export default Tente;

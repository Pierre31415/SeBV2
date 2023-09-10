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

const Feu = () => {
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
      <h2 className={styles.h2article}>Le feu</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#feu1">Préambule</a>
            </li>
            <li>
              <a href="#feu2">Le feu : pour quoi faire ?</a>
            </li>
            <li>
              <a href="#feu3">Top 4 des meilleurs feux</a>
            </li>
            <li>
              <a href="#feu4">Allumer un feu</a>
            </li>
            <li>
              <a href="#feu5">Réglementation</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Feu de camp"
            className={styles.imgArticle}
            src={require("./img/feuDarkSouls.png")}
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
                <a href="#feu1">Préambule</a>
              </li>
              <li>
                <a href="#feu2">Le feu : pour quoi faire ?</a>
              </li>
              <li>
                <a href="#feu3">Top 4 des meilleurs feux</a>
              </li>
              <li>
                <a href="#feu4">Allumer un feu</a>
              </li>
              <li>
                <a href="#feu5">Réglementation</a>
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
      <div id="feu1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Préambule</h3>
      <div>
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
                href={require("./img/incendieBIG.jpg")}
                data-caption="Les cicatrices d'un feu de forêt près de chez moi"
              >
                <img
                  title="Les cicatrices d'un feu de forêt"
                  className={styles.imgArticleRightTop}
                  alt="feu de forêt"
                  src={require("./img/incendieSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          La coïncidence fait que j'ai commencé à écrire cet article le jour
          même de ma découverte d'une fin d'incendie de forêt au cours d'une
          balade, quelques flammes se gondolaient encore au sol. J'ai alerté les
          pompiers qui s'étaient pourtant déjà occupés de cet incendie il y a 3
          jours, mais il faut croire que ça n'a même pas suffi à tout éteindre.
        </p>
        <p>
          Cet incendie serait dû à des imbéciles qui auraient brulé une voiture
          restée sur le chemin forestier, pourtant à plusieurs mètres de la
          végétation. C'était au printemps, les journées étaient encore assez
          fraîches. Malgré tout ça, le feu a réussi à atteindre la végétation,
          se répandre et dévorer deux hectares de forêt, emportant avec lui des
          centaines d'arbres, des millions de vies d'insectes, et je ne sais
          combien d'oeufs d'oiseaux et de plantes...
        </p>
        <p>
          <span className={styles.fat}>
            {" "}
            Les risques d'incendie, c'est du sérieux. Faisons toutes et tous
            notre maximum pour les éviter
          </span>
          .
        </p>
      </div>{" "}
      <div id="feu2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Le feu : pour quoi faire ?</h3>
      <p>Un feu en bivouac peut servir à plusieurs choses :</p>
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
              href={require("./img/samBIG.jpg")}
              data-caption="Les vrais héros savent cuisiner !"
            >
              <img
                title="Les vrais héros savent cuisiner !"
                className={styles.imgArticleLeftTop}
                alt="cuisiner"
                src={require("./img/samSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Se réchauffer</span> : S'il fait froid
          cela peut vous aider à tenir bon et éviter l'hypothermie. Rappelez
          vous cependant qu'un feu finit par s'éteindre et que si vous préparez
          un feu de camp le soir avant de vous coucher votre fin de nuit risque
          d'être fraîche car le feu sera éteint depuis longtemps.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Cuisiner</span> : Beaucoup d'aliments et
          de plats lyophilisés nécessitent de la cuisson.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Désinfecter l'eau</span> : C'est une
          solution très efficace, après filtration, pour obtenir une eau
          consommable lors de vos randonnées. En dessous de 1000 mètres
          d'altitude, l'eau bout à 100°C. Il faut une dizaine de minutes pour
          éliminer les organismes et parasites, mais deux à trois minutes
          suffisent pour obtenir une eau vierge de la plupart des
          contaminations. En altitude, « le temps de cuisson » est plus long.
          L'ébullition est inefficace contre les polluants chimiques.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Aider à faire sécher ses vêtements</span>{" "}
          : Alors c'est vrai, mais prenez garde ne pas cramer vos vêtements, ce
          serait dommage ! J'ai lu quelque part que certaines personnes font
          chauffer des cailloux qu'elles mettent ensuite dans le linge à sécher,
          je ne sais pas ce que ça vaut vraiment.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>
            Éloigne les grosses et petite bêtes
          </span>{" "}
          : La lumière attire les insectes, mais la fumée émise par un feu de
          camp les fait fuir.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Ambiance et cohésion de groupe</span> :
          Ce dernier point est moins pragmatique, mais un feu, c'est beau, et
          c'est curieusement universel pour rassembler des gens de manière
          conviviale et instinctive. Nous sommes des êtres grégaires après tout
          !
        </li>
      </ul>
      <div id="feu3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Top 4 des meilleurs feux</h3>
      <ul>
        {" "}
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>TOP 1 : Le feu qu'on ne fait pas !</span>{" "}
          Oui, c'est le meilleur plan ! Plus de sécurité, plus de légèreté (pas
          de besoin de réchaud), plus résilient (pas besoin de stock de
          cartouches de gaz), ... Le meilleur feu est celui qu'on n'allume pas !
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>TOP 2 : Le réchaud à gaz</span> : Il
          permet d'avoir{" "}
          <span className={styles.fat}>simplement et immédiatement du feu</span>
          , il limite aussi beaucoup le risque d'incendie. Son gros inconvénient
          est de{" "}
          <span className={styles.fat}>dépendre de cartouches de gaz</span> avec
          soi, prenant du poids et de la place dans le sac. Pour de longues
          excursions qui impliqueraient donc beaucoup de cartouches, ce n'est
          pas terrible.
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
                href={require("./img/happyStoveBIG.jpg")}
                data-caption="Regardez moi ça comme il est mignon ce petit réchaud à bois ! Pitit pitit !! (Happy Stove de Savotta)"
              >
                <img
                  title="Un réchaud à bois tout mignon"
                  className={styles.imgArticleRightTop}
                  alt="réchaud à bois"
                  src={require("./img/happyStoveSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>TOP 3 : Le réchaud à bois</span> :
          Concrètement c’est une boîte démontable dans laquelle on allume un
          feu. Son principal atout est sa{" "}
          <span className={styles.fat}>résilience</span> (vous trouverez
          toujours facilement des petits bouts de bois dans la nature) et sa
          faible consommation de bois (qu’il faut cependant alimenter très
          régulièrement). Sa conception limite le risque de faire tomber des
          petites braises, mais l’omniprésence de petits trous de ventilation
          n’annule pas ce risque, <span className={styles.fat}>prudence</span>{" "}
          donc. Les réchauds à bois sont trop petits pour chauffer un camp, mais
          sont adaptés pour chauffer un plat.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>TOP 4 : Le feu de camp</span> : C’est la
          vision idyllique du feu en bivouac. Si vous deviez en faire un, pensez
          qu’il est préférable de créer un{" "}
          <span className={styles.fat}>petit feu</span> auprès duquel vous
          pourrez être plus proche, qui sera plus sécurisé et plus écologique
          qu'un gros feu, car oui l’empreinte d’un feu de camp stérilise le sol
          en dessous. Un gros feu de camp vous forcerait à profiter de sa
          chaleur plus loin (car trop chaud de près), à consommer beaucoup plus
          de bois, serait plus dangereux et encore plus nuisible écologiquement.
          <br />
          ATTENTION ! Les matériaux synthétiques ont tendance à être très
          inflammables ! Ne placez donc jamais votre bivouac juste à coté de
          votre feu !
        </li>
      </ul>
      <div id="feu4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Allumer un feu</h3>
      <p>
        {" "}
        Il y a sûrement au moins mille façons d'initier et de concevoir un feu.
        On va essayer quand même d'en saisir quelques grandes ideés.
      </p>
      <ul>
        {" "}
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
                href={require("./img/firesteelBIG.jpg")}
                data-caption="Un firesteel avec son grattoir"
              >
                <img
                  title="firesteel"
                  className={styles.imgArticleLeftTop}
                  alt="firesteel"
                  src={require("./img/firesteelSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Où placer le feu ?</span> : En prenant en
          compte le fait qu'il pourrait y avoir de grands coups de vents qui
          projeterraient les braises, le mieux est qu'il soit{" "}
          <span className={styles.fat}>assez éloigné de votre bivouac</span>.
          Pensez à toujours garder un{" "}
          <span className={styles.fat}>récipient d'eau à proximité</span> par
          sécurité !
        </li>{" "}
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>
            Quels outils pour allumer un feu ?{" "}
          </span>{" "}
          <br /> - Le <span className={styles.fat}>briquet</span> est une option
          intéressante car facile, mais s'il vous lâche c'est fini !
          <br />- Les <span className={styles.fat}>allumettes</span> sont aussi
          des outils corrects mais inefficaces quand il y a du vent ou si elles
          prennent l'humidité. Il existe autrement les allumettes Tempêtes qui
          sont opérationnelles même en cas de grand vent et d'humidité.
          <br />- Le top semble être un{" "}
          <span className={styles.fat}>firesteel</span>, qui est l'équivalent
          d'une pierre à feu. Il est très souvent accompagné de son grattoir,
          s'il n'y en a pas la partie large de la lame d'un couteau devrait
          faire l'affaire en tant que grattoir. Il faut utiliser le grattoir en
          appuyant fort à 45°, sur de courtes distances répétées, le long de la
          barre (composée de ferrocerium) en prenant en compte qu'un firesteel
          tout neuf peinera à produire des étincelles au tout début (un histoire
          de surface de contact entre le grattoir et la barre je pense), donc ça
          vaut le coup d'insister.
        </li>
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Le foyer</span> : Établissez
          <span className={styles.fat}> un périmètre de sécurité</span> en
          retirant dans un premier temps tout ce qui serait prompt à s'embraser
          facilement juste autour du foyer (feuilles mortes, herbes sèches,...).
          Pour limiter l'echappement de braises, il est important de construire
          un <span className={styles.fat}>cercle de pierres</span> autour du
          foyer si c'est un feu de camp. Enfin, la façon de poser votre bois
          peut ressembler à un tipi (feu de camp), en s'assurant que
          <span className={styles.fat}> l'air passe bien</span>. Encore une
          fois, il y a une quantité hallucinante de façons de préparer le foyer,
          alors pour aujourd'hui on se contentera du tipi de branchages 😅.
          Utilisez toujours du <span className={styles.fat}>bois mort</span>,
          déjà par respect pour les arbres vivants, et ensuite parce qu'il est
          plus deshydraté que le bois vert, facilitant ainsi la combustion.
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
                href={require("./img/triangleBIG.jpg")}
                data-caption="Le triangle du feu, version bivouac"
              >
                <img
                  title="triangle du feu"
                  className={styles.imgArticleRightTop}
                  alt="triangle du feu"
                  src={require("./img/triangleSMALL.jpg")}
                />
              </a>
            </Fancybox>
          </div>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Démarrer le feu</span> : Vous aurez
          besoin au début de quelque chose qui brûle très facilement pour
          initier le feu. Des{" "}
          <span className={styles.fat}>feuilles mortes</span> bien sèches, des{" "}
          <span className={styles.fat}>copeaux de bois</span> que vous aurez
          grattés depuis le côté interne d'une écorce d'arbre mort (surtout le
          bouleau) avec le grattoir d'un firesteel ou un couteau, de la paille,
          des herbes séchées,... Sinon, vous aurez peut-être pris dans vos
          affaires des petits bouts de <span className={styles.fat}>coton</span>{" "}
          qui s'enflammeront extrêmement facilement.
          <br />
          Quel que soit l'outil que vous utilisez pour allumer le feu, c'est
          lorsqu'une <span className={styles.fat}>fumée</span> fait son
          apparition que vous devez <span className={styles.fat}>souffler</span>{" "}
          dessus pour augmenter l'apport d'oxygène, ce qui facilitera le
          lancement du feu. Lorsque ce dernier est présent,{" "}
          <span className={styles.fat}>rajoutez du combustible</span> au fur et
          à mesure. Tadaaaaa vous avez réussi votre feu !
        </li>{" "}
        <li>
          <span className={styles.dot}></span>{" "}
          <span className={styles.fat}>Surveillez TOUJOURS votre feu</span>, il
          y va de votre sécurité et de celle de toutes les formes de vie autour
          de vous !
        </li>
      </ul>
      <div id="feu5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Réglementation</h3>
      <p>
        {" "}
        <p>
          L’article L131-1 du code forestier interdit d’allumer un feu de camp
          sur un terrain dont on n’est pas propriétaire ou que l’on occupe sans
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
          laisser passer un bivouac illégal tout discret et sans déchet, mais
          s'il y a eu un feu, même un petit barbecue, préparez-vous à une amende
          salée !
        </p>
      </p>
    </>
  );
};

export default Feu;

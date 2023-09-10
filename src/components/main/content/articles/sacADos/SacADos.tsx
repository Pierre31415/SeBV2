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

const SacADos = () => {
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
      <h2 className={styles.h2article}>Sac à dos</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#sacADos1">Anatomie d'un sac à dos</a>
            </li>
            <li>
              <a href="#sacADos2">Adaptation à la morphologie</a>
            </li>
            <li>
              <a href="#sacADos3">Volume</a>
            </li>
            <li>
              <a href="#sacADos4">Matériaux</a>
            </li>
            <li>
              <a href="#sacADos5">Bien régler son sac </a>
            </li>
            <li>
              <a href="#sacADos6">Bien organiser son sac </a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Un sac à dos sûrement léger"
            className={styles.imgArticle}
            src={require("./img/superBP.gif")}
            alt="sac à dos"
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
                <a href="#sacADos1">Anatomie d'un sac à dos</a>
              </li>
              <li>
                <a href="#sacADos2">Adaptation à la morphologie</a>
              </li>
              <li>
                <a href="#sacADos3">Volume</a>
              </li>
              <li>
                <a href="#sacADos4">Matériaux</a>
              </li>
              <li>
                <a href="#sacADos5">Bien régler son sac </a>
              </li>
              <li>
                <a href="#sacADos6">Bien organiser son sac </a>
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
      <div id="sacADos1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Anatomie d'un sac à dos</h3>
      <div className={styles.center}>
        <div className={`${styles.imgArticleBig} ${styles.imgBrightness}`}>
          <Fancybox
            options={{
              compact: false,
            }}
          >
            <a
              data-fancybox="gallery"
              href={require("./img/anatomieBPBIG.png")}
              data-caption="Anatomie d'un sac à dos. Pas de placement de produit, il me fallait jsute une photo de sac à dos avec des couleurs contrastées."
            >
              <img
                title="Anatomie d'un sac à dos"
                className={styles.imgArticleBig}
                alt="Anatomie d'un sac à dos"
                src={require("./img/anatomieBPSMALL.png")}
              />
            </a>
          </Fancybox>
        </div>
      </div>
      <p>
        Bien entendu, il s'agit ici d'un schéma généraliste. Certains sacs
        auront par exemple des sacs latéraux, un compartiment supérieur
        conséquent, pas de sangle pectorale,... L'essentiel est de comprendre
        les termes utilisés pour la suite.
      </p>
      <div id="sacADos2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Adaptation à la morphologie</h3>
      <div className={`${styles.imgArticleContainer} ${styles.imgBrightness}`}>
        <Fancybox
          options={{
            compact: false,
          }}
        >
          <a
            data-fancybox="gallery"
            href={require("./img/sarmaReglableBIG.jpg")}
            data-caption="Même sac à dos pour deux personnes de tailles très différentes (1m60 et 2m), vive la hauteur des bretelles réglable ! (Särmä TST RP80)"
          >
            <img
              title="Même sac à dos pour deux personnes de tailles très différentes (1m60 et 2m), vive la hauteur des bretelles réglable ! (Särmä TST RP80)"
              className={styles.imgArticleRightTop}
              alt="sac à dos réglable"
              src={require("./img/sarmaReglableSMALL.jpg")}
            />
          </a>
        </Fancybox>
      </div>
      <p>
        Avant tout achat, il faut se demander{" "}
        <span className={styles.fat}>QUI</span> va porter ce sac à dos : une
        personne avec un corps féminin ou masculin, un enfant, quelle taille
        fait cette personne, quel est son gabarit.
        <p>
          En effet les sacs conçus pour les femmes ont tendance à éviter de
          faire passer les bretelles sur la poitrine et à avoir une ceinture
          ventrale plus généreux pour les hanches que les sacs pour les hommes.
          Les sacs pour enfant sont bien-sûr plus petits.
        </p>
      </p>
      <p>
        La <span className={styles.fat}>taille</span> de la personne qui portera
        le sac à dos est également un élément important (je pense en particulier
        aux personnes particulièrement grandes qui portent des sacs à dos aux
        bretelles trop basses pour elles et qui écrasent leurs épaules). Le
        saint Graal étant les sacs à dos dont la hauteur de l'attache dorsale
        des bretelles est réglable.
        <p>
          Le <span className={styles.fat}>poids</span> est un autre élément de
          l'équation. On conseille de porter un sac à dos qui ne dépasse pas
          20-25 % du poids de la personne. Ceci est à relativiser grandement :
          une personne peu entrainée ou un enfant ne devrait pas dépasser les
          10%, tandis qu'une force de la nature peut atteindre les 25% sans
          broncher.
        </p>
        <div id="sacADos3" className={styles.linkSommaire}></div>
      </p>{" "}
      <h3 className={styles.h3article}>3) Volume du sac à dos</h3>{" "}
      <div className={`${styles.imgArticleContainer} ${styles.imgBrightness}`}>
        <Fancybox
          options={{
            compact: false,
          }}
        >
          <a
            data-fancybox="gallery"
            href={require("./img/sherpaBIG.jpg")}
            data-caption="Je ne sais pas ce que ce sherpa transporte, mais je vous invite à choisir un sac à dos plus petit que ça !"
          >
            <img
              title="Je ne sais pas ce que ce sherpa transporte, mais je vous invite à choisir un sac à dos plus petit que ça !"
              className={styles.imgArticleLeftTop}
              alt="volume sac à dos"
              src={require("./img/sherpaSMALL.jpg")}
            />
          </a>
        </Fancybox>
      </div>
      <p>
        Le volume (ou litrage) de votre sac à dos dépendra de deux paramètres :{" "}
      </p>
      <p>
        <span className={styles.dot}></span>
        <span className={styles.fat}>Le trajet prévu</span> : en effet si plutôt
        que bivouaquer vous souhaitez passer les nuits en refuge pendant votre
        périple, le contenu de votre sac à dos se verra allégé du matériel de
        bivouac tel qu'une tente ou un hamac. Le sac peut donc être assez petit,
        disons jusqu' à 30 litres.
      </p>
      <p>
        Parallèlement, si vous souhaitez plutôt effectuer votre périple en
        autonomie et en bivouquant, le sac à dos peut atteindre les 110 litres
        maximum (généralement).
      </p>
      <p>
        Pensez aussi que si vous voyagez à plusieurs, la personne la plus forte
        peut porter une tente pour le groupe, permettant aux autres de porter
        des sacs plus petits et plus légers, ou d'autres parties du matériel.
      </p>
      <p>
        Pour revenir au trajet prévu, la question du{" "}
        <span className={styles.fat}>quand</span> se pose aussi : en effet le
        besoin d'affaires chaudes et épaisses est moindre en été qu'en hiver.
      </p>
      <p>
        <span className={styles.dot}></span>
        <span className={styles.fat}>Le matériel nécessaire</span> : j'écrirai
        un article à part entière qui décrira un exemple standard de matériel et
        de préparation. En tout cas éviter le superflu et privilégier les
        affaires compactes vous feront économiser beaucoup de place et de poids
        !
      </p>{" "}
      <div id="sacADos4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Matériaux du sac à dos</h3>
      <p>
        Il vous faudra choisir entre{" "}
        <span className={styles.fat}>le prix du sac à dos</span>,{" "}
        <span className={styles.fat}>sa résistance</span> et{" "}
        <span className={styles.fat}>sa légèreté</span>. Oui,{" "}
        <span className={styles.fat}>il n' y a pas de sac à dos ultime</span>,
        il y en a juste qui peuvent répondre plus ou moins bien à vos besoins !
      </p>
      <p>
        Il y a deux familles principales de matériaux pour les sacs à dos de
        randonnée (je ne parlerai pas des sacs en tissu à l'ancienne, qui sont
        très lourds et inexistants maintenant, malgré leur côté vintage sympa) :
      </p>{" "}
      <span className={styles.dot}></span>
      <span className={styles.fat}>Le polyester</span> : le moins cher, il est
      cependant le plus fragile. Il est un peu plus facile à recycler que le
      nylon, mais compte tenu du fait qu'un bon recyclage est un recyclage qui
      n'est pas à faire, il est probablement préférable -dans la mesure du
      possible- d'opter pour un matériau plus résistant qui tiendra dans le
      temps et n'aura donc pas besoin d'être recyclé 🧐
      <p>
        <span className={styles.dot}></span>
        <span className={styles.fat}>Le nylon</span> : plus cher mais plus
        résistant que le polyester. Le{" "}
        <span className={styles.fat}>Cordura</span> est un nylon de première
        qualité en terme de résistance, de durabilité et de conservation de la
        couleur. Le nylon est légèrement plus résistant à l'eau que le
        polyester.
      </p>
      <p>
        Un autre paramètre est à prendre en compte : le{" "}
        <span className={styles.fat}>denier</span>. C'est une unité de mesure
        qui fait référence à la masse volumique linéaire de la fibre. En termes
        moins barbares, c'est la masse en grammes par 9 000 mètres de fibre. Un
        nombre de deniers inférieur indique une fibre plus fine et plus douce,
        tandis qu'un nombre de deniers plus élevé indique une fibre plus
        grossière et plus épaisse. Les fibres de nylon ont généralement un
        denier plus élevé que les fibres de polyester, ce qui signifie qu'elles
        sont plus épaisses et plus résistantes. En clair,{" "}
        <span className={styles.fat}>
          plus le chiffre est élevé, plus le tissu est lourd mais resistant
        </span>
        .
      </p>{" "}
      <div id="sacADos5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Bien régler son sac</h3>
      <div className={styles.imgArticleContainer}>
        <img
          title="Prendre son temps à bien régler son sac, c'est important"
          className={styles.imgArticleRightTop}
          src={require("./img/reglageSac.gif")}
          alt="régler son sac"
        />
      </div>
      <p>
        Il s'agit d'un protocole simple qui vous permettra de porter votre sac à
        dos de la manière la plus confortable possible et optimiser votre
        équilibre :
      </p>
      <ol>
        <li>
          Si le sac est doté d'un{" "}
          <span className={styles.fat}>
            système de réglage de la hauteur du dos
          </span>{" "}
          (sur lequel viennent s'insérer les bretelles), commencez par l'ajuster
          pour qu'il vous convienne.
        </li>
        <li>
          Après avoir rempli le sac vite fait pour qu'il prenne un peu de volume
          pour effectuer des réglages corrects par la suite (en général j'
          insère des coussins et une couverture), installez le sac sur vos
          épaules. Serrez la{" "}
          <span className={styles.fat}>ceinture ventrale</span> de telle sorte
          qu'elle soit posée sur les parties osseuses supérieures du bassin (pas
          au-dessus, le port au niveau des reins est inutilement douloureux). Le
          poids du sac doit être sur le bassin, pas les épaules.
        </li>
        <li>
          On ajuste ensuite les <span className={styles.fat}>bretelles</span>,
          de telle sorte que vous soyez à l'aise. Si le poids du sac repose sur
          vos épaules, relâchez un peu les sangles des bretelles ou étudiez à
          nouveau les étapes précédentes.
        </li>
        <li>
          S'il y en a une, ajustez la{" "}
          <span className={styles.fat}>sangle pectorale</span>, qui a pour
          unique fonction d'éviter que les bretelles ne s'écartent pas trop,
          donc pas besoin de serrer.
        </li>
        <li>
          Ajuser ensuite les{" "}
          <span className={styles.fat}>rappels de charge</span> pour rapprocher
          le sac de votre dos. Inutile de trop serrer ce serait inutilement
          inconfortable. Les rappels de charge évitent surtout au sac de tanguer
          à gauche et à droite. On conseille de les relâcher un peu en montée et
          de les tendre en descente.
        </li>
        <li>
          Une fois votre sac rempli de vos vraies affaires, utilisez les{" "}
          <span className={styles.fat}>sangles de compression</span> pour
          réduire le volume du sac et gagner en stabilité. Elles sont également
          importantes pour éviter à certaines zones du sac à dos de trop
          solliciter en tension les fermetures éclaires qui pourraient faillir.
        </li>
      </ol>{" "}
      <div id="sacADos6" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>6) Bien organiser l'intérieur du sac</h3>
      <p>
        L'idée est que le sac soit le plus agréable à porter possible grâce à
        une gestion optimale de son{" "}
        <span className={styles.fat}>centre de gravité</span>.
      </p>{" "}
      <p>
        On conseille ainsi de placer le plus lourd, dans l'idéal, au milieu du
        sac le plus proche du dos possible, par exemple une tente.
      </p>
      <p>
        Lorsque vous rajoutez une charge d'un côté du sac, essayez d'{" "}
        <span className={styles.fat}>équilibrer</span> en plaçant une charge
        équivalente de l'autre côté.
      </p>
      <p>
        Dans le <span className={styles.fat}>compartiment inférieur</span>, la
        plupart des randonneur·ses rangent leur sac de couchage, parce que les
        sacs à dos sont conçus pour faciliter la chose ainsi, et peut-être aussi
        dans l'espoir de protéger le sac de couchage de la pluie. En fait c'est
        assez dommage car le compartiment inférieur étant facilement accessible,
        il paraît plus judicieux d'y ranger des choses dont vous aurez besoin
        souvent : par exemple la nourriture car vous profiterez sûrement de
        plusieurs repas par jour, alors que le sac de couchage n'est sorti du
        sac littéralement qu'une fois maximum par jour pour dormir la nuit. En
        ce qui me concerne j'arrive à{" "}
        <span className={styles.fat}>
          glisser la nourriture et le sac de couchage au même endroit
        </span>
      </p>
      <p>
        Je n'ai pas encore testé cette méthode, mais il peut être interessant de{" "}
        <span className={styles.fat}>
          sortir le sac de couchage de son sac de compression pour le ranger
          dans un grand sac étanche, puis de l'utiliser pour boucher tous les
          "trous" à l'intérieur du sac à dos,{" "}
        </span>
        ce qui permet d'optimiser un maximum de place. Ci-dessous, une vidéo qui
        démontre l'idée de réserver le compartiment inférieur pour la nourriture
        et de répartir le sac de couchage dans les espaces vaquants du sac à dos
        (traduction automatique recommandée pour les personnes qui ne parle pas
        le Finlandais !) :
      </p>
      <div className={styles.iframeContainer}>
        {" "}
        <iframe
          className={styles.iframe}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xD-uHm9ksI4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ; fullscreen"
        ></iframe>
        <p>
          En plus d'un sursac étanche, je vous recommande chaudement d'investir
          dans des <span className={styles.fat}>sacs étanches</span> (sortes de
          sacs poubelles résistants dans lesquels ranger des affaires) : ils
          aideront à protéger votre matériel de la pluie (essentiel pour les
          objets électroniques !) et vous aideront à organiser et compartimenter
          votre sac à dos.
          <br />
          Il faut comprendre que même avec un sursac, s'il pleut la pluie
          traverse les bretelles par capillarité et rentre dans le sac, d'où
          l'intérêt d'avoir une protection supplémentaire avec les sacs
          étanches. Le port d'un poncho résout le problème de la remontée
          capillaire par les bretelles, mais en cas de grosse pluie même les
          manteaux les plus chers et les sursacs de meilleures gammes saturent
          et laissent l'eau traverser. Donc encore une fois, des sacs étanches,
          c'est vraiment un bon plan.
        </p>
        <p>
          Pour finir cet article, je voulais vous parler du{" "}
          <span className={styles.fat}>
            rangement de votre sac à dos lui-même
          </span>{" "}
          : il est recommandé de le ranger à l'abris de la lumière, au sac et à
          température ambiante, en prenant le soin de déserrer ses sangles (et
          sytème de réglage de hauteur de dos s'il y en a).
        </p>
        <p>
          NB : Je vous invite à saisir votre sac par les bretelles ou la
          poignée, autrement vous pourriez abîmer le tissu ou une fermeture
          éclair, ce que j'ai déjà réussi à faire avec mon premier sac.
        </p>
      </div>
    </>
  );
};

export default SacADos;

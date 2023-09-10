import React, { useState, useEffect, useRef } from "react";
import styles from "../Articles.module.scss";
import Fancybox from "../../../../../Fancybox";
import { NavLink } from "react-router-dom";

//Ci-dessous, permet de faire apparaître un petit bouton de Sommaire à droite après un certain scroll
Fancybox.bind('[data-fancybox="gallery"]', {
  options: {
    compact: false,
  },
});

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

const Temperature = () => {
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

  useEffect(() => {
    //Ci-dessous, permet de changer les classes du petit bouton de sommaire et de son sommaire quand on clique ailleurs pour le faire se retracter

    document.addEventListener("click", resetClasses);
    return () => {
      document.removeEventListener("click", resetClasses);
    };
  }, []);
  return (
    <div>
      <h2 className={styles.h2article}>La température</h2>{" "}
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE- </h4>
          <ol>
            <li>
              <a href="#temperature1">Seulement une question de confort ?</a>
            </li>
            <li>
              <a href="#ptemperature2">Les transferts de température</a>
            </li>
            <li>
              <a href="#temperature3">L'isolation c'est quoi ?</a>
            </li>{" "}
            <li>
              <a href="#temperature4">Se protéger du froid</a>
            </li>{" "}
            <li>
              <a href="#temperature5">Se protéger de la chaleur</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Rien de tel qu'on bon bol d'air frais !"
            className={styles.imgArticle}
            src={require("./img/frozen01.gif")}
            alt="Cerveau en bonne santé"
          />
        </div>
      </div>{" "}
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
                <a href="#temperature1">Seulement une question de confort ?</a>
              </li>
              <li>
                <a href="#temperature2">Les transferts de température</a>
              </li>
              <li>
                <a href="#temperature3">L'isolation c'est quoi ?</a>
              </li>{" "}
              <li>
                <a href="#temperature4">Se protéger du froid</a>
              </li>{" "}
              <li>
                <a href="#temperature5">Se protéger de la chaleur</a>
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
      </div>{" "}
      <div id="temperature1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        1) La température : seulement une question de confort ?
      </h3>
      <div>
        <p>
          Nous voulons toutes et tous passer un bivouac le plus confortablement
          possible, ainsi se sentir à l'aise thermiquement est un des
          ingrédients incontournables.
        </p>
        <p>
          Or la bonne gestion de la température dépasse na notion de confort :
          il s'agit aussi de sécurité et de santé. Ainsi par exemple :
        </p>
        <ul>
          <li>
            - Négliger l'isolation pendant une nuit froide peut entrainer une{" "}
            <a
              href="https://fr.wikipedia.org/wiki/Hypothermie"
              title="Wikipedia hypothermie"
              target="_blank"
              rel="noopener noreferrer"
            >
              hypothermie
            </a>
          </li>
          <li>
            - S'exposer au soleil et aux températures élevées peut provoquer une{" "}
            <a
              href="https://fr.wikipedia.org/wiki/D%C3%A9shydratation_(m%C3%A9decine)"
              title="Wikipedia déshydratation"
              target="_blank"
              rel="noopener noreferrer"
            >
              déshydratation
            </a>
            , qui peut se traduire en randonnée par une fatigue et de vilaines
            courbatures voire des crampes.
          </li>
          <li>
            - Dormir à une température confortable permet de récupérer un
            maximum pendant la nuit. Une mauvaise récupération favorise le
            risque de blessures en plus de vous laisser un triste souvenir de
            votre bivouac !
          </li>
        </ul>
        <p>
          Ainsi donc ça ne rigole pas la bonne gestion de la température ! On va
          maintenant essayer de mieux comprendre comment ça fonctionne et
          comment mieux se préparer ;)
        </p>
      </div>
      <div id="temperature2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Les transferts de température</h3>
      <p>
        Il existe plusieurs moyens à la température d'être transférée d'un
        endroit à l'autre, ici dans le cadre du bivouac je vous présente d'abord
        deux modes de transfert thermiques qui régissent le plus le matériel de
        bivouac : la conduction et la convection.
      </p>
      <div className={styles.doubleArray}>
        <div className={styles.flex1}>
          <h4 className={styles.h4article}>Conduction 💦</h4>
          <ul>
            <li>
              - Transfert de température par{" "}
              <span className={styles.fat}>contact direct</span>, sans mouvement
              de matière. Dans le cadre du bivouac : l'humidité,{" "}
              <span className={styles.fat}>l'eau</span>.
            </li>
            <li>
              - L'intensité de ce transfert dépend des matériaux, l'eau par
              exemple est un excellent conducteur thermique.
            </li>
            <li>
              - Pour s'en protéger,{" "}
              <span className={styles.fat}>
                il faut éviter la présence d'eau dans nos affaires censées nous
                garder au chaud
              </span>
              , un sac de couchage trempé ne sert plus à rien par exemple, car
              si la température extérieure est froide il jouera un rôle de pont
              thermique direct par conduction avec l'air froid extérieur.
            </li>
          </ul>
        </div>
        {/* <div className={styles.versus}>
            <p>Vs</p>
          </div> */}
        <div className={styles.flex1}>
          <h4 className={styles.h4article}>Convection 💨</h4>
          <ul>
            <li>
              - Transfert de température par{" "}
              <span className={styles.fat}>deplacement de matière</span>. Dans
              le cadre du bivouac : <span className={styles.fat}> le vent</span>
              .
            </li>
            <li>
              - L'intensité de ce transfert a tendance à être moindre que la
              conduction. Par exemple de l'air à 15°C se vivra mieux que plonger
              dans de l'eau à 15°C.
            </li>
            <li>
              - Pour s'en protéger,{" "}
              <span className={styles.fat}>
                il faut des affaires à effet "coupe-vent
              </span>
              " (surtout pour la couche externe), en effet plus il y a de vent,
              plus il y a de déplacement de matière donc plus il y a de
              transfert thermique par convection.
            </li>
          </ul>
        </div>
      </div>{" "}
      <p>
        Il existe aussi le{" "}
        <span className={styles.fat}>rayonnement thermique</span>, qui est une
        propagation d’énergie sous forme d’ondes électromagnétiques, sans
        déplacement de matière. On retrouve ce mode de transfert thermique avec
        la chaleur dégagée autour d'un <span className={styles.fat}>feu</span>{" "}
        (au-dessus du feu ce sera de l'air chauffé donc de la convection),{" "}
        <span className={styles.fat}>le soleil</span> ou{" "}
        <span className={styles.fat}>la chaleur produite par notre corps</span>{" "}
        .
      </p>
      <div id="temperature3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) L'isolation c'est quoi ?</h3>
      <p>
        {" "}
        <div
          className={`${styles.imgArticleContainer} ${styles.imgBrightness}`}
        >
          {/* <img
            title="L'air inerte coincé dans les poils de ce chat tout doux le protège du froid"
            className={styles.imgArticleLeft}
            src={require("./img/sleepingBag.png")}
            alt="Sac de couchage"
          /> */}
          <Fancybox
            options={{
              compact: false,
            }}
          >
            <a
              data-fancybox="gallery"
              href={require("./img/isolantBIG.jpg")}
              data-caption="Du duvet utilisé comme isolant de sac de couchage "
            >
              <img
                title="Du duvet utilisé comme isolant de sac de couchage"
                className={styles.imgArticleLeftTop}
                alt="isolant"
                src={require("./img/isolantSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <p>
          Il existe différents types d'isolation, notamment thermique et
          acoustique. Dans le cadre du bivouac, lorsque nous parlerons
          d'isolation il s'agira d'isolation thermique, c'est-à-dire de
          protection contre les différences de température entre notre corps et
          son environnement extérieur.
        </p>
        <p>
          {" "}
          L'isolant basique utilisé dans les équipements voués à nous protéger
          du froid (polaire, sac de couchage, ...) n'est rien d'autre que{" "}
          <span className={styles.fat}>l'air inerte</span> contenu dans les
          matériaux.
        </p>
        Par exemple, le garnissage d'un sac de couchage regroupe une énorme
        quantité de toutes petites poches d'air inerte grâce à son matériau
        (synthétique ou duvet), créant ainsi un bouclier plus ou moins épais et
        efficace contre le froid. Si le garnissage est de bonne qualité, il ne
        s'affaissera pas ou peu avec le temps, gardant ainsi le plus d'air
        inerte en son sein et préservant son pouvoir isolant.{" "}
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
              href={require("./img/douxBIG.jpg")}
              data-caption="L'air inerte coincé dans les poils de ce chat tout doux le protège du froid "
            >
              <img
                title="L'air inerte coincé dans les poils de ce chat tout doux le protège du froid"
                className={styles.imgArticleRightTop}
                alt="isolant"
                src={require("./img/douxSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        <p>
          De la même façon, les animaux à fourrure comme les chats arrivent à
          maintenir leur température corporelle même par temps froid grâce aux
          poches d'air inerte formées par leurs poils. Oui, il y a toujours une
          occasion de parler de chats sur internet !
        </p>
      </p>
      <p className={styles.fat}>
        NB : Les sacs de couchage, polaires ou autres ne CRÉENT PAS de chaleur,
        ils ne font que retenir plus ou moins celle qui s'échappe naturellement
        à travers notre peau par rayonnement thermique. Donc plus l'équipement
        est isolant, plus notre chaleur est gardée et plus on a chaud !
      </p>
      <p className={styles.question}>
        Du coup, comment mieux gérer nos bivouacs maintenant qu'on sait tout ça
        ?
      </p>{" "}
      <div id="temperature4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Se protéger du froid </h3>
      {/* <h5>
        Quelques astuces pour se réchauffer en bivouac, en prenant en compte ce
        qu'on vient d'étudier :
      </h5> */}
      <ul>
        {" "}
        <li>
          - Bien sûr, choisir des{" "}
          <span className={styles.fat}>vêtements adaptés au climat</span> : qui
          tiennent plus ou moins chauds, qui protègent de la pluie, qui ont un
          effet coupe-vent si besoin...{" "}
        </li>{" "}
        <li>
          - Lors de votre choix de matériel, pensez à{" "}
          <span className={styles.fat}>
            {" "}
            prendre un sac de couchage bien à votre taille
          </span>
          . S'il est trop grand l'espace vacant (typiquement au niveau des
          pieds) mettra beaucoup plus de temps à se rechauffer. Et il prendrait
          plus de taille et de poids dans votre sac à dos pour rien. Dans
          l'idéal, choisir un{" "}
          <span className={styles.fat}>
            sac de couchage en forme de "momie"{" "}
          </span>
          , sa coupe étant plus proche du corps (surtout la zone des pieds) il
          vous réchauffera plus vite et sera un peu plus léger qu'un sac de
          couchage rectangulaire.
        </li>
        <li>
          {" "}
          <div className={styles.imgArticleContainer}>
            {" "}
            <img
              className={styles.imgArticleRight}
              id="noBrightness"
              src={require("./img/sleepWarm.gif")}
              alt="Dormir au chaud"
            />
          </div>
          - <span className={styles.fat}>Ne pas rentrer mouillé·e</span> dans un
          sac de couchage.
        </li>
        <li>
          - Faire quelques flexions, pompes, ou n'importe quoi d'autre pour{" "}
          <span className={styles.fat}>
            se réchauffer avant de rentrer dans un sac de couchage
          </span>{" "}
          froid, mais SURTOUT NE PAS TRANSPIRER, sinon vous connaissez la
          chanson : humidité, donc conduction, donc froid !
        </li>
        <li>
          - Bien avoir{" "}
          <span className={styles.fat}>
            la bouche qui communique directement avec l'extérieur
          </span>{" "}
          du sac de couchage : on pourrait penser que c'est une bonne idée de
          laisser l'air chaud qui sort de notre bouche chauffer l'intérieur du
          sac de couchage, mais en fait pas du tout ! On produit beaucoup de
          vapeur d'eau via notre expiration, donc si on expire dans notre sac de
          couchage on aura à nouveau : humidité, conduction et froid ; voire
          moisissures dans l'épaisseur du sac de couchage aussi, au cas où vous
          hésiteriez encore.
        </li>
        <li>
          - Quand on s'allonge dans un sac de couchage, on écrase sa partie
          inférieure. Les poches d'air inerte sont ratatinées, annulant
          l'isolation dans les zones compressées. D'où l'interêt d'avoir un{" "}
          <span className={styles.fat}>isolant sous le sac de couchage </span>
          (matelas gonflable, tapis isolant, ou encore pour les hamacs un
          underblanket , on reparle de ce dernier{" "}
          <NavLink
            className={styles.liNav}
            to="/hamac"
            target="_blank"
            rel="noopener noreferrer"
          >
            dans un article dédié au hamac
          </NavLink>
          ).
        </li>
        <li>
          - {""}
          <span className={styles.fat}>
            Evitez de bivouaquer juste à côté d'un point d'eau
          </span>{" "}
          s'il fait froid, l'air autour de vous serait alors plus humide,
          facilitant la conduction, vous auriez alors plus froid pour rien. Au
          passage s'il pleut le point d'eau grandira et risque d'atteindre votre
          bivouac, donc prudence.
        </li>
        <li>
          - <span className={styles.fat}>Cuisiner en dehors de la tente </span>
          pour éviter d'accumuler les vapeurs d'eau qui viendraient humidifer
          tout ce qu'il y a dans l'habitacle.
        </li>
        <li>
          - Les graisses demandant beaucoup d'énergie pour être digérées, il
          peut être intéressant de{" "}
          <span className={styles.fat}>
            manger des aliments contenant des graisses avant de se coucher
          </span>
          , ainsi notre corps produira plus de chaleur pendant quelques heures.
        </li>
        <li>
          - Bonus pour les personnes les plus motivées : l'urine est chaude,
          ainsi uriner dans une bouteille et placer celle-ci dans son sac de
          couchage peut avoir une fonction{" "}
          <span className={styles.fat}>bouillotte</span> pendant quelques
          heures. Vérifier plusieurs fois que la bouteille est bien fermée ^^'.
        </li>
      </ul>{" "}
      <div id="temperature5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Se protéger de la chaleur</h3>
      <ul>
        <li>
          - Il vaut mieux{" "}
          <span className={styles.fat}>
            éviter de randonner en pleine canicule
          </span>
        </li>
        <li>
          - Les <span className={styles.fat}>vêtements de couleur claire</span>{" "}
          nous gardent plus au frais. Cette vidéo de Scilabius en parle mieux
          que je ne saurais le faire{" "}
          <div className={styles.iframeContainer}>
            {" "}
            <iframe
              className={styles.iframe}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BYgHbAzVDAU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ; fullscreen"
            ></iframe>
          </div>
        </li>
        <li>
          - Petit spoil de la vidéo sus-jacente au cas où vous ne l'auriez pas
          étudiée : en ce qui concerne l'argument "Il faut porter du noir parce
          que les <span className={styles.fat}>Touaregs / Bédouins</span> en
          portent !", certains peuples habitués au désert portent en effet des
          longues robes noires, comme il fait plus chaud sous des vêtements
          noirs et que l'air chaud est moins dense, cela provoque un effet
          d'aspiration de l'air par dessous la robe et qui vient remonter en
          s'échappant par le col, en d'autres termes cela créé un petit courant
          d'air. Donc si une personne porte un t-shirt noir ou une robe noire
          avec une ceinture qui empêche l'effet courant d'air, alors elle ne
          parviendra pas à reproduire cet effet de courant d'air, et aura donc
          plus chaud "pour rien" sous le soleil.
        </li>
        <li>
          - Astuce perso : Je trouve qu'il vaut mieux{" "}
          <span className={styles.fat}>
            garder la peau à l'ombre grâce aux tissus
          </span>{" "}
          (manches longues, chapeau,...) plutôt qu'exposée au soleil et
          recouverte de tonnes de crème solaire qu'il faut entretenir très
          régulièrement. En plus{" "}
          <a
            href="https://setac.onlinelibrary.wiley.com/doi/full/10.1002/etc.4948"
            title="étude sur l'impact des crèmes solaires sur les coraux"
            target="_blank"
            rel="noopener noreferrer"
          >
            la crème solaire ça craint écologiquement
          </a>
          .
        </li>
        <li>
          - Et surtout... <span className={styles.fat}>s'hydrater</span> un
          maximum !! Soit dit en passant les boissons alcoolisées, l'eau de mer
          ou l'urine n'hydratent pas. Donc l'eau, c'est le bien ! 💧
        </li>
      </ul>
    </div>
  );
};
export default Temperature;

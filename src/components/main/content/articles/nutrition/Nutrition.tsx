import React, { useState, useEffect, useRef } from "react";
import styles from "../Articles.module.scss";
import Fancybox from "../../../../../Fancybox";
import { NavLink } from "react-router-dom";

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

const Nutrition = () => {
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
  return (
    <div>
      <h2 className={styles.h2article}>La nutrition</h2>{" "}
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE- </h4>
          <ol>
            <li>
              <a href="#nutrition1">Préambule</a>
            </li>
            <li>
              <a href="#nutrition2">La nourriture dans le sac à dos</a>
            </li>
            <li>
              <a href="#nutrition3">Éléments de nutrition</a>
            </li>{" "}
            <li>
              <a href="#nutrition4">Quid d'une nutrition idéale en rando ?</a>
            </li>{" "}
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Il fallait ce gif pour ce thème, c'était le destin"
            className={styles.imgArticle}
            src={require("./img/eating.gif")}
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
                <a href="#nutrition1">Préambule</a>
              </li>
              <li>
                <a href="#nutrition2">La nourriture dans le sac à dos</a>
              </li>
              <li>
                <a href="#nutrition3">Éléments de nutrition</a>
              </li>{" "}
              <li>
                <a href="#nutritione4">
                  Quid d'une nutrition idéale en rando ?
                </a>
              </li>{" "}
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
      <div id="nutrition1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Préambule</h3>
      <div>
        <p>
          La nutrition est une thématique immensément riche et complexe, nous
          nous contenterons ainsi de quelques notions basiques !
        </p>

        <p>
          Nous nous intéresserons ici à ce que la nutrition a de particulier
          dans le cadre du bivouac et des randonnées, ainsi qu' à une manière
          optimale de gérer son miam-miam pendant de longues excursions, libre à
          vous bien-sûr de festoyer avec des chips de la bière et des sucreries
          ! Mais il y a mieux que ça pour vous donner des forces dans votre
          périple 😉
        </p>
      </div>
      <div id="nutrition2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) La nourriture dans le sac à dos</h3>
      <div className={styles.imgArticleContainer}>
        <img
          title="Pauvre Hobbit tout dépité de ses popotes trop encombrantes !"
          className={styles.imgArticleRightTop}
          src={require("./img/samPots.png")}
          alt="Pauvre Hobbit tout dépité de ses popotes trop encombrantes !"
        />
      </div>
      <p>
        Il y a plusieurs éléments à prendre en compte dans l'équation de la
        gestion de votre sac à dos :
      </p>
      <ul>
        <li>
          <span className={styles.dot}></span> La place prise par les aliments
        </li>{" "}
        <li>
          {" "}
          <span className={styles.dot}></span> Leur poids
        </li>
        <li>
          <span className={styles.dot}></span> L'éventuel matériel lié à leur
          consommation : un plat, des couverts, du feu, une poubelle,...{" "}
        </li>
      </ul>
      <p>
        Regardez ci-contre ce pauvre Hobbit tout dépité de l'excès
        d'encombrement dû à ses ustensibles de cuisine ! Il aurait mieux fait de
        consulter Science et Bivouac !
      </p>
      <p>
        Il est ainsi pertinent de se pencher sur la question de l'intérêt ou non
        d'un réchaud à gaz s'il a juste vocation à se préparer un café le matin
        au réveil. Je vous invite à ce que vous vous posiez la question de{" "}
        <span className={styles.fat}>quels sont vos objectifs</span> de bivouac
        (Confort gustatif ? Légèreté du sac à dos ? Rupture de la routine ?...
        ), car savoir se défaire du dispensable quand on le peut, c'est{" "}
        <span className={styles.fat}>réussir à voyager plus léger</span> et donc
        plus agréablement.
      </p>
      <p>
        Quels formats alimentaires seraient alors idéaux (surtout dans le cadre
        de longues randonnées) ?{" "}
      </p>
      <ul>
        <li>
          {" "}
          <span className={styles.dot}></span>
          Les{" "}
          <span className={styles.fat}>
            plats lyophilisés, plats déshydratés
          </span>{" "}
          : Allégés du poids de l'eau et peuvent être apétissants. Ils peuvent
          se conserver des années (environ 20 ans). Cependant ils impliquent
          d'avoir de quoi chauffer l'eau (cf article sur{" "}
          <NavLink
            className={styles.liNav}
            to="/feu"
            target="_blank"
            rel="noopener noreferrer"
          >
            le feu
          </NavLink>
          ), coûtent cher, et parfois sont nutritivement inutiles. Étudiez bien
          la composition : si c'est une soupe d'arômes, ça ne sert à rien !
        </li>
        <li>
          <span className={styles.dot}></span>
          Les <span className={styles.fat}>rations de survie</span> (type NRG-5)
          : Composées seulement de macro-nutriments (on voit ça plus tard dans
          l'article), elle se conservent également extrêmement longtemps
          (environ 20 ans aussi). Le goût est correct, on dirait de gros
          biscuits sucrés. Pas besoin d'eau ou de chauffage pour leur
          consommation ! Elles coûtent environ 10 € pour les calories de la
          journée, c'est un peu cher mais ça va. Le paquet pour tenir la journée
          pèse 500 g quand même. Elles n'ont pas de vitamine ou
          d'oligo-éléments, ce n'est donc pas non plus un repas complet. En tout
          cas j'en emporte toujours pour mes excursions.
        </li>
        <li>
          <span className={styles.dot}></span>
          Les{" "}
          <span className={styles.fat}>
            barres de fruits secs et oléagnieux
          </span>{" "}
          : Pleines de macro et micro-nutriments. Je pense qu'il faut éviter
          celles du commerce qui ont tendance à être beaucoup trop sucrées. Je
          n'ai pas encore expérimenté de recettes faites-maison, mais ça vaudra
          le coup car ce serait des aliments bons, sains, qui se conservent
          plutôt bien et qui donnent de l'énergie. J'écrirai un article à part
          entière quand j'aurai étudié et testé ça ! Avec un peu de chance il y
          a même peut-être moyen d'en préparer{" "}
          <span className={styles.fat}>sans déchet</span> ! 👌
        </li>
      </ul>
      <div id="nutrition3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Éléments de nutrition</h3>
      <p>
        Il exsite deux grands types de nutriments : les{" "}
        <span className={styles.fat}>macro-nutriments</span> et les{" "}
        <span className={styles.fat}> micro-nutriments</span>.
      </p>{" "}
      <div className={styles.imgArticleContainer}>
        <img
          title="Une devise pleine de sagesse !"
          className={styles.imgArticleLeftTop}
          src={require("./img/karadokLight.png")}
          alt="Le gras c'est la vie !"
        />
      </div>
      <p>
        <span className={styles.dot}></span>
        <span className={styles.fat}>Les macro-nutriments</span> : Regroupent
        les protéines (essentielles aux muscles), les lipides (rôle dans le
        stockage de l'énergie) et les glucides (simples : énergie à court terme,
        ou complexes : énergie à moyen terme). Ils apportent surtout de
        l'énergie sous forme calorique.
      </p>{" "}
      <p>
        <span className={styles.dot}></span>
        <span className={styles.fat}>Les micro-nutriments</span> : Regroupent
        les vitamines, minéraux et oligo-éléments. Ils sont nécessaires au
        fonctionnement complexe de l'organisme.
      </p>
      <p>
        Vous l'aurez compris, ces deux familles de nutriments sont
        complémentaires et essentielles. Une alimentation équilibrée doit
        combiner les deux.
      </p>
      <div id="nutrition4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        4) Quid d'une nutrition idéale en rando ?
      </h3>
      <div className={`${styles.imgArticleContainer} ${styles.imgBrightness}`}>
        <Fancybox
          options={{
            compact: false,
          }}
        >
          <a
            data-fancybox="gallery"
            href={require("./img/plantesBIG.png")}
            data-caption="Quelques plantes comestibles "
          >
            <img
              title="Quelques plantes comestibles"
              className={styles.imgArticleRightTop}
              alt="isolant"
              src={require("./img/plantesSMALL.png")}
            />
          </a>
        </Fancybox>
      </div>
      <p>
        L'avantage d'une randonnée, par définition, c'est qu'on est en
        extérieur, et en extérieur il y a des{" "}
        <span className={styles.fat}>plantes comestibles</span> bourrées de
        micro-nutriments, voire de protéines pour certaines (40% de protéines
        dans les orties, c'est fou non ? Et oui, il y a moyen d'en manger
        extrêmement facilement sans se faire piquer, il suffit de les prendre
        par dessous la feuille et faire rouler cette dernière dans la main).
      </p>
      <p>
        Ainsi, combiner le contenu alimentaire de votre sac à dos à des plantes
        comestibles fraichement récoltées peut être un moyen assez malin
        d'associer facilement macro et micro nutriments. On ne va pas parler
        davatange ici des plantes comestibles, des ouvrages ou probablements des
        applis feront le boulot bien mieux que moi.
      </p>
      <p>
        Je vous invite à nouveau à ce que vous déterminiez{" "}
        <span className={styles.fat}>vos priorités</span> pour vos repas : le
        prix, la qualité nutritionnelle, le goût, le poids,... Et quoiqu'il en
        soit, essayez de manger{" "}
        <span className={styles.fat}>varié, bio, local et de saison</span> dans
        la mesure du possible . Au passage, chercher une{" "}
        <a
          href="https://actualites.funiber.fr/2017/01/10/lassociation-americaine-nutrition-dietetique-regimes-vegetariens-sains#:~:text=L'Acad%C3%A9mie%20am%C3%A9ricaine%20de%20nutrition,en%201987%20et%20actualis%C3%A9e%20r%C3%A9guli%C3%A8rement"
          title="alimentation végétalienne"
          target="_blank"
          rel="noopener noreferrer"
        >
          alimentation végétalienne
        </a>{" "}
        est un moyen simple d'allier santé, éthique et écologie.
      </p>
      <p>
        En ce qui concerne l'hydratation, rappelons que les boissons
        alcoolisées, l'urine ou l'eau de mer n'hydratent pas. Je vous invite à
        investir dans une ou plusieurs gourdes en métal (aluminum, inox ou
        titane pour les plus motivé·es) pour éviter les bouteilles en platique à
        faible durée de vie et et immanquablement polluantes. J'écrirai un
        article sur le matos lié à l'eau prochainement (purification et
        stockage).
      </p>
      <p>
        Pensez aussi à la{" "}
        <span className={styles.fat}>gestion de vos éventuels déchets</span>{" "}
        (quelques petits sacs poubelles par exemple) !{" "}
        <span className={styles.fat}>Agir de manière écologique</span> est une
        condition inaliénable d'un bon bivouac responsable ou d'une bonne rando
        ! 😎
      </p>
    </div>
  );
};
export default Nutrition;

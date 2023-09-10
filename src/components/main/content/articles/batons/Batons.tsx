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

const Batons = () => {
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
      <h2 className={styles.h2article}>Les bâtons</h2>{" "}
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE- </h4>
          <ol>
            <li>
              <a href="#batons1">Préambule</a>
            </li>
            <li>
              <a href="#batons2">
                Avantages d'utiliser des bâtons de randonnée
              </a>
            </li>
            <li>
              <a href="#batons3">Bien utiliser les bâtons</a>
            </li>{" "}
            <li>
              <a href="#batons4">Styles de bâtons et matériaux</a>
            </li>
            <li>
              <a href="#batons5">Pointes et embouts</a>
            </li>
            <li>
              <a href="#batons6">Rondelles</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Un couple de bâtons qui regardent dans la même direction"
            className={styles.imgArticle}
            src={require("./img/batonsIntro.jpg")}
            alt="des bâtons de randonnée"
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
                <a href="#batons1">Préambule</a>
              </li>
              <li>
                <a href="#batons2">
                  Avantages d'utiliser des bâtons de randonnée
                </a>
              </li>
              <li>
                <a href="#batons3">Bien utiliser les bâtons</a>
              </li>{" "}
              <li>
                <a href="#batons4">Styles de bâtons et matériaux</a>
              </li>
              <li>
                <a href="#batons5">Pointes et embouts</a>
              </li>
              <li>
                <a href="#batons6">Rondelles</a>
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
      <div id="batons1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Préambule</h3>
      <div>
        <p>
          Les bâtons de randonnée sont-ils nécessaires ? Pas vraiment,
          d’ailleurs beaucoup de personnes n’en utilisent pas{" "}
          <span className={styles.lineThrough}>
            {" "}
            parce que ce sont des hérétiques
          </span>{" "}
          parce qu’elles sont plus à l’aise ainsi. <br />
          Nous allons tout de même étudier dans un premier temps quelques très
          bonnes raisons d’en utiliser !
        </p>
      </div>
      <div id="batons2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>
        2) Avantages d'utiliser des bâtons de randonnée
      </h3>
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
              href={require("./img/lordBatonBIG.jpg")}
              data-caption="Merci au groupe Facebook Le bivouac (conseils rando, trek et alpinisme) (Source : <a href='https://www.facebook.com/groups/830919723984641' target='_blank'>Facebook Le Bivouac</a>)"
            >
              <img
                title=""
                className={styles.imgArticleRightTop}
                alt="blague"
                src={require("./img/lordBatonSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>{" "}
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Aide en montée
          </span>{" "}
          : Les bâtons soulagent l'effort musculaire car il est alors réparti
          entre les bras et les jambes.
        </li>{" "}
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Aide en descente
          </span>{" "}
          : ils jouent aussi un rôle de stabilisation en descente, surtout en
          terrains hasardeux.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Soulagement des articulations
          </span>{" "}
          : Les articulations (genoux et hanches pour l'essentiel) sont moins
          sollicitées, aidant à les préserver et éviter d'éventuelles douleurs
          pendant la marche.
        </li>{" "}
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Amélioration de la stabilité
          </span>{" "}
          : Les bâtons permettent d'avoir plus de points d'appuis, améliorant la
          stabilité et réduisant le risque de chute.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Tâter le terrain
          </span>{" "}
          : Vous pouvez tâter les terrains incertains avec les bâtons avant d'y
          mettre les pieds.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Amélioration de la posture
          </span>{" "}
          : Lorsqu'ils sont bien utilisés (donc sans chercher à s'affaisser sur
          eux), les bâtons permettent d'avoir un dos plus droit pendant la
          marche, surtout en portant un sac à dos.
        </li>
        <li>
          <span className={styles.fat}>
            <span className={styles.dot}></span>BONUS
          </span>{" "}
          : Ils peuvent aussi sortir de leur rôle premier et être utilisés pour
          établir une tente minimaliste avec un tarp.
        </li>
      </ul>
      <div id="batons3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Bien utiliser les bâtons</h3>
      <p>
        En ce qui concerne la longueur des bâtons, le but du jeu est que{" "}
        <span className={styles.fat}>
          l'angle formé par le coude soit de 90°
        </span>
        . On notera ainsi que dans l'idéal, il faut raccourcir le bâton en
        montée, et le rallonger en descente.
      </p>{" "}
      <div className={styles.imgArticleContainer}>
        {" "}
        <img
          className={styles.imgArticleLeftTop}
          id="noBrightness"
          src={require("./img/dragonne.jpg")}
          alt="dragonne"
        />
      </div>
      <p>
        Autre point très important :{" "}
        <span className={styles.fat}>la dragonne</span> ! Elle n'a pas pour
        objectif d'éviter de perdre le bâton s'il venait à vous échapper, mais
        que votre main soit solidement appuyée dessus pour vous éviter d'avoir à
        serrer très fort les mains autour du manche pendant des heures. <br />
        Une dragonne bien utilisée permet de ne presque plus avoir à "tenir" le
        bâton, qui se tient ainsi tout seul grâce à elle. L'image ci-contre une
        possibilité d'utiliser la dragonne, mais vous pouvez en expérimenter
        d'autres en privilégiant celle avec laquelle vous serez le ou la plus à
        l'aise.{" "}
      </p>{" "}
      <p>
        Il faut que les bâtons soient{" "}
        <span className={styles.fat}>placés latéralement</span> à vous, et pas
        devant votre ventre au risque de vous prendre les pieds dedans, tant
        qu'ils sont placés plus largement que vous, ça fera le job. Petite note
        : je trouve que c'est mieux de s'appuyer sur les bâtons placés un peu
        vers l'arrière pour faciliter la poussée vers l'avant.
      </p>
      <p>
        En ce qui concerne le rythme, il n'y a pas de meilleure école, tout ce
        qui compte c'est que vous soyez à l'aise : les deux bâtons en même
        temps, en même temps que les pieds et du même côté, ou l'inverse,...
        L'idée aussi n'est pas de les traîner, mais bien que vous{" "}
        <span className={styles.fat}>vous appuyez dessus</span> pour profiter de
        leurs avantages.
      </p>
      <div id="batons4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Styles de bâtons et matériaux</h3>
      <ul>
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
              href={require("./img/clipsBIG.jpg")}
              data-caption="un système de clips (ici dévérouillé, on peut ensuite régler le serrage et le vérouiller)"
            >
              <img
                title="Des embouts de bâtons de randonnée comme il en existe plein d'autres"
                className={styles.imgArticleLeftTop}
                alt="clips"
                src={require("./img/clipsSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>{" "}
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Bâtons téléscopique à visser
          </span>{" "}
          : Il semblerait qu'ils sont peu produits maintenant, les bâtons ayant
          tendance à se dévisser et se rétracter tout seuls au cours de la
          marche.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Bâtons téléscopique à clipser
          </span>{" "}
          : Ceux là sont faciles à utiliser et ne risquent pas de se dévisser !
          C'est personnellement ce que j'ai et j'en suis content.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Bâtons pliables
          </span>{" "}
          : En général fragiles et pas réglables en hauteur. Ils ont tout de
          même l'avantage de prendre peu de places une fois rangés et à être
          rapides à déplayer.
        </li>
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Matériaux du corps du bâton
          </span>{" "}
          : <br />- aluminium : plus solide que le carbone et moins cher, mais
          un peu plus lourd <br /> - carbone : moins de vibration, ultra léger,
          mais un peu fragile et cher.
        </li>{" "}
        <li>
          <span className={styles.fat}>
            {" "}
            <span className={styles.dot}></span>Matériaux du manche
          </span>{" "}
          : <br />- liège : évacue la transpiration des mains. <br /> - mousse :
          évacue la transpiration aussi, plus léger mais durée de vie assez
          faible. <br /> - caoutchouc : adapté par temps froids car résistant à
          l’eau et isole, par contre il glisse avec la transpiration s’il fait
          chaud.
        </li>
      </ul>
      <p>
        Ainsi donc comme bien souvent en ce qui concerne le matériel, il n'y a
        pas de bâton de randonnée ultime, ce qui compte est que vous déterminiez
        vos priorités : poids des bâtons, place quand ils sont rangés, climat,
        ...
      </p>
      <div id="batons5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Pointes et embouts</h3>
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
              href={require("./img/tipsBIG.jpg")}
              data-caption="Des embouts de bâtons de randonnée comme il en existe plein d'autres"
            >
              <img
                title="Des embouts de bâtons de randonnée comme il en existe plein d'autres"
                className={styles.imgArticleRightTop}
                alt="Embouts de bâton de randonnée"
                src={require("./img/tipsSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>{" "}
        <span className={styles.dot}></span>
        <span className={styles.fat}>Les pointes</span> : Il existe deux types
        de matériaux pour les pointes : en acier et en carbure. Les pointes en
        acier sont moins durables dans le temps, elles sont alors plus adaptées
        pour les randonnées ou marches occasionnelles. <br /> Les pointes en
        carbure sont plus résistantes que celles en acier, elles sont donc
        conseillées pour une utilisation plus régulière.
      </p>
      <p>
        {" "}
        <span className={styles.dot}></span>
        <span className={styles.fat}>Les embouts</span> : Accrochés au bout du
        bâton, ils permettent d'amortir les vibrations, faire moins de bruit,
        d'éviter d'âbimer le sac quand ils y sont rangés. Ils sont tout à fait
        adaptés pour la marche sur une route. <br /> Leur avantage majeur est
        qu'ils évitent d'abîmer les sentiers de randonnée, à tel point qu'ils
        sont <span className={styles.fat}>obligatoires</span> sur plusieurs
        sentiers de grande randonnée !
      </p>
      <p>
        En ce qui me concerne et dans une perspective de preserver la nature, je
        les mets tout le temps, ils sont de surcroît étonnamment résistants.{" "}
      </p>
      <div id="batons6" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>6) Rondelles</h3>
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
              href={require("./img/basketsBIG.jpg")}
              data-caption="Des embouts de tailles et de formes différentes pour des terrains différents "
            >
              <img
                title="Des embouts de tailles et de formes différentes pour des terrains différents"
                className={styles.imgArticleLeftTop}
                alt="Rondelles de bâton de randonnée"
                src={require("./img/basketsSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Les rondelles ne sont utiles que dans des situations précises, comme la
        marche sur la boue, le sable ou la neige. J'ai lu quelque part que les
        rondelles étaient aussi utiles entre deux rochers, mais je doute que
        leur résistance soit à l'épreuve de cette situation de nombreuses fois.
      </p>
      <p>
        La rondelle a pour fonction d'{" "}
        <span className={styles.fat}>
          éviter que le bâton ne s'enfonce dans une surface
        </span>
        , préservant les avantages des bâtons de randonnée.
      </p>
      <p>
        {" "}
        Les rondelles ont différents diamètres, grossièrement on pourrait dire
        que : <br />
        - les petites rondelles (environ 50mm) limitent les chances qu'un bâton
        se coince entre deux rochers.
        <br />
        - les moyennes (environ 80mm) sont adaptées au sable et à la boue.
        <br />- les grandes (environ 120mm) sont adaptées à la neige.
      </p>
      <p>
        Personnellement, pratiquant des chemins de randonnée "de campagne", je
        n'utilise jamais de rondelles.
      </p>
    </div>
  );
};
export default Batons;

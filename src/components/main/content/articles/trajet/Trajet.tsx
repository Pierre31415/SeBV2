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

const Trajet = () => {
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
      <h2 className={styles.h2article}>Préparer le trajet</h2>
      <div className={styles.sommaireSideContainer}>
        <div className={styles.sommaire}>
          <h4>- SOMMAIRE -</h4>
          <ol>
            <li>
              <a href="#trajet1">Prélude</a>
            </li>
            <li>
              <a href="#trajet2">Quels objectifs ?</a>
            </li>
            <li>
              <a href="#trajet3">Transport</a>
            </li>{" "}
            <li>
              <a href="#trajet4">Météo</a>
            </li>{" "}
            <li>
              <a href="#trajet5">Lieux stratégiques</a>
            </li>
            <li>
              <a href="#trajet6">Quid de la chasse ?</a>
            </li>{" "}
            <li>
              <a href="#trajet7">Bonus sécurité</a>
            </li>
          </ol>
        </div>
        <div className={styles.sommaireSide}>
          <img
            title="Un sac à dos sûrement léger"
            className={styles.imgArticle}
            src={require("./img/plan.gif")}
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
                <a href="#trajet1">Prélude</a>
              </li>
              <li>
                <a href="#trajet2">Quels objectifs ?</a>
              </li>
              <li>
                <a href="#trajet3">Transport</a>
              </li>{" "}
              <li>
                <a href="#trajet4">Météo</a>
              </li>{" "}
              <li>
                <a href="#trajet5">Lieux stratégiques</a>
              </li>
              <li>
                <a href="#trajet6">Quid de la chasse ?</a>
              </li>{" "}
              <li>
                <a href="#trajet7">Bonus sécurité</a>
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
      <div id="trajet1" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>1) Prélude</h3>
      <p>
        Mieux vous organiserez votre trajet, mieux votre aventure se passera sur
        tous les plans. Passons en revue quelques éléments qui méritent que vous
        les étudiez avant de partir en excursion !
      </p>
      <div id="trajet2" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>2) Quels objectifs</h3>{" "}
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
              href={require("./img/objectifBIG.jpg")}
              data-caption="Un objectif sain"
            >
              <img
                title="Un objectif sain"
                className={styles.imgArticleLeftTop}
                alt="coopération"
                src={require("./img/objectifSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Je vous invite à ce que vous vous demandiez quels sont vos objectifs :
        en effet, souhaitez vous surtout contempler de beaux paysages, ou vous
        dépasser physiquement en marchant le plus longtemps possible, ou encore
        souhaitez-vous essentiellement vous ressourcer ?
      </p>
      <p>
        Parallèlement, si vous êtes accompagné(e) par une ou plusieurs
        personnes, il est alors pertinent que vous vous concertiez sur un
        <span className={styles.fat}> objectif commun</span> qui soit en mesure
        de satisfaire le mieux possible le groupe, quitte à faire des compromis.
      </p>
      <div id="trajet3" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>3) Transport</h3>{" "}
      <p>
        {" "}
        <div className={styles.imgArticleContainer}>
          <img
            title="Dormir en train"
            className={styles.imgArticleRightTop}
            id="noBrightness"
            src={require("./img/trainNap.gif")}
            alt="Dormir en train"
          />
        </div>
        La question du transport que vous utiliserez pour débuter votre aventure
        mérite véritablement le détour. Par exemple, est-ce vraiment une bonne
        idée de commencer une randonnée juste après avoir conduit pendant 10
        heures (À vous de voir, personnellement la conduite m’épuise) ? Où
        comptez-vous{" "}
        <span className={styles.fat}>
          garer votre voiture pour qu’elle soit en sécurité
        </span>{" "}
        (demander à une gendarmerie locale peut être un bon plan soit-dit en
        passant) ? Si vous avez acheté une reservation pour un bus ou un train
        pour le retour, avez-vous un <span className={styles.fat}>plan B</span>{" "}
        si vous n’êtes pas revenu(e) dans les temps ?
      </p>
      <p>
        {" "}
        Prenez en compte la{" "}
        <span className={styles.fat}>forme de votre trajet</span> : si c'est ce
        n'est pas une <span className={styles.fat}>boucle</span>, alors la
        voiture n'est peut-être pas un plan optimal ?
      </p>
      <p>
        En ce qui concerne les tarifs, le prix de l'essence est monstrueux,
        ainsi que celui des trains. Sur quelques trajets que j'ai étudiés, le
        trajet en train revenait 15% plus cher que celui en voiture, ce qui
        n'est pas énorme comme différence, mais au moins{" "}
        <span className={styles.fat}>en train on peut se reposer</span> ! Notre
        voiture ne risque pas de s'âbimer quand on voyage en train ou d'être
        endommagée sur un parking loi de chez nous. Cependant les horaires des
        trains peuvent être très contraignantes.
      </p>
      <p>
        Il y a bien-sûr d'autres modalités de transport comme le bus, le taxi,
        le covoiturage,...
      </p>
      <p>
        À vous donc de voir ce qui vous semble le plus adapté ! Personnellement
        je mise surtout sur le train (le fait de pouvoir se reposer est un
        avantage massif), en second le bus même si j'ai le mal des transports,
        puis la voiture.
      </p>
      <div id="trajet4" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>4) Météo</h3>{" "}
      <p>
        {" "}
        <div className={styles.imgArticleContainer}>
          <img
            title="La météo avait prévu un temps clair et dégagé"
            className={styles.imgArticleLeftTop}
            id="noBrightness"
            src={require("./img/meteo.gif")}
            alt="Pluie"
          />
        </div>
        <span className={styles.citation}>
          "La météo est une science qui permet de connaître le temps qu'il
          aurait dû faire."
        </span>{" "}
        (Philippe Bouvard)
      </p>
      <p>
        Étudiez bien la météo, en prenant en compte sa plus ou moins grande
        marge d'erreur, et comparez-la à vos exigences. Par exemple si je suis
        bien équipé, j’aime bien marcher sous la pluie, alors que pour d’autres
        personnes s’il pleut ce n’est même pas la peine de sortir. Je me permets
        de vous inviter à vous{" "}
        <span className={styles.fat}>
          équiper contre la pluie pour toutes vos longues excursions
        </span>
        , même si la météo prétend être clémente . Notez aussi que cette
        dernière est changeante très rapidement en montagne !
      </p>
      <div id="trajet5" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>5) Lieux stratégiques</h3>
      <p>
        {" "}
        <p>
          En vous appuyant sur une carte, des guides ou des retours de personnes
          ayant déjà le fait le trajet (internet est là pour ça aussi !),
          essayez d'anticiper les{" "}
          <span className={styles.fat}>points d'accès à l'eau</span>, voire
          encore mieux à l'eau potable.
        </p>
        <p>
          Il est important de se renseigner aussi sur les{" "}
          <span className={styles.fat}>
            espaces naturels ou autres zones interdisant le bivouac
          </span>{" "}
          (le mieux est alors de consulter l'office du tourisme).
        </p>
      </p>
      <div id="trajet6" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>6) Quid de la chasse ?</h3>{" "}
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
              href={require("./img/chasseursBIG.jpg")}
              data-caption="Et si on inversait les rôles ? (Auteur : <a href='https://www.blagues-et-dessins.com/chasseurs-randonneurs-et-si-on-inversait-les-roles/' target='_blank'>Sanaga</a>)"
            >
              <img
                title="Et si on inversait les rôles ?"
                className={styles.imgArticleRightTop}
                alt="humour"
                src={require("./img/chasseursSMALL.jpg")}
              />
            </a>
          </Fancybox>
        </div>
        Des randonneuses et randonneurs meurent chaque année sous les tirs des
        chasseurs, même en utilisant les sentiers de randonnées balisés…
        Certains sites nous incitent à nous renseigner auprès de la fédération
        de chasse locale, de la préfecture, et de chaque propriétaire ayant un
        bout de terrain à proximité de votre trajet et susceptible de chasser,
        avant de se promener en gilet fluorescent et de signaler sa présence à
        haute voix et en sifflant régulièrement… Et encore, ça ne prend pas en
        compte les braconniers. C’est de la folie. Alors que nous voulons juste
        marcher et bivouaquer sereinement sans se faire tirer dessus.
      </p>
      <p>
        Il semblerait tristement que{" "}
        <span className={styles.fat}>
          si vous voulez éviter au maximum les risques liés à la pratique de la
          chasse, le mieux est alors d’éviter les randonnées pendant l’hiver
        </span>
        . En ce qui me concerne, je bivouaque tout de même pendant l'hiver reclu
        dans mon petit coin de forêt qui est épargné pour le moment.
      </p>
      <div id="trajet7" className={styles.linkSommaire}></div>
      <h3 className={styles.h3article}>7) Bonus sécurité</h3>
      <p>
        Il est pertinent de{" "}
        <span className={styles.fat}>prévenir une ou plusieurs personnes</span>{" "}
        avant de partir à l’aventure. Petite astuce bonus : chaque matin,{" "}
        <span className={styles.fat}>
          changez votre messagerie vocale pour indiquer où vous êtes et où vous
          vous dirigez
        </span>
        , ainsi si votre aventure tourne mal cela pourra faciliter la venue des
        secours !
      </p>
    </>
  );
};

export default Trajet;

import React, { Component } from "react";
import styles from "./Articles.module.scss";
import Fancybox from "../../../../Fancybox";

Fancybox.bind('[data-fancybox="gallery"]');
document.querySelectorAll('[data-fancybox="gallery"]');

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.h2article}>
          Salutations aventurières et{""}
          <span className={styles.noWrap}>aventuriers !</span>
        </h2>
        <div className={styles.accueil}>
          <div className={styles.accueilMain}>
            <div className={styles.accueilImg}>
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href={require("./img/accueilSide01BIG.jpg")}
                  data-caption="Le bivouac est une belle occasion de rencontrer ce que la science a à offrir !"
                >
                  <img
                    className={styles.accueilImg}
                    alt=""
                    src={require("./img/accueilSide01.jpg")}
                  />
                </a>
              </Fancybox>
            </div>
            <div className={styles.accueilText}>
              <p>
                Ici on parle de <strong className={styles.fat}>bivouac</strong>,
                et de <strong className={styles.fat}>trucs et astuces</strong>{" "}
                pour vous aider préparer un{" "}
                <span className={styles.noWrap}>bivouac tip-top ! 👌 </span>{" "}
              </p>

              <p>
                {" "}
                <span className={styles.noWrap}>
                  Le tout assaisonné avec
                </span>{" "}
                de la <strong className={styles.fat}>science</strong> parce que
                c’est la classe 😺, ou alors parce que c’est tout simplement le
                meilleur outil pour nous permettre de comprendre notre monde et
                certains aspects du bivouac !{" "}
              </p>

              <h3 className={styles.h3accueil}>
                Bonne lecture, bons bivouacs à toutes et à tous,
                <span className={styles.noWrap}>et vive la science !</span>
              </h3>
            </div>{" "}
            <div className={styles.accueilImg2}>
              <Fancybox>
                <a
                  data-fancybox="gallery"
                  href={require("./img/accueilSide01BIG.jpg")}
                  data-caption="Le bivouac est une belle occasion de rencontrer ce que la science a à offrir !"
                >
                  <img
                    className={styles.accueilImg2}
                    alt=""
                    src={require("./img/accueilSide01.jpg")}
                  />
                </a>
              </Fancybox>
            </div>
          </div>

          <div className={styles.imgArticleContainer}>
            {/* <Fancybox>
              <a
                data-fancybox="gallery"
                href={require("./img/accueilSide01BIG.jpg")}
                data-caption="Un bivouac avec un beau point de vue, c'est toujours mieux n'est-il pas ?"
              >
                <img alt="" src={require("./img/accueilSide01.jpg")} />
              </a>
            </Fancybox> */}
          </div>
        </div>
      </div>
    );
  }
}

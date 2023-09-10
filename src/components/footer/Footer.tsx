import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <div>
        <h4>À propos du site</h4>
        <p>
          Conception, développement et maintenance par{" "}
          <a
            href="https://www.linkedin.com/in/pierre-isidore-668180244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pierre ISIDORE
          </a>
          .
        </p>
        <p>
          Site créé dans le respect des standards W3C et de l'accessibilité, en
          CSS, HTML et JavaScript.
        </p>
        <p>
          Ce site est hébergé par{" "}
          <a
            href="https://www.hostinger.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hostinger
          </a>
          .
        </p>
      </div>

      <div>
        {" "}
        <h4>Mentions légales</h4>
        <p>Copyright © 2023 Science & Bivouac</p>
        <p>
          Science et Bivouac est un site sans vocation commerciale, et ne
          recourt à aucun sponsor ou affiliation. L'objectif est de rester
          objectif.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

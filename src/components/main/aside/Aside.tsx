import styles from "./Aside.module.scss";
import imgAside from "./sawing.gif";

function Aside() {
  return (
    <div className={styles.aside}>
      <h2 className="my-30">Site en construction !</h2>
      <img
        className={styles.imgAside}
        src={imgAside}
        alt="en cours de travaux"
      />
      <p>
        Ce site n'en est qu'à ses tout débuts, plein de choses sont à venir tant
        sur le fond que sur la forme ! Bon séjour à vous sur ce site qui
        s'épanouit !
      </p>
    </div>
  );
}

export default Aside;

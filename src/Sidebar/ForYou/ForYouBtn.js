import styles from "./ForYouBtn.module.scss";
import { Link } from "react-router-dom";

export function ForYouBtnUnactive({ img, description, onClick }) {
  return (
    <Link to = {'/ForYouPage'}>
      <button id={styles.button} onClick={onClick}>
        <img className={styles.img} src={img} alt={description}></img>
        <h2 className={styles.h2Active}>{description}</h2>
      </button>
    </Link>
  );
}
export function ForYouBtnActive({ img, description, onClick }) {
  return (
    <Link to = {'/ForYouPage'}>
      <button id={styles.button} onClick={onClick}>
        <img className={styles.img} src={img} alt={description}></img>
        <h2 className={styles.h2Unactive}>{description}</h2>
      </button>
    </Link>
  );
}

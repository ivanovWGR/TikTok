import styles from "./FollowingBtn.module.css";

export function FollowingBtnUnactive({ img, description, onClick, style }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.img} src={img} alt={description}></img>
      <h2 className={styles.h2Unactive}>{description}</h2>
    </button>
  );
}

export function FollowingBtnActive({ img, description, onClick, style }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.img} src={img} alt={description}></img>
      <h2 className={styles.h2Active}>{description}</h2>
    </button>
  );
}

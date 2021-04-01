import styles from "./UserItem.module.css";

export default function UserItem({ img, userName, name }) {
  return (
    <div className={styles.user}>
      <div className={styles.userItem}>
        <div>
          <img src={img} alt={userName} className={styles.userImg}></img>
        </div>
        <div className={styles.userInfo}>
          <h3 className={styles.h4}>{userName}</h3>
          <p className={styles.p}>{name}</p>
        </div>
      </div>
    </div>
  );
}

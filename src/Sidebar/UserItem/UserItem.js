import styles from "./UserItem.module.scss";
import { Link } from "react-router-dom";

export default function UserItem({id, img, userName, name }) {
  return (
    <Link to = {`/user/${id}`}>
      <div id={styles.user}>
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
    </Link>
  );
}

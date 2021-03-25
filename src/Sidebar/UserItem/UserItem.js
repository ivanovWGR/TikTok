import styles from './UserItem.module.css'
import UserImg from "../../date/img/user.jpeg";
export default function UserItem() {
    return (
      <div className={styles.userItem}>
        <div>
          <img src={UserImg} alt="User" className = {styles.userImg}></img>
        </div>
        <div className={styles.userInfo}>
          <h3 className = {styles.h4}>Stavrvbdandan asdf hd dfhdf hdh fi</h3>
          <p className = {styles.p}>Stavri Dimitrow</p>
        </div>
      </div>
    );
  }
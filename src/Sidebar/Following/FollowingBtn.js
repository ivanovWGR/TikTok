import styles from './FollowingBtn.module.css'
import followUnactive from '../../date/img/followUnactive.png'
import followActive from '../../date/img/followActive.png'
export default function FollowingBtn({onClick}) {
    return <button className={styles.button} onClick={onClick}><img src = {followUnactive}></img><h2>Following</h2></button>;
}
   
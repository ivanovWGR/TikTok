import styles from './ForYouBtn.module.css'
import logo from '../../date/img/forYouUnactive.png'
export default function ForYouButton({onClick}) {
    return <button className={styles.button} onClick={onClick}><img src={logo}></img><h2>For You</h2></button>;
}
   
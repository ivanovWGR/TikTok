import styles from "../Login.module.css"
import {FaTwitter} from 'react-icons/fa'

export default function UseTwitter({text}) {
    return (
        <div className={styles.choiceWrapper}>
            <div className={styles.iconDiv}>
                <FaTwitter fill="#3b5998" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}
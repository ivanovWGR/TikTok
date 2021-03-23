import styles from "../Login.module.css"
import {FaQrcode} from 'react-icons/fa'

export default function UseTwitter({text}) {
    return (
        <div className={styles.choiceWrapper}>
            <div className={styles.iconDiv}>
                <FaQrcode />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}
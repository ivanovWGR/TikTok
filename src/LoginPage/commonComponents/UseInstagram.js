import styles from "../Login.module.css"
import { FaInstagramSquare } from 'react-icons/fa'

export default function UseInstagram({text}) {
    return (
        <div className={styles.choiceWrapper}>
            <div className={styles.iconDiv}>
                <FaInstagramSquare fill="#3f729b" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}
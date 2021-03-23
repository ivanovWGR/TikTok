import styles from "../Login.module.css"
import { FcGoogle } from 'react-icons/fc'

export default function UseGoogle({text}) {
    return (
        <div className={styles.choiceWrapper}>
            <div className={styles.iconDiv}>
                <FcGoogle fill="#3b5998" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}
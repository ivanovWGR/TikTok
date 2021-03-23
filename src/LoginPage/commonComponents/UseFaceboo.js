import styles from "../Login.module.css"
import {FaFacebook} from 'react-icons/fa'

export default function UseFacebook({text}) {
    return (
        <div className={styles.choiceWrapper}>
            <div className={styles.iconDiv}>
                <FaFacebook fill="#3b5998" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}
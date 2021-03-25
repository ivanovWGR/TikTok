import { BiUser } from 'react-icons/bi'
import styles from "../Login.module.css"

export default function UseEmail({ text, onClick }) {

    return (
        <div onClick={onClick} className={styles.choiceWrapper}>
            <div className={styles.iconDiv}>
                <BiUser />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}
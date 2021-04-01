import { BiChevronUp } from "react-icons/bi";
import styles from "./SeeLessBtn.module.css";
export default function SeeLessButton({ onClick }) {
  return (
    <div className={styles.containerSeeLess} onClick={onClick}>
      <p className={styles.seeLess}>See less</p>
      <BiChevronUp className={styles.svg} />
    </div>
  );
}

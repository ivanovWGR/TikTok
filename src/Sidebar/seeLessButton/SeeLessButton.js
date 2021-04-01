import { BiChevronUp } from "react-icons/bi";
import styles from "./SeeLessBtn.module.scss";
export default function SeeLessButton({ onClick }) {
  return (
    <div id={styles.containerSeeLess} onClick={onClick}>
      <p className={styles.seeLess}>See less</p>
      <BiChevronUp className={styles.svg} />
    </div>
  );
}

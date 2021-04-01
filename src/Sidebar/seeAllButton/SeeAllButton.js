import { BiChevronDown } from "react-icons/bi";
import styles from "./SeeAllBtn.module.css";
export default function SeeAllButton({ onClick }) {
  return (
    <div className={styles.containerSeeAll} onClick={onClick}>
      <p className={styles.seeAll}>See all</p>
      <BiChevronDown className={styles.svg} />
    </div>
  );
}

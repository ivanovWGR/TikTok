import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"

import HeaderRightDivUserNot from "./HeaderRightDivUserNot"
import HeaderRightDivUserYes from "./HeaderRightDivUserYes"
import styles from './Header.module.scss'

export default function HeaderComp({ isUserLoggedIn }) {
    return (
        <div className={styles.header}>
            <span>
                <Link to="/" >
                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg" alt="sign" />
                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg" alt="sign" />
                </Link>
            </span>
            <form>
                <input type="text" placeholder="Search accounts"></input><span>|</span>
                <button type="submit"><FaSearch /></button>
            </form>
            {isUserLoggedIn ?  <HeaderRightDivUserYes />: <HeaderRightDivUserNot /> }
        </div>


    )
}
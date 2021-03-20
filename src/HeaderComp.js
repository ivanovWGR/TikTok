import { FaSearch } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function HeaderComp() {
    return (
        <div className="header">
            <span>
                <a href="https://tiktok.com" target="_blank">
                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg" alt="sign" />
                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg" alt="sign" />
                </a>
            </span>
            <form>
                <input type="text" placeholder="Search accounts"></input><span>|</span>
                <button type="submit"><FaSearch /></button>
            </form>

            <div id = "headerRightWrapper">
                <button id= "upload" >
                    <span>Upload</span></button>
                <button id="loginBtn">Log in</button>

                <button id= "dotsMenu">
                    <HiOutlineDotsVertical />
                </button>


            </div>

        </div>


    )
}
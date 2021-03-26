import React, {useState}  from 'react'

import { RiUploadCloudLine, RiSettings5Line } from "react-icons/ri"
import { BiMessageAltMinus, BiUser, BiHelpCircle } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import {FiLogIn} from "react-icons/fi"
import {GrLanguage} from "react-icons/gr"
import { Tooltip} from "antd"
import { formatCountdown } from 'antd/lib/statistic/utils';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss'




function HeaderRightDivUserYes() {
    const [isShown, setIsShown] = useState(false);
    return (
        <div id={styles.headerRightWrapperUserOnline}>

            <Link to='/upload'>
            <button className={styles.userLoggedInSideMenu} >
                <Tooltip title="Upload video"
                    placement="bottom"
                    id="tooltip">
                    <RiUploadCloudLine />
                </Tooltip>
            </button>
            </Link>
            


            <button className={styles.userLoggedInSideMenu} >
                <Tooltip title="Inbox"
                    placement="top"
                    id="tooltip">
                    <BiMessageAltMinus />
                </Tooltip>
            </button>

            <span className={styles.profileIconSpan} id={styles.profileIconSpan}
            onMouseEnter = {()=> setIsShown(true)}
            onMouseLeave = {()=> setIsShown(false)}
            ><CgProfile /></span>

            {isShown && <div className={styles.navHoverMenu}
            onMouseEnter = {()=>setIsShown(true)}
            onMouseLeave = {()=> setIsShown(false)}
            >
                <div><a href="#"> <span> <BiUser/> </span> <span>View profile</span> </a> </div>
                <div><a href="#"> <span> <RiSettings5Line/></span> Settings</a></div>
                <div><a href="#"><span> <GrLanguage/></span> Language</a></div>
                <div><a href="#"> <span> <BiHelpCircle/></span> Feeback and help</a></div>
                <div id="logOutDiv"><a href="#"><span> <FiLogIn/></span> Log out </a></div>
            </div>}           

        </div>
    )
}

export default HeaderRightDivUserYes

import React, { useState, useEffect } from 'react'
import firebase, { DataBase } from '../firebase'
import { Link, useHistory } from 'react-router-dom'

import { RiUploadCloudLine, RiSettings5Line } from "react-icons/ri"
import { BiMessageAltMinus, BiUser, BiHelpCircle } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FiLogIn } from "react-icons/fi"
import { Tooltip } from "antd"
import styles from './Header.module.scss'


function HeaderRightDivUserYes({ currentUserId }) {
    const [isShown, setIsShown] = useState(false);
    const [user, setUser] = useState({})
    const history = useHistory()
    // const toolTip = useRef(null)
    useEffect(() => {
        let clear = true;
        DataBase.collection('users').doc(currentUserId).get()
        .then((res) => {
            if (clear) {
                setUser({ ...res.data() })
            }

        })
            .catch((err) => {
                console.log(err)
            })
        return () => !clear
    }, [currentUserId])
    const logOut = () => {
        firebase.auth().signOut().then(() => {
            history.push('/');
        }).catch((error) => {
            console.log('logout err', error)
        });
    }
    return (
        <div id={styles.headerRightWrapperUserOnline}>

            <Link to='/upload'>
                <button className={styles.userLoggedInSideMenu} >
                    <Tooltip title="Upload video"
                        placement="bottom"
                        id="tooltip"
                    >
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

            <span className={user.photoUrl ? styles.profilePic: styles.profileIconSpan} id={styles.profileIconSpan}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >{user.photoUrl ?
                <img className={styles.headerAvatar} src={user.photoUrl} width={'100%'} alt='avatar' /> :
                <CgProfile />}</span>

            {isShown && <div className={styles.navHoverMenu}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <div><Link to='/userprofile'><span> <BiUser /> </span> <span>View profile</span></Link> </div>
                {/* <div><a href="#"> <span> <RiSettings5Line /></span> Settings</a></div>
                <div><a href="#"><span> <GrLanguage /></span> Language</a></div>
                <div><a href="#"> <span> <BiHelpCircle /></span> Feeback and help</a></div> */}
                <div id="logOutDiv" onClick={logOut}><a href="#"><span> <FiLogIn /></span> Log out </a></div>
            </div>}

        </div>
    )
}

export default HeaderRightDivUserYes

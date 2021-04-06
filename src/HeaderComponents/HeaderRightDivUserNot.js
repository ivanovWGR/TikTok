import React, { useState } from 'react'
import LoginPage from "../LoginPage/LoginPage"
import styles from './Header.module.scss'
import LoginBtnsModal from '../LoginBtnsModal'


function HeaderRightDivUserNot() {

    const [isModalShown, showModal] = useState(false)
    function bringModal() {
        showModal(true)
    }
    function closeModal() {
        showModal(false)
    }
console.log(LoginPage)
    return (
        <div id={styles.headerRightWrapper}>
            <button id={styles.upload} onClick={bringModal} >
                <span>Upload</span></button>
            <button id={styles.loginBtn} onClick={bringModal}>Log in</button>
            <LoginBtnsModal closeModal = { closeModal } isModalShown ={isModalShown} onCancel={closeModal}/>           
            
        </div>
    )
}
export default HeaderRightDivUserNot

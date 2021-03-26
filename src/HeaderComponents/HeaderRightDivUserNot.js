import React, { useState } from 'react'
import { Modal } from 'antd'
import LoginPage from "../LoginPage/LoginPage"
import styles from './Header.module.scss'
import { HiOutlineDotsVertical } from "react-icons/hi";


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
            <button id={styles.upload} >
                <span>Upload</span></button>
            <button id={styles.loginBtn} onClick={bringModal}>Log in</button>
            <Modal
                // title="Basic Modal"
                visible={isModalShown}

                onCancel={closeModal}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                footer ={null}
                // className = {styles.loginPageRooter}
                mask={true}
                width= "600px"
                bodyStyle ={{
                    height: "700px",
                    resize: "none"
                }}
                
            >                
                <LoginPage />              
               
                
            </Modal>

            {/* <button id="dotsMenu">
                <HiOutlineDotsVertical />
            </button> */}
        </div>
    )
}
export default HeaderRightDivUserNot

import styles from './SidebarLoginButton.module.css'
import React, { useState } from 'react'
import { Modal } from 'antd'
import LoginPage from "../../LoginPage/LoginPage"


export default function SidebarLoginBtutton ({onClick}) {

    const [isModalShown, showModal] = useState(false)
    function bringModal() {
        showModal(true)
    }
    function closeModal() {
        showModal(false)
    }
    // const modal = Modal.info()
    // console.log(modal)
    return (
        <div className = {styles.sidebarLoginBtn}>
            <div><span className = {styles.span}>Log in to follow creators, like videos, and view comments.</span></div>
            <button className = {styles.button} onClick={bringModal}>Login</button>
            <Modal               
                visible={isModalShown}
                destroyOnClose
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
                <LoginPage destroyModal = {closeModal} />              
               
                
            </Modal>
        </div>
    )
}
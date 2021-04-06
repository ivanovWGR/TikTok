import styles from "./SidebarLoginButton.module.scss";
import React, { useState } from "react";
import { Modal } from "antd";
import LoginPage from "../../LoginPage/LoginPage";



export default function SidebarLoginBtutton () {

    const [isModalShown, showModal] = useState(false)
    function bringModal() {
        showModal(true)
    }
    function closeModal() {
        showModal(false)
    }    
    return (
        <div id = {styles.sidebarLoginBtn}>
            <div><span className = {styles.span}>Log in to follow creators, like videos, and view comments.</span></div>
            <button className = {styles.button} onClick={bringModal}>Login</button>
            <Modal               
                visible={isModalShown}
                destroyOnClose
                onCancel={closeModal}
                okButtonProps={{ disabled: false }}
                cancelButtonProps={{ disabled: false }}
                footer ={null}                
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


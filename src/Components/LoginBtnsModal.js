import React, { useState } from 'react'
import { Modal } from 'antd'
import LoginPage from "../LoginPage/LoginPage"


export default function LoginBtnsModal({isModalShown,closeModal, onCancel}) {

    

    return (
        <Modal
            visible={isModalShown}
            destroyOnClose
            onCancel={onCancel}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
            footer={null}
            // className = {styles.loginPageRooter}
            mask={true}
            width="600px"
            bodyStyle={{
                height: "700px",
                resize: "none"
            }}>            
            <LoginPage destroyModal={closeModal} />
        </Modal>
    )

}
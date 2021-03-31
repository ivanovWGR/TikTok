import styles from "./SidebarLoginButton.module.css";
import React, { useState } from "react";
import { Modal } from "antd";
import LoginPage from "../../LoginPage/LoginPage";

export default function SidebarLoginBtutton() {
  const [isModalShown, showModal] = useState(false);
  function bringModal() {
    showModal(true);
  }
  function closeModal() {
    showModal(false);
  }
  return (
    <div className={styles.sidebarLoginBtn}>
      <div>
        <span className={styles.span}>
          Log in to follow creators, like videos, and view comments.
        </span>
      </div>
      <button className={styles.button} onClick={bringModal}>
        Login
      </button>
      <Modal
        visible={isModalShown}
        onCancel={closeModal}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
        footer={null}
        mask={true}
        width="600px"
        bodyStyle={{
          height: "700px",
          resize: "none",
        }}
      >
        <LoginPage />
      </Modal>
    </div>
  );
}

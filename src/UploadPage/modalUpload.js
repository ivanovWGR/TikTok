import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from './Upload.module.css';   


const ModalUpload = ({ link,clearFile }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
  const handleOk = () => {
    clearFile();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {link}
        <button onClick={handleOk} className={styles.uploadAnother} >Upload another video</button>
      </Modal>
    </>
  )
}

export default ModalUpload;
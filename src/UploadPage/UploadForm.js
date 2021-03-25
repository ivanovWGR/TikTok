import React, { useState } from 'react';
import styles from './Upload.module.css';

import FirstGroup from './FirstGroup';
import CheckboxComp from './CheckBoxComp';
import DragnDrop from './DragAndDrop';

import { Input } from 'antd';
const { TextArea } = Input;

function UploadForm() {
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const handleChangeTitle = (event) => {
        console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    const handleChangeDecsription = (event) => {
        setDescription(event.currentTarget.value)
    }

    const onSubmit = () => {

    }
    
     // TODO
    // when data is ready after submit +1 video obj

    return (
        <form onSubmit={onSubmit}>
            <div className={styles.section}>
                <div className={styles.imageUpload}>
                    <DragnDrop />
                </div>

                <div className={styles.formSection}>
                    <div className={styles.inputSection}>
                        <div className={styles.bold}>
                            <label>Caption</label>
                        </div>
                        <div>
                            <input
                                className={styles.input}
                                onChange={handleChangeTitle}
                                value={title}
                            />
                        </div>
                    </div>

                    <div className={styles.inputSection}>
                        <div className={styles.bold}>
                            <label>Cover</label></div>
                            {/* className={styles.coverWrapper} in div  for test */}
                        <div>
                            <TextArea
                                style={{width:'700px' , height:'150px'}}
                                onChange={handleChangeDecsription}
                                value={Description}
                            />
                        </div>
                    </div>

                    <div className={styles.infoWrapper}>
                        <>
                            <FirstGroup />
                        </>
                        <div className={`${styles.firstGroup} ${styles.secondGroup}`}>
                            <div>
                                <h3 className={styles.infoTitle}>Allow users to:</h3>
                            </div>
                            <div>
                                <CheckboxComp />
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonUploadCont}>
                        <button className={styles.discardButton}>Discard</button>
                        <button className={styles.postButton} onSubmit={onSubmit}>Post</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UploadForm;
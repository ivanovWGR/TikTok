import React, { useCallback, useState } from 'react';
import { auth, db, storage } from '../firebase';
import Dropzone from 'react-dropzone';


import FirstGroup from './FirstGroup';
import CheckboxComp from './CheckBoxComp';
import { Input } from 'antd';
import { notification, Button } from 'antd';
import { Progress } from 'antd';


import styles from './Upload.module.css';

const { TextArea } = Input;

function UploadForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [alert, setAlert] = useState("");
    const [file, setFile] = useState(null);
    const [progressAnt, setProgressAnt] = useState(0);
    // take current user
    const user = auth.currentUser;

    const openNotification = (message) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description: message,
            btn,
            key,
        });
    };


    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0]);

    }, [])

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeDecsription = (event) => {
        setDescription(event.target.value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!title.trim()) {
            setAlert('Please add a title!');
            openNotification(alert)
            return;

        } else if (!description.trim()) {
            setAlert('Please add a description!');
            openNotification(alert);
            return;

        } else if (description.trim().length < 8) {
            setAlert('The description must be at least 8 characters');
            openNotification(alert)
            return;

        }
        setAlert("")
        // upload in store 
        const uploadTask = storage.ref().child(`videos/${title}`).put(file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // show procentage uploading
                setProgressAnt(progress)
            },
            (error) => {
                openNotification(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(downloadUrl => {
                        db.collection('videos').doc().set({
                            title: title,
                            caption: description,
                            url: downloadUrl,
                            addBy: user.uid,
                            addedDate: Date.now(),
                            likedBy:[],
                            numOfComments: 0,
                            numOfLikes: 0,
                        })
                    })
                    .then(() => {
                        openNotification('Your video is being uploaded to TikTok!');
                    })
                    .catch(err => openNotification(err.message));
            })

    }

    const clearFile = (e) => {
        e.preventDefault()
        setFile(null);
        const message = 'File removed...'
        openNotification(message)
    }


    return (
        <form onSubmit={onSubmit}>
            <div className={styles.section}>

                <div className={styles.imageUpload}>
                    <Dropzone
                        onDrop={onDrop}
                        accept="video/*"
                        multiple={false}
                        maxFiles={1}
                    >
                        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                            <div {...getRootProps()} className={styles.uploadContainer}>
                                <input {...getInputProps()} />
                                {!isDragActive && <div className={styles.descriptDrag}>
                                    <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg" alt="icon" width="49" className={styles.imageDrag} />
                                    <div className={styles.headerDrag}>
                                        Select video to upload
                    </div>
                                    <div className={styles.smallTxt}>
                                        Or drag and drop a file
                     </div>
                                    <div className={styles.ulDiv}>
                                        <ul>
                                            <li className={styles.dragLi}>MP4 or WebM</li>
                                            <li className={styles.dragLi}>720x1280 resolution or higher</li>
                                            <li className={styles.dragLi}>Up to 60 seconds</li>
                                        </ul>
                                        <Progress type="circle" percent={progressAnt} width={80} />
                                    </div>
                                </div>}
                                {isDragReject && "File type not accepted"}
                            </div>
                        )}
                    </Dropzone>
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
                            <label>Description</label></div>
                        {/* className={styles.coverWrapper} in div  for test */}
                        <div>
                            <TextArea
                                style={{ width: '700px', height: '150px' }}
                                onChange={handleChangeDecsription}
                                value={description}
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
                        <button className={styles.discardButton} onClick={clearFile}>Discard</button>
                        <button className={file ? styles.postButtonActive : styles.postButton} onSubmit={onSubmit}>Post</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UploadForm;
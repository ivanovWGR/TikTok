import React, { useCallback, useState, useEffect } from 'react';
import firebase, { DataBase, storage } from '../firebase';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import ModalUpload from './modalUpload';


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
    useEffect(() => {
        if (progressAnt === 100) {
            setTimeout(() => {
                setTitle("");
                setDescription("")
            }, 3000)
        }
    }, [progressAnt])
    const [videoUrl, setVideoUrl] = useState(null);
    // take current user
    const user = firebase.auth().currentUser;


    const openNotification = (message) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Upload',
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
        if (!file) return;
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

        const uploadTask = storage.ref().child(`videos/${title}`).put(file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgressAnt(progress)
            },
            (error) => {
                openNotification(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(downloadUrl => {
                        setVideoUrl(downloadUrl)
                        DataBase.collection('videos').doc().set({
                            title: title,
                            caption: description,
                            url: downloadUrl,
                            addBy: user.uid,
                            addedDate: Date.now(),
                            likedBy: [],
                            numOfComments: 0,
                            numOfLikes: 0,
                            displayName: user.displayName,
                            photoUrl: user.photoUrl
                        })
                    })
                    .then(() => {
                        console.log('success');
                    })
                    .catch(err => openNotification(err.message));
            })

    }

    const clearFile = () => {
        setFile(null);
        setTitle("")
        setDescription("");
        setProgressAnt(0);
        const message = 'File removed...'
        openNotification(message)
    }

    const link = <Link to='/userprofile'> <h3 className={styles.afterUpload}>Your video is being uploaded to TikTok successfully! <p><strong>View profile</strong></p></h3></Link>

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
                                        {file ? <Progress type="circle" percent={progressAnt} width={100} className={styles.progressCont} />
                                            :
                                            null
                                        }
                                    </div>
                                </div>}
                                {isDragReject && "File type not accepted"}
                            </div>
                        )}
                        {/* {videoUrl && <video src={videoUrl} /> } */}
                    </Dropzone>
                    {file ?
                        <ul className={styles.fileInformation}>
                            <li>File: {file.name}</li>
                            <li>Size: {(+file.size / 1000000).toFixed(2)} MB</li>
                        </ul>
                        : null
                    }
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

                        {progressAnt === 100 ?
                            <div>
                                <ModalUpload link={link} clearFile={clearFile} />
                            </div>
                            :
                            <div>
                                <button className={file ? styles.discardButtonActive : styles.discardButton} disabled={!file ? true : false} onClick={clearFile}>Discard</button>
                                <button className={file ? styles.postButtonActive : styles.postButton} disabled={!file ? true : false} onSubmit={onSubmit}>Post</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </form>
    )
}

export default UploadForm;
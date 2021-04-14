import { Form, Input, Select, Button } from 'antd';
import Dropzone from 'react-dropzone';
import React, { useCallback, useState } from 'react';
import { storage, DataBase } from '../firebase';
import styles from './EditProfile.module.scss';

const { TextArea } = Input;


export default function UpdateUserInfoComp({ setNewAvatar, currentUserId }) {
    const [file, setFile] = useState(null);
    const [editProfile, setEditProfile] = useState(false);

    const onDrop = (acceptedFiles) => {

        if (!acceptedFiles[0]) {
            alert('wrong file type or size, choose')
        } else {
            setFile(acceptedFiles[0]);
        }
    }
    const onSubmit = (ev) => {
        ev.preventDefault()
        if (!file) return
        let date = Date.now().toString()
        const uploadTask = storage.ref().child(`images/${file.name + date}`).put(file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

            },
            (error) => {
                console.log('err', error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(downloadUrl => {
                        setNewAvatar(downloadUrl)
                        return DataBase.collection('users').doc(currentUserId).update({
                            photoUrl: downloadUrl
                        })
                            .then(() => {
                                console.log("Document successfully updated!");
                            })
                            .catch((error) => {
                                console.error("Error updating document: ", error);
                            });
                    })
                    .then(() => {
                        console.log('success');
                    })
                    .catch(err => console.log(err.message));
            })
        setEditProfile(false);

    }

    const showEditProfile = (ev) => {
        ev.preventDefault();
        setEditProfile(!editProfile)
    }



    return (
        <div>
            {editProfile ?
                <form onSubmit={onSubmit}>
                    <Dropzone
                        onDrop={onDrop}
                        accept="image/*"
                        multiple={false}
                        maxFiles={1}
                        maxSize={255000}>

                        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                            <div className={styles.dropzoneProfile}>

                                <section>
                                    <div {...getRootProps()} className={styles.inputContainer}>
                                        <input {...getInputProps()} placeholder='picture' style={{ border: '1px solid red' }} className={styles.inputProfile} />

                                    </div>

                                    {isDragReject && 'elate poveche'}
                                </section>
                            </div>

                        )
                        }
                    </Dropzone>

                    <button className={styles.updateBtn} type='submit' onClick={onSubmit}>Update</button>
                </form>
                :
                <a href="javascript:void(0)" className={styles.showEditProfile} onClick={showEditProfile}>(change avatar)</a>

            }
        </div>
    )
}



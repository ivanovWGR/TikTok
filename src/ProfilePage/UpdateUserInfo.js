import { Form, Input, Select, Button } from 'antd'
import Dropzone from 'react-dropzone'
import React, { useCallback, useState } from 'react'
import { storage, DataBase } from '../firebase'
import { useDropzone } from 'react-dropzone'

const { TextArea } = Input;


export default function UpdateUserInfoComp({setNewAvatar, currentUserId }) {
    const [file, setFile] = useState(null);
    const [inputNickname, setNickname] = useState('')
    // const [imageUrl, setImageUrl] = useState('');

    const onDrop = (acceptedFiles) => {

        if (!acceptedFiles[0]) {
            alert('wrong file type or size, choose')
        } else {
            setFile(acceptedFiles[0]);
            console.log(acceptedFiles[0])
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
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                                // The document probably doesn't exist.
                                console.error("Error updating document: ", error);
                            });
                    })
                    .then(() => {
                        console.log('success');
                    })
                    .catch(err => console.log(err.message));
            })
    }




    return (
        <form onSubmit={onSubmit}>
            <Dropzone onDrop={onDrop}
                accept="image/*"
                multiple={false}
                maxFiles={1}
                maxSize={155000}>

                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <section>
                        <div {...getRootProps()} style={{ border: '1px solid black' }}>
                            <input {...getInputProps()} placeholder='picture' style={{ border: '1px solid red' }} />
                            
                        </div>

                        {isDragReject && 'elate poveche'}
                    </section>

                )
                }
            </Dropzone>
            <input name='nickname' placeholder="You can add nickname here" value={inputNickname} onChange={(ev) => {
                console.log(ev.target.value)
                setNickname(ev.target.value)
            }} />

            <button type='submit' onClick={onSubmit} >Click</button>
        </form>
    )
}



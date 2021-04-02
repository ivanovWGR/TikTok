import React from 'react';
import styles from './Upload.module.css'

export default function UploadHeader () {
    return(
        <div className={styles.headerContainer}>
                <h1 className={styles.uploadHeader}>Upload video</h1>
                <p className={styles.userHeader}>This video will be published to @username</p>
            </div>
    )
}
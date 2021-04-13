import React from 'react';
import styles from './UserProfile.module.scss';


const Video = ({ url }) => {

    return (
        <div className={styles.videoContainer}>
            <video className={styles.videoComponent} controls src={url}
            />
        </div>
    )
}
export default Video;
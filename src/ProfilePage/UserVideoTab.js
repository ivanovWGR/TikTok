import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './UserProfile.module.scss';
import { Tabs } from 'antd';
import Video from './Video'

const { TabPane } = Tabs;

const UserVideoTab = ({userVideos, likedVideos}) => {

    function callback(key) {
        console.log(key);
    }

    return (
        <Tabs defaultActiveKey="Videos" onChange={callback} size="large" className={styles.tabWrapper}>
            <TabPane tab="Videos" key="Videos">
                <div className={styles.videosCont}>
                    {userVideos.map(video => (
                       <Link to='/viewVideo'> <Video url={video.url} /></Link>
                    ))}
                </div>
            </TabPane>

            <TabPane tab="Liked" key="Liked">
                <div className={styles.videosCont}>
                    {/* testing only four videos */}
                    {likedVideos.map(video => (
                       <Link to='/viewVideo'> <Video url={video.url} /></Link>
                    ))}
                </div>
            </TabPane>

        </Tabs>

    )
}

export default UserVideoTab;
import React from 'react';
import styles from './UserProfile.module.scss';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import firebase, { DataBase } from '../firebase'
import FollowButtonUserProfile from '../Components/followButtonUserProfile'
import UpdateUserInfoComp from './UpdateUserInfo'



const UserInfo = ({ selectedUserId, isUserLoggedIn, currentUserId }) => {
    const [userObj, setUserObj] = useState({})
    const [newAvatarSrc, setNewAvatar] = useState('');

    useEffect(() => {
        let user = {}
        DataBase.collection('users').doc(selectedUserId).get()
            .then((res) => {
                user = { ...res.data() }
                setUserObj(user)
                setNewAvatar(user.photoUrl)                
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [selectedUserId]);

    return (
        <div className={styles.infoWrapper}>
            <div className={styles.userInfo}>
                <div>
                    <Avatar size={120} icon={<UserOutlined />} src={newAvatarSrc} alt={userObj.nickName} />
                </div>
                <div className={styles.infoCont}>
                    <h2 className={styles.username}>{userObj.nickName}</h2>
                    <h1 className={styles.description}>{userObj.displayName}</h1>
                    <div>
                        {currentUserId === selectedUserId ? <UpdateUserInfoComp setNewAvatar = {setNewAvatar} currentUserId = {currentUserId}/> : <FollowButtonUserProfile selectedUserId={selectedUserId} isUserLoggedIn={isUserLoggedIn}
                            currentUserId={currentUserId} />}
                    </div>
                </div>
            </div>
            <div className={styles.secondInfo}>
                <div className={styles.firstHeader}>
                    <div className={styles.numberCont}>
                        <strong>
                            120
                        </strong>
                        <span className={styles.spanInfo}>
                            Following
                        </span>
                    </div>
                    <div className={styles.numberCont}>
                        <strong>
                            820
                        </strong>
                        <span className={styles.spanInfo}>
                            Followers
                        </span>
                    </div>
                    <div className={styles.numberCont}>
                        <strong>
                            200
                            </strong>
                        <span className={styles.spanInfo}>
                            Likes
                        </span>
                    </div>
                </div>
                <h2 className={styles.bio}>No bio yet.</h2>
                <div></div>
            </div>
        </div>
    )
}


export default UserInfo;
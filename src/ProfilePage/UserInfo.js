import React from 'react';
import styles from './UserProfile.module.scss';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { DataBase } from '../firebase' 
import { RiCreativeCommonsZeroLine } from 'react-icons/ri';

const UserInfo = ({currentUser}) => {
    const [userObj, setUserObj] = useState([])
    const user = []
    useEffect(() => {
        DataBase.collection('users').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            if (doc.id === currentUser) {
              user.push(doc.data());
            }
          });
          setUserObj(user);
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },[currentUser]);
    console.log(userObj[0])
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.userInfo}>
                <div>
                    <Avatar size={120} icon={<UserOutlined />} src = {userObj[0].photoURL} alt= {userObj[0].nickName} />
                </div>
                <div className={styles.infoCont}>
                    <h2 className={styles.username}>{userObj[0].nickName}</h2>
                    <h1 className={styles.description}>{userObj[0].displayName}</h1>
                    <div>
                        <button className={styles.userPageBtn}>Follow</button>
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
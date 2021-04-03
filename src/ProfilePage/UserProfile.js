import React, { useEffect, useState } from 'react';
import firebase, { DataBase } from '../firebase'
import "antd/dist/antd.css";
import styles from './UserProfile.module.scss';
import Sidebar from '../Sidebar/Sidebar'
import UserInfo from './UserInfo';
import UserVideoTab from './UserVideoTab'

import { Layout } from "antd";

const { Content, Sider } = Layout;




const UserPage = ({ currentUserId, isUserLoggedIn, currentUserUid }) => {
    console.log('profile page ', currentUserId);
    const [userVideos, setUserVideos] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);
    //ASYNC
    useEffect(() => {
        const fetchedVideos = [];
        const fetchedLikedVideos = [];
        DataBase.collection("videos").where("addBy", "==", currentUserId)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let video = { ...doc.data() }
                    video.videoId = doc.id
                    fetchedVideos.push(video)
                });
                setUserVideos(fetchedVideos);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }, [currentUserId])

    useEffect(() => {
        const fetchedLikedVideos = [];  
      DataBase.collection("videos").where("likedBy", "==", currentUserId)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    fetchedLikedVideos.push(doc.data())
                });
                setLikedVideos(fetchedLikedVideos)
                console.log('fetchedLikedVideos ', fetchedLikedVideos)
                console.log('likedVideos ', likedVideos)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [currentUserId])


    return (
        <div>
            <Layout>
                <Layout>
                    <Sider width={250} className="site-layout-background ">
                        <div className="siderWrapper">

                            <Sidebar isUserLoggedIn = {isUserLoggedIn} currentUserUid = {currentUserId}/>                            

                        </div>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content className="site-layout-background userPageContent">
                            <UserInfo currentUserId ={currentUserId}/>                       
                           
                            <UserVideoTab currentUserId={currentUserId} userVideos={userVideos} likedVideos={likedVideos} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>

    )
}


export default UserPage;
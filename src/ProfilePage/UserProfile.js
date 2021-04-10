import React, { useEffect, useState } from 'react';
import firebase, { DataBase } from '../firebase'
import "antd/dist/antd.css";

import Sidebar from '../Sidebar/Sidebar'
import UserInfo from './UserInfo';
import UserVideoTab from './UserVideoTab'
import { Layout } from "antd";


const { Content, Sider } = Layout;
const UserPage = ({ selectedUserId, isUserLoggedIn, currentUserId }) => {
    const [userVideos, setUserVideos] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);
    //ASYNC
    if (!selectedUserId) {
        selectedUserId = currentUserId;
    }
    useEffect(() => {
        const fetchedVideos = [];
        DataBase.collection("videos").where("addBy", "==", selectedUserId)
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

    }, [selectedUserId])

    useEffect(() => {
        const fetchedLikedVideos = [];
        DataBase.collection("videos").where("likedBy", "array-contains", selectedUserId)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    fetchedLikedVideos.push(doc.data())
                });
                setLikedVideos(fetchedLikedVideos)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [selectedUserId])


    return (
        <div>
            <Layout>
                <Layout>
                    <Sider width={250} className="site-layout-background ">
                        <div className="siderWrapper">
                            <Sidebar isUserLoggedIn={isUserLoggedIn} currentUserId={currentUserId} />
                        </div>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content className="site-layout-background userPageContent">
                            <UserInfo isUserLoggedIn={isUserLoggedIn} selectedUserId={selectedUserId} currentUserId={currentUserId} />
                            <UserVideoTab selectedUserId={selectedUserId} userVideos={userVideos} likedVideos={likedVideos} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>

    )
}
export default UserPage;
import React, { useEffect, useState } from 'react';
import firebase, { DataBase } from '../firebase'
import "antd/dist/antd.css";
import styles from './UserProfile.module.scss';
import Sidebar from '../Sidebar/Sidebar'

// import UserItem from '../Sidebar/UserItem/UserItem';
// import ForYouButton from '../Sidebar/ForYou/ForYouBtn';
// import FollowingBtn from '../Sidebar/Following/FollowingBtn';
// import SidebarLoginBtutton from '../Sidebar/SidebarLogin/SidebarLoginBtn';
// import SidebarFooter from '../Sidebar/SidebarFooter/sidebarFooter';
// import SeeAllButton from '../Sidebar/seeAllButton/SeeAllButton';
import UserInfo from './UserInfo';
import UserVideoTab from './UserVideoTab'

import { Layout } from "antd";

const { Content, Sider } = Layout;

const UserPage = ({ currentUser }) => {
    console.log('profile page ', currentUser);
    const [userVideos, setUserVideos] = useState([]);
    const [likedVideos, setLikedVideos] = useState([]);

    //ASYNC
    useEffect(() => {
        const fetchedVideos = []
        DataBase.collection("videos").where("addBy", "==", currentUser)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    fetchedVideos.push(doc.data())
                });
                setUserVideos(fetchedVideos)
                console.log('fetchedVideos ', fetchedVideos)
                console.log('userVideos ',userVideos)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [])
    useEffect(() => {
        const fetchedLikedVideos = [];
        DataBase.collection("videos").where("likedBy", "==", currentUser)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    fetchedLikedVideos.push(doc.data())
                });
                setLikedVideos(fetchedLikedVideos)
                console.log('fetchedLikedVideos ',fetchedLikedVideos )
                console.log('likedVideos ',likedVideos)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [])



    return (
        <div>
            <Layout>
                <Layout>
                    <Sider width={250} className="site-layout-background siderConteiner">
                        <div className="siderWrapper">
                            <Sidebar/>
                            {/* <ForYouButton />
                            <FollowingBtn />
                            <SidebarLoginBtutton />
                            <UserItem />
                            <SeeAllButton />
                            <SidebarFooter /> */}
                        </div>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content className="site-layout-background contentContainer">
                            <UserInfo />
                            <UserVideoTab userVideos={userVideos} likedVideos ={likedVideos}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>

    )
}


export default UserPage;
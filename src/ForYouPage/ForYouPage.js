import React, { useEffect, useState } from "react";
import Card from '../Components/Card'
import ShowSidebar from '../Sidebar/Sidebar'
import { Layout } from "antd";
import { DataBase } from "../firebase";
const { Content, Sider } = Layout;

export default function ShowForYouPage ({USER_LOGGED_IN, loggedInUserId}) {
    const [currentAccount, setCurrentAccount] = useState([]);
    const [allVideos, setAllVideos] = useState([]);
    const [videos, setVideos] = useState([]);

    
    useEffect(() => {
        DataBase.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id === loggedInUserId) {
              let res = {...doc.data()}
              setCurrentAccount([...res.following])
            }
          });
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },[loggedInUserId]);

    // useEffect(() => {
    //     const users = [];
    //     const suggestedAcc = [];
    //     DataBase.collection("users")
    //       .get()
    //       .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //           let user = { ...doc.data() };
    //           user.id = doc.id;
    //             if (!currentAccount.includes(doc.id) && doc.id !== currentUserUid) {
    //                     suggestedAcc.push(user)
    //             } 
    //           users.push(user);
    //         });
    //         SetSuggestedAccounts(suggestedAcc)
    //         setAllUsers(users)
    //       })
    //       .catch((error) => {
    //         console.log("Error getting document:", error);
    //       });
    //   },[currentAccount]);

    useEffect(() => {
        const tempVideos = [];
        const videos = [];
        DataBase.collection("videos")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let chunkVideoObj = {...doc.data()}
              chunkVideoObj.videoId = doc.id
              if (!currentAccount.includes(chunkVideoObj.addBy) && loggedInUserId !== chunkVideoObj.addBy){                
                tempVideos.push(chunkVideoObj);
              }
              videos.push(chunkVideoObj)
            });            
            setVideos(tempVideos)
            setAllVideos(videos)
          });
    }, [loggedInUserId, currentAccount]);

    return (
        <div>
            <Layout className= 'layout'>
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar isUserLoggedIn={USER_LOGGED_IN} loggedInUserId={loggedInUserId}/>
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                {USER_LOGGED_IN? videos.map(({url, addBy, numOfLikes, numOfComments, title, caption, videoId, displayName, photoUrl }, index) => {
                    return <Card
                      USER_LOGGED_IN={USER_LOGGED_IN}
                      key={videoId}
                      url={url}
                      likes={numOfLikes}
                      comments={numOfComments}
                      title={title}
                      videoId={videoId}                      
                      caption={caption}
                      photoUrl= {photoUrl}
                      displayName = {displayName}
                      currentUserId = {loggedInUserId}
                      addBy={addBy} />;
                  }): allVideos.map(({url, addBy, numOfLikes, numOfComments, title, caption, videoId, displayName, photoUrl }, index) => {
                    return <Card
                      USER_LOGGED_IN={USER_LOGGED_IN}
                      key={videoId}
                      url={url}
                      likes={numOfLikes}
                      comments={numOfComments}
                      title={title}
                      videoId={videoId}                      
                      caption={caption}
                      photoUrl= {photoUrl}
                      displayName = {displayName}
                      currentUserId = {loggedInUserId}
                      addBy={addBy}/>;
                  })}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
    )
}
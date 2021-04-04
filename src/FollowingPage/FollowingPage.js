import React, { useEffect, useState } from "react";
import Card from '../Components/Card'
import ShowSidebar from '../Sidebar/Sidebar'
import { Layout } from "antd";
import { DataBase } from "../firebase";
const { Content, Sider } = Layout;

export default function ShowFollowingPage ({USER_LOGGED_IN, currentUserUid}) {
    const [currentAccount, setCurrentAccount] = useState([]);
    const [allVideos, setAllVideos] = useState([]);
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        DataBase.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id === currentUserUid) {
              let res = {...doc.data()}
              setCurrentAccount([...res.following])
              console.log("current account", res)
            }
          });
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },[currentUserUid]);

    useEffect(() => {
        const tempVideos = [];
        const videos = [];
        DataBase.collection("videos")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let chunkVideoObj = {...doc.data()}
              chunkVideoObj.videoId = doc.id
              if (currentAccount.includes(chunkVideoObj.addBy) && currentUserUid !== chunkVideoObj.addBy){                
                tempVideos.push(chunkVideoObj);
              }
              videos.push(chunkVideoObj)
            }); 
                       
            setVideos(tempVideos)
            setAllVideos(videos)
          });
    }, [currentUserUid, currentAccount]);

    return (
        <div>
            <Layout>
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar isUserLoggedIn={USER_LOGGED_IN} currentUserUid={currentUserUid}/>
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                {USER_LOGGED_IN? videos.map(
                    (
                      {
                        url,
                        numOfLikes,
                        numOfComments,
                        title,
                        addedDate,
                        caption,
                        photoUrl,
                        videoId
                      },
                      index
                    ) => {
                      return (
                        <Card
                         USER_LOGGED_IN={USER_LOGGED_IN}
                          key={index}
                          videoUrl={url}
                          likes={numOfLikes}
                          comments={numOfComments}
                          title={title}
                          date={addedDate}
                          caption={caption}
                          photo={photoUrl}
                          videoId = {videoId}
                        />
                      );
                    }
                  ): allVideos.map(
                    (
                      {
                        url,
                        numOfLikes,
                        numOfComments,
                        title,
                        addedDate,
                        caption,
                        photoUrl,
                        videoId,
                      },
                      index
                    ) => {
                      return (
                        <Card
                        videoId = {videoId}
                          key={index}
                          videoUrl={url}
                          likes={numOfLikes}
                          comments={numOfComments}
                          title={title}
                          date={addedDate}
                          caption={caption}
                          photo={photoUrl}
                        />
                      );
                    }
                  )}

                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
    )
}
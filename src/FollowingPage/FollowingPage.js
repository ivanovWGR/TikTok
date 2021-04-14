import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import ShowSidebar from "../Sidebar/Sidebar";
import { Layout } from "antd";
import { DataBase } from "../firebase";
const { Content, Sider } = Layout;

export default function ShowFollowingPage({ USER_LOGGED_IN, currentUserId }) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('Page')
    let mounted = true;
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        if (mounted) {
          querySnapshot.forEach((doc) => {
            if (doc.id === currentUserId) {
              let res = { ...doc.data() };
              if ([...res.following].length > 0) {
                setCurrentAccount([...res.following]);
              }
            }
          });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    return () => mounted = false;
  }, [currentUserId]);

  useEffect(() => {
    console.log('Page')
    const tempVideos = [];
    const videos = [];
    let mounted = true;
    DataBase.collection("videos")
      .get()
      .then((querySnapshot) => {
        if(mounted){
        querySnapshot.forEach((doc) => {
          let chunkVideoObj = { ...doc.data() };
          chunkVideoObj.videoId = doc.id;
          if (
            currentAccount.includes(chunkVideoObj.addBy) &&
            currentUserId !== chunkVideoObj.addBy
          ) {
            tempVideos.push(chunkVideoObj);
          }
          videos.push(chunkVideoObj);
        });

        setVideos(tempVideos);
        setAllVideos(videos);
      }});
      return () => mounted = false;
  }, [currentUserId, currentAccount]);
  if (videos.length < 1) {
    return (
      <div>
        <Layout className="layout">
          <Layout>
            <Sider
              width={250}
              className="site-layout-background siderConteiner siderPosition"
            >
              <div className="siderWrapper">
                <ShowSidebar
                  USER_LOGGED_IN={USER_LOGGED_IN}
                  currentUserId={currentUserId}
                />
              </div>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content className="site-layout-background contentContainer">
                <div>
                  <h1>YOU HAVE NO FOLLOWERS USERS</h1>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Layout className="layout">
          <Layout>
            <Sider
              width={250}
              className="site-layout-background siderConteiner siderPosition"
            >
              <div className="siderWrapper">
                <ShowSidebar
                  USER_LOGGED_IN={USER_LOGGED_IN}
                  currentUserId={currentUserId}
                />
              </div>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content className="site-layout-background contentContainer">
                {USER_LOGGED_IN
                  ? videos.map(
                    (
                      {
                        addBy,
                        url,
                        numOfLikes,
                        numOfComments,
                        title,
                        caption,
                        videoId,
                        displayName,
                        photoUrl,
                      },
                      index
                    ) => {
                      return (
                        <Card
                          USER_LOGGED_IN={USER_LOGGED_IN}
                          key={videoId}
                          url={url}
                          likes={numOfLikes}
                          comments={numOfComments}
                          title={title}
                          videoId={videoId}
                          caption={caption}
                          photoUrl={photoUrl}
                          displayName={displayName}
                          addBy={addBy}
                          currentUserId={currentUserId}
                        />
                      );
                    }
                  )
                  : allVideos.map(
                    (
                      {
                        addBy,
                        url,
                        numOfLikes,
                        numOfComments,
                        title,
                        caption,
                        videoId,
                        displayName,
                        photoUrl,
                      },
                      index
                    ) => {
                      return (
                        <Card
                          USER_LOGGED_IN={USER_LOGGED_IN}
                          key={videoId}
                          url={url}
                          likes={numOfLikes}
                          comments={numOfComments}
                          title={title}
                          videoId={videoId}
                          caption={caption}
                          photoUrl={photoUrl}
                          displayName={displayName}
                          addBy={addBy}
                          currentUserId={currentUserId}
                        />
                      );
                    }
                  )}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

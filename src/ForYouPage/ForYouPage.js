import React, { useEffect, useState } from "react";
import Card from '../Components/Card'
import ShowSidebar from '../Sidebar/Sidebar'
import { Layout } from "antd";
import { DataBase } from "../firebase";
const { Content, Sider } = Layout;

export default function ShowForYouPage({ USER_LOGGED_IN, currentUserId }) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUserId) {
            let res = { ...doc.data() }
            setCurrentAccount([...res.following])
          }
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentUserId]);



  useEffect(() => {
    let mounted = true;
    const tempVideos = [];
    const videos = [];
    DataBase.collection("videos")
      .get()      
      .then((querySnapshot) => {
        if(mounted){
        querySnapshot.forEach((doc) => {
          let chunkVideoObj = { ...doc.data() }
          chunkVideoObj.videoId = doc.id
          if (!currentAccount.includes(chunkVideoObj.addBy) && currentUserId !== chunkVideoObj.addBy) {
            tempVideos.push(chunkVideoObj);
          }
          videos.push(chunkVideoObj)
        });
        setVideos(tempVideos)
        setAllVideos(videos)
      }});
      return() => mounted = false;//chnaged!!
  }, [currentUserId, currentAccount]);


    return (
        <div>
            <Layout className= 'layout'>
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar USER_LOGGED_IN={USER_LOGGED_IN} currentUserId={currentUserId}/>
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                {USER_LOGGED_IN? videos.map(({url, numOfLikes, numOfComments, title, caption, videoId, displayName, photoUrl, addBy }, index) => {
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
                      currentUserId = {currentUserId}
                      addBy = {addBy} />;
                  }): allVideos.map(({url, numOfLikes, numOfComments, title, caption, videoId, displayName, photoUrl, addBy }, index) => {
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
                      currentUserId = {currentUserId}
                      addBy = {addBy}/>;
                  })}
                </Content>            
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
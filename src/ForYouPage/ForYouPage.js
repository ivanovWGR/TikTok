import React, { useEffect, useState } from "react";
import Card from '../Components/Card'
import ShowSidebar from '../Sidebar/Sidebar'
import { Layout } from "antd";
import { DataBase } from "../firebase";
const { Content, Sider } = Layout;

export default function ShowForYouPage ({isUserLoggedIn, currentUserUid}) {
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
                console.log(currentAccount)
                console.log(doc.data().addBy)
              if (!currentAccount.includes(doc.data().addBy) && currentUserUid !== doc.data().addBy){
                tempVideos.push(doc.data());
              }
              videos.push(doc.data())
            });
            console.log(tempVideos)
            console.log(videos)
            setVideos(tempVideos)
            setAllVideos(videos)
          });
    }, [currentUserUid]);

    return (
        <div>
            <Layout>
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar isUserLoggedIn={isUserLoggedIn} currentUserUid={currentUserUid}/>
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                {isUserLoggedIn? videos.map(
                    (
                      {
                        url,
                        numOfLikes,
                        numOfComments,
                        title,
                        addedDate,
                        caption,
                        photoUrl,
                      },
                      index
                    ) => {
                      return (
                        <Card
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
                      },
                      index
                    ) => {
                      return (
                        <Card
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
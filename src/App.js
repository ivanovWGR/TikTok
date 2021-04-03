import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderComp from "./HeaderComponents/HeaderComp";
import "antd/dist/antd.css";
import "./App.css";
import firebase, { DataBase } from "./firebase";
import Card from "./Components/Card";
import ShowSidebar from "./Sidebar/Sidebar";

import { Layout } from "antd";
import Upload from "./UploadPage/Upload";
import ViewFullScreenVideo from "./VideoFullscreenPage/ViewFullScreenVideo";
import UserPage from "./ProfilePage/UserProfile";
import User from "./UserTest/User";
const { Content, Sider } = Layout;

function App() {
  const [USER_LOGGED_IN, isUserLoggedIn] = useState(false); //for test only, change the value will change the header header
  const [videos, setVideos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    console.log("Inside effect");
    const tempVideos = [];
    // Asynch operation
    DataBase.collection("videos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tempVideos.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        setVideos(tempVideos);
        setFiltered(tempVideos);
        // console.log('Videos ', videos)
        // console.log('filtered ', filtered)
      });
  }, []);

  const searchByName = (input) => {
    console.log("Search func ", videos);
    console.log("value ", input);
    const temp = videos.filter((video) =>
      video.addBy.toLowerCase().includes(input.toLowerCase())
    );
    setFiltered(temp);
    // console.log(temp)
  };
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user.uid);
        isUserLoggedIn(true);
        //     // const fetchedVideos = [];
        //

        // console.log(currentUser)
      } else {
        isUserLoggedIn(false);
        setCurrentUser("");
      }
    });
  }, [currentUser]);

  // useEffect(()=>{
  //   const user = firebase.auth().currentUser
  //   if(user){
  //     isUserLoggedIn(true)
  //     console.log('User ', user)
  //   }else{
  //     isUserLoggedIn(false);
  //   }
  // },[])
  return (
    <Router>
      <HeaderComp isUserLoggedIn={USER_LOGGED_IN} getInput={searchByName} />
      <Switch>
        <Route path="/viewVideo">
          <ViewFullScreenVideo />
        </Route>
        <Route path="/upload">
          {USER_LOGGED_IN ? <Upload /> : (window.location = "/#")}
        </Route>

        <Route path="/userprofile/:id">
          <UserPage currentUser={currentUser} />
        </Route>
        <Route path="/user/:id">
          <Layout>
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar isUserLoggedIn={USER_LOGGED_IN} />
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                  <User />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Route>

        <Route exact path="/">
          <Layout>
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar isUserLoggedIn={USER_LOGGED_IN} currentUserUid={currentUser}/>
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                  {filtered.map(
                    (
                      {
                        url,
                        numOfLikes,
                        numOfComments,
                        title,
                        addedDate,
                        caption,
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
                        />
                      );
                    }
                  )}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import HeaderComp from './HeaderComponents/HeaderComp';
import "antd/dist/antd.css";
import "./App.css";
import firebase, { DataBase } from './firebase'
import Card from "./Components/Card";
import ShowSidebar from './Sidebar/Sidebar'

import { Layout } from "antd";
import Upload from './UploadPage/Upload';
import ViewFullScreenVideo from './VideoFullscreenPage/ViewFullScreenVideo';
import UserPage from './ProfilePage/UserProfile';
const { Content, Sider } = Layout;



function App() {
  const [USER_LOGGED_IN, isUserLoggedIn] = useState(false);//for test only, change the value will change the header header
  const [videos, setVideos] = useState([]);
  const [loadedVideosCount, setLoadedVideosCount] = useState(40)

  const [filtered, setFiltered] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");

  const [currentUserVideos, setCurrenUserVideos] = useState([])

  const onNext = () => {
    setLoadedVideosCount(loadedVideosCount + 20);
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUserId(user.uid);
        isUserLoggedIn(true)
        //     // const fetchedVideos = [];
        //     
        // console.log(currentUserId)
      } else {
        isUserLoggedIn(false);
        setCurrentUserId('')
      }
    });
  }, [currentUserId])




  useEffect(() => {
    // console.log('Inside effect')
    const tempVideos = []
    // Asynch operation
    DataBase.collection("videos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let video = { ...doc.data() }
        video.videoId = doc.id;

        tempVideos.push(video)

      });

      setVideos(tempVideos)
      setFiltered(tempVideos)
      // console.log('Videos ', videos)

    });

  }, [])



  const searchByName = (input) => {

    // console.log('Search func ', videos)
    // console.log('value ', input)
    const temp = videos.filter(video => video.addBy.toLowerCase().includes(input.toLowerCase()))
    setFiltered(temp)
    // console.log(temp)

  }






  // useEffect(()=>{
  //   const user = firebase.auth().currentUser
  //   if(user){
  //     isUserLoggedIn(true)
  //     console.log('User ', user)
  //   }else{      
  //     isUserLoggedIn(false);
  //   }
  // },[])


  // const filteredvideos = useMemo(() => {

  // }, [searchValue])

  const chunkedVideos = useMemo(() => {
    let chunkVideos = [];

    for (let i = 0; i < loadedVideosCount; i++) {
      chunkVideos.push(videos[i]);
    }

    return chunkVideos;
  }, [videos, loadedVideosCount])


  return (
    <Router>
      <HeaderComp isUserLoggedIn={USER_LOGGED_IN} getInput={searchByName} />
      <Switch>
        <Route path="/viewVideo/:videoId">
          <ViewFullScreenVideo currentUserId={currentUserId} />
        </Route>
        <Route path="/upload">
          {USER_LOGGED_IN ? <Upload /> : <Redirect to="/" />}
        </Route>

        <Route path="/userprofile">
          {USER_LOGGED_IN ? <UserPage currentUserId={currentUserId} isUserLoggedIn={USER_LOGGED_IN} /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/">
          <Layout>
            <Layout>
              <Sider width={250} className="site-layout-background siderConteiner siderPosition">
                <div className="siderWrapper">

                  <ShowSidebar isUserLoggedIn={USER_LOGGED_IN} />

                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content className="site-layout-background contentContainer">
                  {filtered.map(({ url, numOfLikes, numOfComments, title, addedDate, caption, videoId }, index) => {
                    return <Card
                      USER_LOGGED_IN={USER_LOGGED_IN}
                      key={videoId}
                      videoUrl={url}
                      likes={numOfLikes}
                      comments={numOfComments}
                      title={title}
                      videoId={videoId}
                      date={addedDate}
                      caption={caption} />;

                  })}
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

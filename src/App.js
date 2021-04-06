import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import HeaderComp from "./HeaderComponents/HeaderComp";
import "antd/dist/antd.css";
import "./App.css";
import firebase, { DataBase } from "./firebase";
import Card from "./Components/Card";
import ShowSidebar from "./Sidebar/Sidebar";
import { Layout, notification, Button } from "antd";
import Upload from "./UploadPage/Upload";
import ViewFullScreenVideo from "./VideoFullscreenPage/ViewFullScreenVideo";
import UserPage from "./ProfilePage/UserProfile";
import SelectedUser from "./SelectedUser/selectedUser";
import ShowForYouPage from './ForYouPage/ForYouPage'
import ShowFollowingPage from './FollowingPage/FollowingPage';
const { Content, Sider } = Layout;

function App() {
  const [USER_LOGGED_IN, isUserLoggedIn] = useState(false);//for test only, change the value will change the header header
  const [videos, setVideos] = useState([]);
  const [loadedVideosCount, setLoadedVideosCount] = useState(40);
  const [filtered, setFiltered] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [filteredvideos, setFilteredVideos] = useState([]);//IT IS NOT USED AT THE MOMENT?!?
  const [searchValue, setSearchValue] = useState("");
  const [currentAccount, setCurrentAccount] = useState([]);
  const history = useHistory();

  const onNext = () => {
    setLoadedVideosCount(loadedVideosCount + 20);
  }
  console.log('App js rerenders')
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('Rerender!')
        setCurrentUserId(user.uid);
        isUserLoggedIn(true);
        console.log('History', history)
        
      } else {
        isUserLoggedIn(false);
        setCurrentUserId("");
      }
    });

  }, [currentUserId]);

  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUserId) {
            let res = { ...doc.data() }
            setCurrentAccount([...res.following])
            console.log("current account", res)
          }
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentUserId]);

  useEffect(() => {
    const tempVideos = []
    // Asynch operation
    DataBase.collection("videos").get().then((querySnapshot) => {
      console.log('Shouts once!')
      querySnapshot.forEach((doc) => {
        if (currentUserId) {
          console.log(currentAccount)
          if (currentUserId !== doc.data().addBy && !currentAccount.includes(doc.data().addBy)) {
            let video = { ...doc.data() }
            video.videoId = doc.id;
            tempVideos.push(video)
          }
        } else {
          let video = { ...doc.data() }
          video.videoId = doc.id;
          tempVideos.push(video)
        }
      });
      setVideos(tempVideos);
      setFiltered(tempVideos);
      console.log('request!')
    });
  }, [currentUserId, currentAccount])
  // const searchByName = (input) => {
  //   const temp = videos.filter(video => video.addBy.toLowerCase().includes(input.toLowerCase()));
  //   setFiltered(temp);
  // }
  //NOTIFICATION FUNCTION FOR SEARCH
  const openNotification = (message, title) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => {
        setSearchValue("");
        notification.close(key)
      }}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Search notification',
      description: message,
      btn,
      key,
    });
  };
  //VALIDATION FUNCTION FOR SEARCH
  const searchValidation = (arr, input) => {
    if (input) {
      if (input.length > 20) {
        return (openNotification('Inavalid Search value. Max 20 letters. Clear the input and try again'), arr)
      }
      console.log(input)
      return arr.filter((el) => {
        return el.caption.toLowerCase().includes(input.trim().toLowerCase())
          ||
          el.displayName.toLowerCase().includes(input.toLowerCase())
      })
    }
    console.log('Search Arr', arr)
    return arr
  }

  //USEEFFECT HOOK FOR TRIGGERING SEARCH RESULTS DISPLAY
  useEffect(() => {
    console.log('use effect search videos')
    let result = searchValidation(filtered, searchValue)
    console.log(result)
    setFilteredVideos([...result])
  }, [searchValue, filtered])

  console.log('FilteredVideos', filteredvideos)

  // const filteredvideos = filtered.filter(video => video.caption.toLowerCase().includes(searchValue.toLowerCase()))

  const chunkedVideos = useMemo(() => {
    let chunkVideos = [];
    for (let i = 0; i < loadedVideosCount; i++) {
      chunkVideos.push(videos[i]);
    }

    return chunkVideos;
  }, [videos, loadedVideosCount])


  return (
    <Router>
      <HeaderComp isUserLoggedIn={USER_LOGGED_IN} onTitleInputChange={(value) => setSearchValue(value)} searchValue={searchValue} />
      <Switch>
        <Route path="/viewVideo/:videoId">
          <ViewFullScreenVideo currentUserId={currentUserId} USER_LOGGED_IN={USER_LOGGED_IN} />
        </Route>
        <Route path="/upload">
          {USER_LOGGED_IN ? <Upload currentUserId={currentUserId} /> : <Redirect to="/" />}
        </Route>
        <Route path="/userprofile">
          {USER_LOGGED_IN ? <UserPage loggedInUserId={currentUserId} isUserLoggedIn={USER_LOGGED_IN} /> : <Redirect to="/" />}
        </Route>
        <Route path="/ForYouPage">
          <ShowForYouPage USER_LOGGED_IN={USER_LOGGED_IN} loggedInUserId={currentUserId} />
        </Route>
        <Route path="/FollowingPage">
          <ShowFollowingPage USER_LOGGED_IN={USER_LOGGED_IN} loggedInUserId={currentUserId} />
        </Route>

        <Route path="/user/:id">
          <SelectedUser isUserLoggedIn={USER_LOGGED_IN} loggedInUserId={currentUserId} />
        </Route>
        <Route exact path="/">
          <Layout className="layout">
            <Layout>
              <Sider
                width={250}
                className="site-layout-background siderConteiner siderPosition"
              >
                <div className="siderWrapper">
                  <ShowSidebar isUserLoggedIn={USER_LOGGED_IN} loggedInUserId={currentUserId} />
                </div>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                {/* Кард контаинер */}
                <Content className="site-layout-background contentContainer">


                  {filteredvideos.map(({ addBy, url, numOfLikes, numOfComments, title, caption, videoId, photoUrl, displayName  }, index) => {

                    return <Card
                      numOfLikes = {0}
                      currentUserId={currentUserId}
                      USER_LOGGED_IN={USER_LOGGED_IN}                      
                      key={videoId}
                      url={url}
                      // likes={numOfLikes}
                      comments={numOfComments}
                      title={title}
                      videoId={videoId}
                      caption={caption}
                      photoUrl={photoUrl}
                      displayName={displayName}
                      addBy={addBy} />;
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


import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"
import VideoDetail from "./pages/VideoDetail"
import './App.css';
import Search from './components/Search';
import SearchResultPage from './pages/SearchResultPage';
import PlaylistPage from './pages/PlaylistPage';
import ProfilePage from './pages/ProfilePage';
import subscriptionPage from './pages/subscriptionPage';
import LikePage from './pages/LikePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/videos/:videoId" component={VideoDetail} />
        <Route exact path="/playlists" component={PlaylistPage} />
        <Route exact path="/subscriptions" component={subscriptionPage} />
        <Route exact path="/search/:searchQuery" component={SearchResultPage} />
        <Route exact path="/likedVideos" component={LikePage}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

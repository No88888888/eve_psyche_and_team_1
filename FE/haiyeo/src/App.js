import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stamp from "./pages/Stamp";
import RewardShop from "./pages/RewardShop";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";
import Search from "./pages/SearchStart";
import SearchPlace from "./pages/SearchPlace";
import SearchSchedule from "./pages/SearchSchedule";
import Result from "./pages/Result";
import ResultDetail from "./pages/ResultDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/stamp" Component={Stamp} />
        <Route path="/rewardshop" Component={RewardShop} />
        <Route path="/profile" Component={Profile} />
        <Route path="/search" Component={Search} />
        <Route path="/search/place" Component={SearchPlace} />
        <Route path="/search/schedule" Component={SearchSchedule} />
        <Route path="/result" Component={Result} />
        <Route path="/result/detail" Component={ResultDetail} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;

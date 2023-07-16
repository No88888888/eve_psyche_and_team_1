import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stamp from "./pages/Stamp";
import RewardShop from "./pages/RewardShop";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/stamp" Component={Stamp} />
        <Route path="/rewardshop" Component={RewardShop} />
        <Route path="/profile" Component={Profile} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;

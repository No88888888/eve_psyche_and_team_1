import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function BottomNav() {
  return (
    <nav>
      <div>
        <NavLink to="/">홈</NavLink>
      </div>
      <div>
        <NavLink to="/stamp">스탬프</NavLink>
      </div>
      <div>QR스캔</div>
      <div>
        <NavLink to="/rewardshop">리워드샵</NavLink>
      </div>
      <div>
        <NavLink to="/profile">프로필</NavLink>
      </div>
    </nav>
  );
}

export default BottomNav;

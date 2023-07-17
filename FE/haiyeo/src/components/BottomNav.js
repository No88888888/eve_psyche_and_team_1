import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStamp,
  faQrcode,
  faGift,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function BottomNav() {
  const [activeNav, setActiveNav] = useState(1); // 현재 활성화된 내비 버튼 상태

  return (
    <nav>
      <div>
        <NavLink to="/" onClick={() => setActiveNav(1)}>
          {activeNav === 1 ? (
            <div>
              <FontAwesomeIcon icon={faHouse} color="#3ec6c9" />
              <p>홈</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faHouse} color="#ababab" />
              <p>홈</p>
            </div>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/stamp" onClick={() => setActiveNav(2)}>
          {activeNav === 2 ? (
            <div>
              <FontAwesomeIcon icon={faStamp} color="#3ec6c9" />
              <p>스탬프</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faStamp} color="#ababab" />
              <p>스탬프</p>
            </div>
          )}
        </NavLink>
      </div>
      <div>
        <FontAwesomeIcon icon={faQrcode} color="#ababab" />
        <p>QR스캔</p>
      </div>
      <div>
        <NavLink to="/rewardshop" onClick={() => setActiveNav(3)}>
          {activeNav === 3 ? (
            <div>
              <FontAwesomeIcon icon={faGift} color="#3ec6c9" />
              <p>리워드샵</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faGift} color="#ababab" />
              <p>리워드샵</p>
            </div>
          )}
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile" onClick={() => setActiveNav(4)}>
          {activeNav === 4 ? (
            <div>
              <FontAwesomeIcon icon={faUser} color="#3ec6c9" />
              <p>프로필</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faUser} color="#ababab" />
              <p>프로필</p>
            </div>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomNav;

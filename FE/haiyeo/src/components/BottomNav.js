import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStamp, faQrcode, faGift, faUser } from "@fortawesome/free-solid-svg-icons";

function BottomNav() {
  const [activeNav, setActiveNav] = useState(1); // 현재 활성화된 내비 버튼 상태

  return (
    <nav>
      <div className=" font-sans">
        <NavLink to="/" onClick={() => setActiveNav(1)}>
          {activeNav === 1 ? (
            <div className="grid">
              <FontAwesomeIcon icon={faHouse} color="#3ec6c9" size="2x" />
              <span className="text-sm mx-auto text-[#3ec6c9]">홈</span>
            </div>
          ) : (
            <div className="grid">
              <FontAwesomeIcon icon={faHouse} color="#ababab" size="2x" />
              <span className="text-sm mx-auto text-[#ababab]">홈</span>
            </div>
          )}
        </NavLink>
      </div>
      <div className=" font-sans">
        <NavLink to="/stamp" onClick={() => setActiveNav(2)}>
          {activeNav === 2 ? (
            <div className="grid">
              <div className="mx-auto">
                <FontAwesomeIcon icon={faStamp} color="#3ec6c9" size="2x" />
              </div>
              <span className="text-sm mx-auto text-[#3ec6c9]">스탬프</span>
            </div>
          ) : (
            <div className="grid">
              <div className="mx-auto">
                <FontAwesomeIcon icon={faStamp} color="#ababab" size="2x" />
              </div>
              <span className="text-sm mx-auto text-[#ababab]">스탬프</span>
            </div>
          )}
        </NavLink>
      </div>
      <div className="grid  font-sans">
        <div className="mx-auto mb-[-28px]">
          <FontAwesomeIcon icon={faQrcode} color="#ababab" size="2x" />
        </div>
        <span className="text-sm mx-auto text-[#ababab]">QR스캔</span>
      </div>
      <div className=" font-sans">
        <NavLink to="/rewardshop" onClick={() => setActiveNav(3)}>
          {activeNav === 3 ? (
            <div className="grid">
              <div className="mx-auto">
                <FontAwesomeIcon icon={faGift} color="#3ec6c9" size="2x" />
              </div>
              <span className="text-sm mx-auto text-[#3ec6c9]">리워드샵</span>
            </div>
          ) : (
            <div className="grid">
              <div className="mx-auto">
                <FontAwesomeIcon icon={faGift} color="#ababab" size="2x" />
              </div>
              <span className="text-sm mx-auto text-[#ababab]">리워드샵</span>
            </div>
          )}
        </NavLink>
      </div>
      <div className=" font-sans">
        <NavLink to="/profile" onClick={() => setActiveNav(4)}>
          {activeNav === 4 ? (
            <div className="grid">
              <div className="mx-auto">
                <FontAwesomeIcon icon={faUser} color="#3ec6c9" size="2x" />
              </div>
              <span className="text-sm mx-auto text-[#3ec6c9]">프로필</span>
            </div>
          ) : (
            <div className="grid">
              <div className="mx-auto">
                <FontAwesomeIcon icon={faUser} color="#ababab" size="2x" />
              </div>
              <span className="text-sm mx-auto text-[#ababab]">프로필</span>
            </div>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomNav;

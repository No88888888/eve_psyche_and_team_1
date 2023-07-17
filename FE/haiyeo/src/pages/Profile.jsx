import React from "react";
import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="mt-[7%] ml-[10%] mb-[5%]">
        <span className="text-[#3EC6C9] text-2xl">hana_ti</span>
        <span className="text-2xl"> 님의 여행</span>
      </div>
      <NavLink to="/profile/detail">
        <div className="bg-[#F9F9F9] rounded-xl w-[80%] h-[75px] mx-auto drop-shadow-md flex">
          <div>
            <img src="img/euk.png" alt="euk" className="w-[30%] mt-[5px]" />
          </div>
          <div className="ml-[-130px] grid">
            <div className="mt-[10px]">
              <span className="text-lg">hana_ti</span>
            </div>
            <div className="mt-[-15px]">
              <span className="text-sm text-[#9A9A9A]">프로필 보기</span>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Profile;

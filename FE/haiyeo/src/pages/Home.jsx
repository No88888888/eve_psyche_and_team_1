import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="w-[512px]">
      <div className="w-[512px] bg-[#F3FFC5] h-[170px]">
        <div>
          <img
            className="w-[200px] absolute mt-[5px] ml-[156px]"
            alt="hanaEarth"
            src="/img/hana_earth.png"
          />
        </div>
        <NavLink to="/search">
          <div className="w-[400px] bg-[#FFFFFF] h-[50px] ml-[56px] absolute mt-[100px] rounded-lg grid content-center">
            <div className="mx-auto">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color="#ababab"
                className="mr-[15px]"
              />
              <span className="text-[#3EC6C9]">하나</span>
              <span>뿐인 지구를 위한 </span>
              <span className="text-[#3EC6C9]">E</span>
              <span>CO </span>
              <span className="text-[#3EC6C9]">여</span>
              <span>행</span>
            </div>
          </div>
        </NavLink>
      </div>
      <p>홈</p>
    </div>
  );
}

export default Home;

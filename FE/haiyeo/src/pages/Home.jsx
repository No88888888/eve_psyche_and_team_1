import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <div className="w-[100%] font-sans">
      <div className="w-[100%] absolute h-[20%] bg-[#F3FFC5]"></div>
      <div>
        <img
          className="w-[40%] absolute ml-[30%]"
          alt="hanaEarth"
          src="/img/hana_earth.png"
        />
      </div>
      <NavLink to="/search">
        <div className="w-[80%] bg-[#FFFFFF] h-[7%] absolute mt-[20%] ml-[10%] rounded-lg grid content-center">
          <div className="ml-[7%] my-[2%]">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color="#ababab"
              className="mr-[3%]"
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
      <div className="pt-[38%]">
        <div className="flex">
          <img className="w-[10%] ml-[3%]" alt="hanaLogo" src="/img/hana.png" />
          <span className="mt-[1%]">hana_ti</span>
        </div>
        <img
          className="bg-cover bg-center mt-[3%]"
          alt="snsRose"
          src="/img/roses.jpg"
        />
        <div className="flex">
          <FontAwesomeIcon
            icon={faHeart}
            color="#F44336"
            size="2x"
            className="m-[2%] ml-[4%]"
          />
          <FontAwesomeIcon icon={faComment} size="2x" className="m-[2%]" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            color="#777777"
            className="my-[2%] ml-auto mr-[4%]"
          />
        </div>
        <div>
          <span className="ml-[4%] text-sm">
            eve.psyche 님 외 830명이 좋아합니다
          </span>
        </div>
        <div>
          <span className="ml-[4%] text-md">hana_ti 대가야생활촌 좋아요~</span>
        </div>
      </div>
      <div className="pt-[10%] mb-[10%]">
        <div className="flex">
          <img
            className="w-[10%] ml-[3%]"
            alt="hanaLogo"
            src="/img/daegu.png"
          />
          <span className="my-auto">한국관광공사 대구경북지사</span>
          <span className="ml-[20%] text-sm text-[#A6A6A6] my-auto">광고</span>
        </div>
        <img
          className="bg-cover bg-center mt-[3%]"
          alt="snsGoryeong"
          src="/img/goryeong.jpg"
        />
        <div className="flex">
          <FontAwesomeIcon
            icon={faHeart}
            color="#F44336"
            size="2x"
            className="m-[2%] ml-[4%]"
          />
          <FontAwesomeIcon icon={faComment} size="2x" className="m-[2%]" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            color="#777777"
            className="my-[2%] ml-auto mr-[4%]"
          />
        </div>
        <div>
          <span className="ml-[4%] text-sm">
            hana_ti 님 외 1990명이 좋아합니다
          </span>
        </div>
        <div>
          <span className="ml-[4%] text-md">
            2023 고령 대가야 축제 X 한국관광공사
          </span>
        </div>
        <div>
          <span className="ml-[4%] text-md">
            친환경 여행 캠페인참여하고 선물 받아가세요🎁
          </span>
        </div>
      </div>
      <div className="mb-[10%]">
        <div className="flex">
          <img
            className="w-[10%] ml-[3%] mr-[2%]"
            alt="anonymous"
            src="/img/anonymous.png"
          />
          <span className="my-auto">dlwlrma</span>
        </div>
        <img
          className="bg-cover bg-center mt-[3%]"
          alt="ddareungi"
          src="/img/ddareungi.jpg"
        />
        <div className="flex">
          <img
            className="w-[9%] m-[2%] ml-[4%]"
            alt="like"
            src="/img/like.png"
          />
          <FontAwesomeIcon icon={faComment} size="2x" className="m-[2%]" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            color="#777777"
            className="my-[2%] ml-auto mr-[4%]"
          />
        </div>
        <div>
          <span className="ml-[4%] text-sm">
            xxxibgdrgn 님 외 3755명이 좋아합니다
          </span>
        </div>
        <div>
          <span className="ml-[4%] text-md">
            따릉이를 타고 다니면서 건강도 챙기고
          </span>
        </div>
        <div>
          <span className="ml-[4%] text-md">환경도 지키는 일석이조 효과~</span>
        </div>
      </div>
      <div className="mb-[30%]">
        <div className="flex">
          <img
            className="w-[10%] ml-[3%] mr-[1%]"
            alt="jisoo"
            src="/img/jisoo.png"
          />
          <span className="my-auto">sooyaaa__</span>
        </div>
        <img
          className="bg-cover bg-center mt-[3%]"
          alt="vegetables"
          src="/img/vegetables.jpg"
        />
        <div className="flex">
          <FontAwesomeIcon
            icon={faHeart}
            color="#F44336"
            size="2x"
            className="m-[2%] ml-[4%]"
          />
          <FontAwesomeIcon icon={faComment} size="2x" className="m-[2%]" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            color="#777777"
            className="my-[2%] ml-auto mr-[4%]"
          />
        </div>
        <div>
          <span className="ml-[4%] text-sm">
            diwlrma 님 외 5774명이 좋아합니다
          </span>
        </div>
        <div>
          <span className="ml-[4%] text-md">
            친환경 작물로 만든 친환경 피자 JMT
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;

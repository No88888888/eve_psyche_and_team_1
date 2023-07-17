import React from "react";
import { useNavigate } from "react-router-dom";

function SearchStart() {
  const navigate = useNavigate();
  const moveToPlace = () => {
    navigate("/search/place");
  };

  const moveToBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-[512px]">
      <div className="w-10/12 mx-auto">
        <div className="pt-8 flex flex-row-reverse">
          <button onClick={moveToBack}>
            <img className="w-5" alt="뒤로가기" src="img/arrow.png" />
          </button>
        </div>
        <div className="text-[28px] mt-20">
          <div className="my-4">
            <span className="text-[#3EC6C9]">하나</span>
            <span>뿐인 소중한 지구</span>
          </div>

          <div className="my-4">
            <span className="text-[#3EC6C9]">E</span>
            <span>SG가 함께하는</span>
          </div>
          <div className="my-4">
            <span className="text-[#3EC6C9]">여</span>
            <span>행으로 지켜요!</span>
          </div>
        </div>
        <div className="mt-12">
          <img className="w-[400px]" alt="ourEarth" src="img/hana_earth.png" />
        </div>
        <button
          className="w-full h-16 bg-[#3EC6C9] rounded-md text-white mt-8"
          onClick={moveToPlace}
        >
          <span className="font-bold">하이여</span>
          <span> 시작하기</span>
        </button>
      </div>
    </div>
  );
}

export default SearchStart;

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
    <div className="w-[100%]">
      <div className="w-10/12 mx-auto">
        <div className="pt-8 flex flex-row-reverse">
          <button onClick={moveToBack}>
            <img className="w-5" alt="뒤로가기" src="/img/arrow.png" />
          </button>
        </div>
        <div className="text-[20px] mt-16  font-sans">
          <div className="my-4">
            <span className="text-[#3EC6C9] font-bold font-sans">하나</span>
            <span className="font-medium">뿐인 소중한 지구</span>
          </div>

          <div className="my-4">
            <span className="text-[#3EC6C9] font-bold">E</span>
            <span className="font-medium">SG가 함께하는</span>
          </div>
          <div className="my-4">
            <span className="text-[#3EC6C9] font-bold">여</span>
            <span className="font-medium">행으로 지켜요!</span>
          </div>
        </div>
        <div className="mt-10">
          <img className="w-[300px] mx-auto" alt="ourEarth" src="img/hana_earth.png" />
        </div>
        <button
          className="w-full h-10 bg-[#3EC6C9] rounded-md text-white mt-8"
          onClick={moveToPlace}
        >
          <span className="font-bold font-sans">하이여</span>
          <span className=" font-sans"> 시작하기</span>
        </button>
      </div>
    </div>
  );
}

export default SearchStart;

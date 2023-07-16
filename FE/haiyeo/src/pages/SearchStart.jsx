import React from "react";
import { useNavigate } from "react-router-dom";

function SearchStart() {
  const navigate = useNavigate();
  const moveToPlace = () => {
    navigate("/search/place");
  };

  return (
    <div className="w-[512px] bg-red-100">
      <div>
        <div>
          <span className="text-[#3EC6C9]">하나</span>
          <span>뿐인 소중한 지구</span>
        </div>

        <div>
          <span className="text-[#3EC6C9]">E</span>
          <span>SG가 함께하는</span>
        </div>
        <div>
          <span className="text-[#3EC6C9]">여</span>
          <span>행으로 지켜요!</span>
        </div>
      </div>
      <div>
        <img className="w-[400px]" alt="ourEarth" src="img/hana_earth.png" />
      </div>
      <button className="w-[500px] h-20 bg-[#3EC6C9] rounded-md text-white" onClick={moveToPlace}>
        <span className="font-bold">하이여</span>
        <span> 시작하기</span>
      </button>
    </div>
  );
}

export default SearchStart;

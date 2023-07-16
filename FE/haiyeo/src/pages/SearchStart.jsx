import React from "react";
import { useNavigate } from "react-router-dom";

function SearchStart() {
  const navigate = useNavigate();
  const moveToPlace = () => {
    navigate("/search/place");
  };

  return (
    <div>
      <div>
        <div>하나뿐인 소중한 지구</div>
        <div>ESG가 함께하는</div>
        <div>여행으로 지켜요!</div>
      </div>
      <div>지구 이미지</div>
      <div onClick={moveToPlace}>하이여 시작하기</div>
    </div>
  );
}

export default SearchStart;

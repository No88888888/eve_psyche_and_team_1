import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SearchPlace() {
  const navigate = useNavigate();

  const moveToSche = () => {
    navigate("/search/schedule");
  };

  return (
    <div>
      <div>
        <div>지구를 위한 초록색 여정</div>
        <div>어디로 떠나볼까요?</div>
      </div>
      <div>검색창</div>

      <div>
        <div>~~에서 ~~하는 ~~여행은 어때요?</div>
        <div>
          <div>
            <p>떠나요</p>
            <p>부산!</p>
          </div>
          <div onClick={moveToSche}>다음</div>
        </div>
      </div>
    </div>
  );
}

export default SearchPlace;

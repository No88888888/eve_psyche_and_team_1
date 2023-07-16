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
        <div>
          <span>지구를 위한 </span>
          <span className="text-[#3EC6C9]">초록색</span>
          <span> 여정</span>
        </div>
        <div>
          <span>어디로 떠나볼까요?</span>
        </div>
      </div>
      <div>검색창</div>

      <div>
        <div>~~에서 ~~하는 ~~여행은 어때요?</div>
        <div>
          <div>
            <span>떠나요</span>
            <span className="text-[#3EC6C9] font-bold">부산!</span>
          </div>
          <button
            className="w-[500px] h-20 bg-[#3EC6C9] rounded-md text-white"
            onClick={moveToSche}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPlace;

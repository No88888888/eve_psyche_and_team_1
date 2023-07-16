import React from "react";
import { useNavigate } from "react-router-dom";

function SearchSchedule() {
  const navigate = useNavigate();
  const moveToResult = () => {
    navigate("/result");
  };
  return (
    <div>
      <div>
        <div>
          <span>우리를 위한 </span>
          <span className="text-[#3EC6C9]">초록색</span>
          <span> 여행,</span>
        </div>
        <div>언제 떠나볼까요?</div>
      </div>
      <div>달력</div>

      <div>
        <div></div>
        <button
          className="w-[500px] h-20 bg-[#3EC6C9] rounded-md text-white"
          onClick={moveToResult}
        >
          출발
        </button>
      </div>
    </div>
  );
}

export default SearchSchedule;

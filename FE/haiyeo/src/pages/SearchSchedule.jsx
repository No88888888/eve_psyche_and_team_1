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
        <div>우리를 위한 초록색 여행,</div>
        <div>언제 떠나볼까요?</div>
      </div>
      <div>달력</div>

      <div>
        <div></div>
        <div onClick={moveToResult}>출발</div>
      </div>
    </div>
  );
}

export default SearchSchedule;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function SearchSchedule() {
  // const [dateValue, setDateValue] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

  const navigate = useNavigate();
  const moveToResult = () => {
    navigate("/result");
  };
  const moveToBack = () => {
    navigate(-1);
  };

  const handleSelectStart = (e) => {
    setStartDate(e.target.value);
  };

  const handleSelectEnd = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="w-[100%] font-sans">
      <div className="w-10/12 mx-auto">
        <div className="pt-8 flex flex-row-reverse">
          <button onClick={moveToBack}>
            <img className="w-5" alt="뒤로가기" src="/img/arrow.png" />
          </button>
        </div>
        <div className="text-[20px] mt-20 mb-10">
          <div className="my-4">
            <span>우리를 위한 </span>
            <span className="text-[#3EC6C9]">초록색</span>
            <span> 여행,</span>
          </div>
          <div className="text-[20px] my-4">언제 떠나볼까요?</div>
        </div>
        <div>
          {/* <Calendar onChange={setDateValue} value={dateValue} /> */}
          <div>
            <label for="date">
              시작 :
              <input
                type="date"
                id="date"
                max="2023-12-31"
                min="2023-07-01"
                value={startDate}
                onChange={handleSelectStart}
              ></input>
            </label>
          </div>
          <div>
            <label for="date">
              종료 :
              <input
                type="date"
                id="date"
                max="2023-12-31"
                min="2023-07-01"
                value={endDate}
                onChange={handleSelectEnd}
              ></input>
            </label>
          </div>
        </div>
        {endDate !== "" && (
          <div className="mt-60 mb-20 ">
            <div></div>
            <button
              className="w-full h-10 bg-[#3EC6C9] rounded-md text-white"
              onClick={moveToResult}
            >
              출발
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchSchedule;

import React from "react";
import { useNavigate } from "react-router-dom";

function Stamp() {
  const navigate = useNavigate();
  const moveToShop = () => {
    navigate("/rewardshop");
  };

  return (
    <div>
      <div>
        <div>GREEN TRACE</div>
        <div>초록색 발자취를 남기고</div>
        <div>나를 위한 리워드도 받아보세요!</div>
      </div>
      <div>나의 리워드 교환권 : 2개</div>

      <div>
        <div>
          <div>
            <div>숙박</div>
            <div>보상받기</div>
          </div>
          <div>스티커 부분</div>
        </div>
        <div>
          <div>
            <div>교통</div>
            <div>보상받기</div>
          </div>
          <div>스티커 부분</div>
        </div>
        <div>
          <div>
            <div>먹을거리</div>
            <div>보상받기</div>
          </div>
          <div>스티커 부분</div>
        </div>
        <div>
          <div>
            <div>액티비티</div>
            <div>보상받기</div>
          </div>
          <div>스티커 부분</div>
        </div>
      </div>

      <div onClick={moveToShop}>리워드 받기</div>
    </div>
  );
}

export default Stamp;

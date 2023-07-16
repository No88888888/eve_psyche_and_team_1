import React from "react";
import { useNavigate } from "react-router-dom";

function Stamp() {
  const navigate = useNavigate();
  const moveToShop = () => {
    navigate("/rewardshop");
  };

  return (
    <div className="w-[512px] bg-red-100">
      <div className="w-[512px] bg-[#F3FFC5]">
        <div>
          <img className="w-[200px]" alt="hanaEarth" src="/img/hana_earth.png" />
        </div>
        <div className="bg-white rounded-xl grid grid-cols-5 w-10/12 mx-auto pt-4 pb-2">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <div className="font-bold text-3xl">GREEN TRACE</div>
            <div>
              <span className="text-[#3EC6C9]">초록색</span>
              <span> 발자취를 남기고</span>
            </div>
            <div>나를 위한 리워드도 받아보세요!</div>
          </div>
        </div>
      </div>
      <div className="py-5">나의 리워드 교환권 : 2개</div>

      <div>
        <div>
          <div className="grid grid-cols-2 mx-auto w-10/12">
            <div className="font-bold">숙박</div>
            <div>
              <button className="">보상받기</button>
            </div>
          </div>
          <div className="bg-[#ECFAFA] w-10/12 mx-auto rounded-lg grid grid-cols-5">
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
            <div>
              <img className="w-14 pt-2 mx-auto" alt="bstarboy" src="img/baldStarboy.png" />
            </div>
            <div>
              <img className="w-14 pt-2 mx-auto" alt="bstarboy" src="img/baldStarboy.png" />
            </div>
            <div>
              <img className="w-14 pt-2 mx-auto" alt="bstarboy" src="img/baldStarboy.png" />
            </div>
          </div>
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

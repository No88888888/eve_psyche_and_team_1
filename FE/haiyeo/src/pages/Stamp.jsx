import React from "react";
import { useNavigate } from "react-router-dom";

function Stamp() {
  const navigate = useNavigate();
  const moveToShop = () => {
    navigate("/rewardshop");
  };

  return (
    <div className="w-[512px]">
      <div className="w-[512px] bg-[#F3FFC5] pb-8">
        <div>
          <img className="w-[200px]" alt="hanaEarth" src="/img/hana_earth.png" />
        </div>
        <div className="bg-white rounded-xl grid grid-cols-5 w-[460px] mx-auto pt-4 pb-2">
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
      <div className="flex flex-row-reverse w-[460px] mx-auto">
        <div className="py-5">나의 리워드 교환권 : 2개</div>
      </div>

      <div>
        <div>
          <div className="grid grid-cols-2 mx-auto w-[460px]">
            <div className="font-bold">숙박</div>
            <div className="flex flex-row-reverse">
              <button className="">보상받기</button>
            </div>
          </div>
          <div className="bg-[#ECFAFA] w-[460px] h-20 mx-auto rounded-lg grid grid-cols-5 pt-3">
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
          <div className="grid grid-cols-2 mx-auto w-[460px]">
            <div className="font-bold">교통</div>
            <div className="flex flex-row-reverse">
              <button className="">보상받기</button>
            </div>
          </div>
          <div className="bg-[#FFFAE9] w-[460px] h-20 mx-auto rounded-lg grid grid-cols-5 pt-3">
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
            <div>
              <img className="w-14 pt-2 mx-auto" alt="bstarboy" src="img/baldStarboy.png" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mx-auto w-[460px]">
            <div className="font-bold">먹을거리</div>
            <div className="flex flex-row-reverse">
              <button className="">보상받기</button>
            </div>
          </div>
          <div className="bg-[#ECFAFA] w-[460px] h-20 mx-auto rounded-lg grid grid-cols-5 pt-3">
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
            <div>
              <img className="w-16 mx-auto" alt="starboy" src="img/starStarboy.png" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mx-auto w-[460px]">
            <div className="font-bold">액티비티</div>
            <div className="flex flex-row-reverse">
              <button className="">보상받기</button>
            </div>
          </div>
          <div className="bg-[#FFFAE9] w-[460px] h-20 mx-auto rounded-lg grid grid-cols-5 pt-3">
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
            <div>
              <img className="w-14 pt-2 mx-auto" alt="bstarboy" src="img/baldStarboy.png" />
            </div>
          </div>
        </div>
      </div>

      <button
        className="w-[460px] h-20 bg-[#3EC6C9] rounded-md text-white mb-20 mt-16"
        onClick={moveToShop}
      >
        리워드 받기
      </button>
    </div>
  );
}

export default Stamp;

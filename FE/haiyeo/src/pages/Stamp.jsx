import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Stamp() {
  const navigate = useNavigate();
  const moveToShop = () => {
    navigate("/rewardshop");
  };

  const [count, setCount] = useState(2);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-[512px]">
      <div className="w-[512px] bg-[#F3FFC5] pb-10 pt-20">
        <div>
          <img
            className="w-[200px] absolute mt-[-40px] ml-6"
            alt="hanaEarth"
            src="/img/hana_earth.png"
          />
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
      <div className=" w-[460px] mx-auto">
        <div className="flex flex-row-reverse mx-auto">
          <div className="pt-5 font-semibold text-lg">나의 리워드 교환권 : {count}개</div>
        </div>

        <div>
          <div>
            <div className="grid grid-cols-2 mx-auto w-[460px] my-2 pt-4">
              <div className=" font-semibold text-lg">숙박</div>
              <div className="flex flex-row-reverse">
                <button className="rounded-lg w-24 border border-[#D9D9D9] text-[#878787]">
                  보상받기
                </button>
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
            <div className="grid grid-cols-2 mx-auto w-[460px] my-2 pt-4">
              <div className=" font-semibold text-lg">교통</div>
              <div className="flex flex-row-reverse">
                <button className="rounded-lg w-24 border border-[#D9D9D9] text-[#878787]">
                  보상받기
                </button>
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
          {count === 2 ? (
            <div>
              <div className="grid grid-cols-2 mx-auto w-[460px] my-2 pt-4">
                <div className=" font-semibold text-lg">먹을거리</div>
                <div className="flex flex-row-reverse">
                  <button className="rounded-lg w-24 bg-[#8CC93E] text-white" onClick={addCount}>
                    보상받기
                  </button>
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
          ) : (
            <div>
              <div className="grid grid-cols-2 mx-auto w-[460px] my-2 pt-4">
                <div className=" font-semibold text-lg">먹을거리</div>
                <div className="flex flex-row-reverse">
                  <button className="rounded-lg w-24 border border-[#D9D9D9] text-[#878787]">
                    보상받기
                  </button>
                </div>
              </div>
              <div className="bg-[#ECFAFA] w-[460px] h-20 mx-auto rounded-lg grid grid-cols-5 pt-3">
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
                <div>
                  <img className="w-14 pt-2 mx-auto" alt="bstarboy" src="img/baldStarboy.png" />
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="grid grid-cols-2 mx-auto w-[460px] my-2 pt-4">
              <div className=" font-semibold text-lg">액티비티</div>
              <div className="flex flex-row-reverse">
                <button className="rounded-lg w-24 border border-[#D9D9D9] text-[#878787]">
                  보상받기
                </button>
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
          className="w-full h-16 bg-[#3EC6C9] rounded-md text-white mb-20 mt-16"
          onClick={moveToShop}
        >
          리워드 받기
        </button>
      </div>
    </div>
  );
}

export default Stamp;

import React, { useState } from "react";

function RewardList() {
  const [modal, setModal] = useState(false);
  return (
    <div className="font-sans">
      <div className="bg-[#EFFFF9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img src="/img/goods.jpg" alt="goods" className="w-[70px] h-[50px]" />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">친환경 화장품 세트 할인 쿠폰</span>
          </div>
          <div className="ml-[45%]">
            <span className="text-xs text-[#9A9A9A]">
              기한만료 : 2023. 10. 15
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#EFFFF9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/toothbrush.jpg"
            alt="toothbrush"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">대나무 칫솔 세트</span>
          </div>
          <div className="ml-[45%]">
            <span className="text-xs text-[#9A9A9A]">
              기한만료 : 2023. 09. 08
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] flex">
        <div className="my-auto ml-[3%]">
          <img src="/img/etf.png" alt="etf" className="w-[70px] h-[50px]" />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">친환경 ETF 1주</span>
          </div>
          <div className="ml-[45%]">
            <span className="text-xs text-[#9A9A9A]">
              기한만료 : 2023. 09. 24
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/ecofood.png"
            alt="ecofood"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">해운대 친환경 하나식당 상품권</span>
          </div>
          <div className="ml-[45%]">
            <span className="text-xs text-[#9A9A9A]">
              기한만료 : 2023. 06. 07
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto mt-[5%] mb-[35%] flex">
        <div className="my-auto ml-[3%]">
          <img src="/img/etf.png" alt="etf" className="w-[70px] h-[50px]" />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">친환경 ETF 1주</span>
          </div>
          <div className="ml-[45%]">
            <span className="text-xs text-[#9A9A9A]">
              기한만료 : 2022. 11. 19
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardList;

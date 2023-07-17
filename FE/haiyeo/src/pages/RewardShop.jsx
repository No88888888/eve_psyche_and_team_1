import React, { useState } from "react";

function RewardShop() {
  const [coupons, setCoupons] = useState(2);
  return (
    <div className="w-[100%] font-sans">
      <div className="w-[100%] bg-[#B3F3F4] pb-[5%] pt-[6%]">
        <div>
          <img
            className="w-[40%] absolute mt-[-2%] ml-[5%]"
            alt="hanaEarth"
            src="/img/hana_earth.png"
          />
        </div>
        <div className="bg-white rounded-xl grid grid-cols-5 w-[80%] mx-auto mt-[5%] ">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <div className="font-bold text-2xl">GREEN SHOP</div>
            <div className="my-[-2%]">
              <span className="text-[#3EC6C9] text-xs">초록빛</span>
              <span className="text-xs"> 당신의 노력을 모아</span>
            </div>
            <div className="mt-[-5%]">
              <span className="text-xs">든든한 </span>
              <span className="text-[#3EC6C9] text-xs">하나</span>
              <span className="text-xs">의 상품으로!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <img
          className="w-[10%] h-[10%] ml-[10%] my-[3%]"
          alt="starboy"
          src="img/starStarboy.png"
        />
        <span className="my-auto text-lg ml-[3%]">
          나의 리워드 교환권 : {coupons} 개
        </span>
      </div>
      <div className="flex flex-row text-center mb-[10%]">
        <div className="w-[35%] ml-[10%] grid bg-[#EFFFF9] rounded-xl drop-shadow-md">
          <div className="h-[50px]">
            <span className="text-sm">하나 여행자 보험 </span>
            <span className="text-sm">20% 할인 쿠폰</span>
          </div>
          <div className="h-[80px]">
            <img alt="coupon1" src="img/coupon1.png" className="w-[100%]" />
          </div>
          <div className="flex flex-row mt-[-15px] mb-[8px]">
            <img
              className="w-[30px] h-[30px] ml-auto"
              alt="starboy"
              src="img/starStarboy.png"
            />
            <span className="my-auto ml-[3%] mr-auto">1개</span>
          </div>
          <div className="text-white bg-[#3EC6C9] rounded-md w-[75%] h-[30px] mx-auto mb-[10%]">
            <span className="align-middle">교환하기</span>
          </div>
        </div>
        <div className="w-[35%] ml-[10%] grid bg-[#EFFFF9] rounded-xl drop-shadow-md">
          <div className="h-[50px]">
            <span className="text-sm">친환경 화장품 세트</span>
            <span className="text-sm">30% 할인 쿠폰</span>
          </div>
          <div className="h-[80px]">
            <img
              alt="goods"
              src="img/goods.jpg"
              className="w-[60%] mx-auto my-auto"
            />
          </div>
          <div className="flex flex-row mt-[-15px] mb-[8px]">
            <img
              className="w-[30px] h-[30px] ml-auto"
              alt="starboy"
              src="img/starStarboy.png"
            />
            <span className="my-auto ml-[3%] mr-auto">2개</span>
          </div>
          <div className="text-white bg-[#3EC6C9] rounded-md w-[75%] h-[30px] mx-auto mb-[10%]">
            <span className="align-middle">교환하기</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row text-center mb-[30%]">
        <div className="w-[35%] ml-[10%] grid bg-[#EFFFF9] rounded-xl drop-shadow-md">
          <div className="h-[50px]">
            <div>
              <span className="text-sm">친환경 농산물</span>
            </div>
            <span className="text-sm">1만원 상품권</span>
          </div>
          <div className="h-[80px]">
            <img
              alt="nongsanmul"
              src="img/nongsanmul.jpg"
              className="w-[50%] mx-auto my-auto"
            />
          </div>
          <div className="flex flex-row mt-[-15px] mb-[8px]">
            <img
              className="w-[30px] h-[30px] ml-auto"
              alt="starboy"
              src="img/starStarboy.png"
            />
            <span className="my-auto ml-[3%] mr-auto">3개</span>
          </div>
          <div className="text bg-[#FFFFFF] rounded-md w-[75%] h-[30px] mx-auto mb-[10%]">
            <span className="align-middle">교환하기</span>
          </div>
        </div>
        <div className="w-[35%] ml-[10%] grid bg-[#EFFFF9] rounded-xl drop-shadow-md">
          <div className="h-[50px]">
            <div className="mt-[15px]">
              <span className="text-sm">친환경 ETF 1주</span>
            </div>
          </div>
          <div className="h-[80px]">
            <img alt="etf" src="img/etf.jpg" className="w-[60%] mx-auto" />
          </div>
          <div className="flex flex-row mt-[-15px] mb-[8px]">
            <img
              className="w-[30px] h-[30px] ml-auto"
              alt="starboy"
              src="img/starStarboy.png"
            />
            <span className="my-auto ml-[3%] mr-auto">3개</span>
          </div>
          <div className="bg-[#FFFFFF] rounded-md w-[75%] h-[30px] mx-auto mb-[10%]">
            <span className="align-middle">교환하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardShop;

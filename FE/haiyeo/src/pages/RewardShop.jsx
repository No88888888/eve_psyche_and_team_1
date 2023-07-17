import React, { useState } from "react";

function RewardShop() {
  const [coupons, setCoupons] = useState(2);
  return (
    <div className="w-[512px]">
      <div className="w-[512px] bg-[#B3F3F4] pb-10 pt-20">
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
            <div className="font-bold text-3xl">GREEN SHOP</div>
            <div>
              <span className="text-[#3EC6C9]">초록빛</span>
              <span> 당신의 노력을 모아</span>
            </div>
            <div>
              <span>든든한 </span>
              <span className="text-[#3EC6C9]">하나</span>
              <span>의 상품으로!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <img
          className="w-16 ml-12 mt-4"
          alt="starboy"
          src="img/starStarboy.png"
        />
        <span className="ml-6 mt-9 text-lg">
          나의 리워드 교환권 : {coupons} 개
        </span>
      </div>
    </div>
  );
}

export default RewardShop;

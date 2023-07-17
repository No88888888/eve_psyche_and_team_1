import React from "react";

function UsedList() {
  return (
    <div className="font-sans">
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/pension.png"
            alt="pension"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">해운대 친환경 하나펜션</span>
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2023. 07. 15
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/ecofood.png"
            alt="ecofood"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">해운대 친환경 하나식당</span>
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2023. 07. 14
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img src="/img/kona.png" alt="kona" className="w-[70px] h-[50px]" />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">하나렌터카 전기차 코나 EV</span>
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2023. 07. 14
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/treeplanting.png"
            alt="treeplanting"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">낙동강변 나무심기</span>
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2023. 04. 30
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/pension2.png"
            alt="pension2"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">경주 친환경 하나펜션</span>
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2022. 12. 07
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto mt-[5%] mb-[40%] drop-shadow-md flex">
        <div className="my-auto ml-[3%]">
          <img
            src="/img/tracking.png"
            alt="tracking"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">에코 트래킹</span>
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">이용일 : 2022. 10. 6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedList;

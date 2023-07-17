import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function UsedList() {
  return (
    <>
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
            <FontAwesomeIcon
              icon={faCircleCheck}
              color="#3EC6C9"
              className="ml-[50px]"
            />
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
            <FontAwesomeIcon
              icon={faCircleCheck}
              color="#3EC6C9"
              className="ml-[50px]"
            />
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
            <FontAwesomeIcon
              icon={faCircleCheck}
              color="#3EC6C9"
              className="ml-[30px]"
            />
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2023. 07. 14
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsedList;

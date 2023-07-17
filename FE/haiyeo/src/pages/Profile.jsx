import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Loading from "../components/Loading";

function Profile() {
  // 로딩창 무지성 복붙
  const [loading, setLoading] = useState(true);
  function stop() {
    setLoading(false);
  }
  useEffect(() => {
    setTimeout(stop, 1000);
  }, []);

  return (
    <div className="font-sans">
      {loading ? <Loading /> : null}
      <div className="mt-[7%] ml-[7%] mb-[5%]">
        <span className="text-[#3EC6C9] text-2xl">hana_ti</span>
        <span className="text-2xl"> 님의 여행</span>
      </div>
      <NavLink to="/profile/detail">
        <div className="bg-[#F9F9F9] rounded-xl w-[86%] h-[75px] mx-auto drop-shadow-md flex">
          <div>
            <img src="img/euk.png" alt="euk" className="w-[30%] mt-[5px]" />
          </div>
          <div className="ml-[-130px] grid">
            <div className="mt-[10px]">
              <span className="text-lg">hana_ti</span>
            </div>
            <div className="mt-[-15px]">
              <span className="text-sm text-[#9A9A9A]">프로필 보기</span>
            </div>
          </div>
        </div>
      </NavLink>
      <hr className="bg-[#9A9A9A] w-[86%] mx-auto mt-[5%]" />
      <div className=" ml-[7%] my-[3%]">
        <span className="text-xl">예약 내역</span>
      </div>
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
              className="ml-[72px]"
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
            src="/img/plogging.png"
            alt="plogging"
            className="w-[70px] h-[50px]"
          />
        </div>
        <div className="w-[100%]">
          <div className="ml-[5%] mt-[6%]">
            <span className="text-sm">해운대 플로깅</span>
            {/* <FontAwesomeIcon
              icon={faCircleCheck}
              color="#3EC6C9"
              className="ml-[130px]"
            /> */}
          </div>
          <div className="ml-[50%]">
            <span className="text-xs text-[#9A9A9A]">
              이용일 : 2023. 07. 16
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
              className="ml-[70px]"
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
    </div>
  );
}

export default Profile;

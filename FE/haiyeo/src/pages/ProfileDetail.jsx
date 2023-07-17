import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsedList from "./ProfileComponents/UsedList";
import RewardList from "./ProfileComponents/RewardList";

function ProfileDetail() {
  const [list, setList] = useState("Used");
  const changeList = (newList) => {
    setList(newList);
  };

  const chooseList = () => {
    switch (list) {
      case "Used":
        return <UsedList />;
      case "Rewarded":
        return <RewardList />;
    }
  };
  const navigate = useNavigate();
  const moveToBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="absolute ml-[90%] mt-[2%]">
        <button onClick={moveToBack}>
          <img className="w-5" alt="뒤로가기" src="/img/arrow.png" />
        </button>
      </div>
      <div className="mt-[7%] ml-[10%] mb-[5%]">
        <span className="text-[#3EC6C9] text-2xl">hana_ti</span>
        <span className="text-2xl"> 님의 프로필</span>
      </div>
      <div className="bg-[#F9F9F9] rounded-xl w-[80%] h-[75px] mx-auto drop-shadow-md flex">
        <div>
          <img src="/img/euk.png" alt="euk" className="w-[30%] mt-[5px]" />
        </div>
        <div className="ml-[-45%] my-auto">
          <span className="text-lg">hana_ti</span>
        </div>
        <div className="my-auto ml-[30%]">
          <span className="text-sm text-[#9A9A9A]">수정</span>
        </div>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-2 text-[#898989] mt-[4%]">
        <button onClick={() => changeList("Used")}>
          <div className="">이용 내역</div>
          {list === "Used" ? (
            <hr className="border-[#3EC6C9] border-2" />
          ) : (
            <hr className="bg-[#9A9A9A]" />
          )}
        </button>
        <button onClick={() => changeList("Rewarded")}>
          <div>리워드 내역</div>
          {list === "Rewarded" ? (
            <hr className="border-[#3EC6C9] border-2" />
          ) : (
            <hr className="bg-[#9A9A9A]" />
          )}
        </button>
      </div>
      <div className="w-11/12 mx-auto">{chooseList()}</div>
    </>
  );
}
export default ProfileDetail;

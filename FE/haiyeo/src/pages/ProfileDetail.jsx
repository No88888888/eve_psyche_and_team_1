import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsedList from "./ProfileComponents/UsedList";
import RewardList from "./ProfileComponents/RewardList";

function ProfileDetail() {
  const [list, setList] = useState("Used");
  const changeList = (newList) => {
    setList(newList);
  };

  const [modal, setModal] = useState(false);
  const [used, setUsed] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => {
    setUsed(true);
    setModal(false);
  };
  const navigate = useNavigate();
  const moveToBack = () => {
    navigate(-1);
  };
  return (
    <div className="font-sans">
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
      <div className="w-11/12 mx-auto">
        {list === "Used" ? (
          <UsedList />
        ) : (
          <div className="font-sans">
            {used ? (
              <div>
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
                    <img
                      src="/img/goods.jpg"
                      alt="goods"
                      className="w-[70px] h-[50px]"
                    />
                  </div>
                  <div className="w-[100%]">
                    <div className="ml-[5%] mt-[6%]">
                      <span className="text-sm">
                        친환경 화장품 세트 할인 쿠폰
                      </span>
                    </div>
                    <div className="ml-[45%]">
                      <span className="text-xs text-[#9A9A9A]">
                        기한만료 : 2023. 10. 15
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="bg-[#EFFFF9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex"
                  onClick={openModal}
                >
                  <div className="my-auto ml-[3%]">
                    <img
                      src="/img/goods.jpg"
                      alt="goods"
                      className="w-[70px] h-[50px]"
                    />
                  </div>
                  <div className="w-[100%]">
                    <div className="ml-[5%] mt-[6%]">
                      <span className="text-sm">
                        친환경 화장품 세트 할인 쿠폰
                      </span>
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
              </div>
            )}
            {/* <div
              className="bg-[#EFFFF9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] drop-shadow-md flex"
              onClick={openModal}
            >
              <div className="my-auto ml-[3%]">
                <img
                  src="/img/goods.jpg"
                  alt="goods"
                  className="w-[70px] h-[50px]"
                />
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
            </div> */}
            <div className="bg-[#F9F9F9] rounded-xl w-[90%] h-[75px] mx-auto my-[5%] flex">
              <div className="my-auto ml-[3%]">
                <img
                  src="/img/etf.png"
                  alt="etf"
                  className="w-[70px] h-[50px]"
                />
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
                <img
                  src="/img/etf.png"
                  alt="etf"
                  className="w-[70px] h-[50px]"
                />
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
        )}
      </div>
      {modal && (
        <div className="w-[100%] h-[100%] absolute bottom-0 left-0 bg-[#999999] grid">
          <div className="mx-auto my-[5%]">
            <img src="/img/goods.jpg" alt="goods" />
          </div>
          <div className="mx-auto my-[-6%] text-xl text-[#FFFFFF]">
            <span>친환경 화장품 교환권</span>
          </div>
          <div className="mx-auto">
            <img src="/img/barcode.png" alt="barcode" />
          </div>
          <div className="mx-auto text-[#FFFFFF] my-[-5%]">
            <span>쿠폰번호 : 3e4f22sd6eh69qs41d</span>
          </div>
          <button
            className="w-[50%] bg-[#3EC6C9] rounded-xl drop-shadow-md mb-[30%] mx-auto"
            onClick={closeModal}
          >
            사용완료
          </button>
        </div>
      )}
    </div>
  );
}
export default ProfileDetail;

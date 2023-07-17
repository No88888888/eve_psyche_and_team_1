import React from "react";
import { useNavigate } from "react-router-dom";

function ResultDetail() {
  const navigate = useNavigate();
  const moveToBack = () => {
    navigate(-1);
  };

  const makeReservation = () => {};

  return (
    <div className="w-[512px]">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-2">
          <div className="pt-8">
            <span className="text-[#3EC6C9] font-bold text-4xl">부산</span>
            <span className="text-[#898989]"> 으로의 ECO 여행</span>
          </div>
          <div className="pt-8 flex flex-row-reverse">
            <button onClick={moveToBack}>
              <img className="w-5" alt="뒤로가기" src="/img/arrow.png" />
            </button>
          </div>
        </div>
        <div className="text-2xl ml-1"> 8월 15일(수) ~ 8월 16일(목)</div>
      </div>
      <hr className="text-[#D2D2D2] border border-1" />

      <div className="bg-[#F2FFFB]">
        <div className="w-10/12 mx-auto">
          <div>
            <img
              className="mx-auto border border-1 pt-5 h-72 w-[460px]"
              alt="상세페이지 사진"
              src="/img/lodgeStar.png"
            />
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">부산 수영구 광안동 232-5</div>
            <div>
              <div clasName="col-span-1 grid grid-cols-2 bg-red-500">
                <div className="col-span-1 bg-red-200 w-10">
                  <img className="w-6" alt="starRate" src="/img/star.png" />
                </div>
                <div className="col-span-1 bg-slate-500 w-10">4.6</div>
              </div>
            </div>
          </div>

          <div>
            해운대 걸어서 5분, 국내 최초 친환경 숙박 인증 완료! 일출 보기 좋은 곳 가족 or 연인과
            함께하는 최고의 추억여행
          </div>

          <div>
            <div>기본 정보</div>
            <ul>
              <li>체크인 : 16:00</li>
              <li>체크아웃 : 11:00</li>
              <li>무료 Wi-Fi</li>
              <li>대중교통 이용 가능</li>
              <li>전 객실 금연</li>
            </ul>
          </div>

          <div>
            <div></div>
            <button
              className="w-full h-16 bg-[#3EC6C9] rounded-md text-white"
              onClick={makeReservation}
            >
              예약하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetail;

import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryBlocks() {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate("/result/detail");
  };
  return (
    <div className="mx-auto w-11/12 mt-6" onClick={moveToDetail}>
      <div>
        <img className="rounded-xl" src="img/lodgeStar.png" alt="상품이미지" />
      </div>
      <div>
        <div className="">해운대 하나펜션</div>
        <div className="text-[#898989]">해운대 걸어서 5분, 국내 최초 친환경 숙박 인증</div>
        <div clasName="grid grid-cols-2">
          <div className="col-span-1 bg-red-200 w-10">
            <img className="w-4" alt="starRate" src="img/star.png" />
          </div>
          <div className="col-span-1 bg-slate-500 w-20">4.6</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBlocks;

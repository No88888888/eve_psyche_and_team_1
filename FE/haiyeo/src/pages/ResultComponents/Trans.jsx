import React from "react";
import CategoryBlocks from "./CategoryBlocks";

function Trans() {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="grid grid-cols-3 pt-8 pb-16">
        <div className="bg-[#DAFDFF] rounded-xl h-28 w-5/6  mx-auto font-medium text-xl">
          <div className="ml-4 mt-4">
            <p>자전거</p>
            <p>여행</p>
          </div>
        </div>
        <div className="bg-[#DAFDFF] rounded-xl h-28 w-5/6  mx-auto font-medium text-xl">
          <div className="ml-4 mt-4">
            <p>고속 버스</p>
            <p>여행</p>
          </div>
        </div>
        <div className="bg-[#DAFDFF] rounded-xl h-28 w-5/6  mx-auto font-medium text-xl">
          <div className="ml-4 mt-4">
            <p>기차/KTX</p>
            <p>여행</p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-11/12 mx-auto font-semibold text-xl">전기차 렌트 한 눈에 보기</div>
        <div className="grid grid-cols-2">
          <CategoryBlocks />
          <CategoryBlocks />
          <CategoryBlocks />
          <CategoryBlocks />
        </div>
      </div>
    </div>
  );
}

export default Trans;

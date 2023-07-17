import React from "react";
import CategoryBlocks from "./CategoryBlocks";
import { useEffect, useState } from "react";
import axios from "axios";

function Trans() {
  const [alist, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transportation")
      .then(function (response) {
        setList(response.data);
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto ">
      <div className="grid grid-cols-3 pt-8 pb-10">
        <div className="bg-[#E3F9FA] rounded-xl h-20 w-5/6  mx-auto font-medium text-[15px]">
          <div className="ml-4 mt-4 z-50 absolute font-bold">
            <p>자전거</p>
            <p>여행</p>
          </div>
          <img
            className="absolute mt-[12px] ml-[4px] z-0 rounded-xl"
            alt="자전거"
            src="/img/cycleCut.png"
          />
        </div>
        <div className="bg-[#E3F9FA] rounded-xl h-20 w-5/6  mx-auto font-medium text-[15px]">
          <div className="ml-4 mt-4 absolute z-30 font-bold">
            <p>고속 버스</p>
            <p>여행</p>
          </div>
          <img className="w-20 mt-2 ml-2" alt="고속버스" src="/img/bus.png" />
        </div>
        <div className="bg-[#E3F9FA] rounded-xl h-20 w-5/6  mx-auto font-medium text-[15px]">
          <div className="ml-4 mt-4 absolute z-30 font-bold">
            <p>기차/KTX</p>
            <p>여행</p>
          </div>
          <img className="w-20 mt-2" alt="기차" src="/img/train.png" />
        </div>
      </div>

      <div>
        <div className="w-11/12 mx-auto font-semibold text-[15px]">전기차 렌트 한 눈에 보기</div>
        <div className="grid grid-cols-2">
          {alist.map((item, idx) => (
            <CategoryBlocks
              key={idx}
              name={item.name}
              msg={item.msg}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trans;

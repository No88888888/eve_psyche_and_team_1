import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryBlocks(props) {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate("/result/detail");
  };
  return (
    <div className="mx-auto w-11/12 mt-6" onClick={moveToDetail}>
      <div>
        <img className="absolute w-14 mt-2" src="/img/eco_mark.png" alt="eco마크" />
        <img className="rounded-xl w-full h-[100px]" src={props.image} alt="상품이미지" />
      </div>
      <div>
        <div className="text-[15px] font-bold">{props.name}</div>
        <div className="text-[#898989] text-[10px]">{props.msg}</div>
        <div className="grid grid-cols-10">
          <div className="col-span-1 w-10">
            <img className="w-4" alt="starRate" src="img/star.png" />
          </div>
          <div className="col-span-1 w-20 text-[12px] ml-1">{props.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBlocks;

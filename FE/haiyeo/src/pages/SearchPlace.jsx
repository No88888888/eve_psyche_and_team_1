import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPlace() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const moveToSche = () => {
    navigate("/search/schedule");
  };
  const moveToBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-[100%]">
      <div className="w-10/12 mx-auto">
        <div className="pt-8 flex flex-row-reverse">
          <button onClick={moveToBack}>
            <img className="w-5" alt="뒤로가기" src="/img/arrow.png" />
          </button>
        </div>
        <div className="text-[20px] mt-20">
          <div className="my-4">
            <span>지구를 위한 </span>
            <span className="text-[#3EC6C9]">초록색</span>
            <span> 여정,</span>
          </div>
          <div className="my-4">
            <span>어디로 떠나볼까요?</span>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-green-200 h-10">
          {/* <div className="bg-red-200 col-span-1 grid content-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#898989" }} />
          </div> */}
          {/* <div className="w-full flex flex-row-reverse col-span-11 ">
            <div className=" mt-16 w-full border border-2 mb-16">
              <input
                className="w-full"
                type="text"
                value={search}
                onChange={onChange}
                placeholder="지구를 위한 ECO 여행지를 검색해보세요!"
              />
            </div>
          </div> */}
        </div>

        <div>
          {/* <div>~~에서 ~~하는 ~~여행은 어때요?</div> */}
          <div>
            <div className="text-[20px] mb-8 mt-24 flex flex-row-reverse">
              <span className="text-[#3EC6C9] font-bold text-3xl">부산!</span>
              <span className="mr-4 pt-2">떠나요 </span>
            </div>
            <button className="w-full h-10 bg-[#3EC6C9] rounded-md text-white" onClick={moveToSche}>
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPlace;

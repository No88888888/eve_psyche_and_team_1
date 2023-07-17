import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lodge from "./ResultComponents/Lodge";
import Trans from "./ResultComponents/Trans";
import Food from "./ResultComponents/Food";
import Activity from "./ResultComponents/Activity";

function Result() {
  const [category, setCategory] = useState("Lodge");
  const changeCatetory = (newCatetory) => {
    setCategory(newCatetory);
  };

  const chooseCategory = () => {
    switch (category) {
      case "Lodge":
        return <Lodge />;
      case "Trans":
        return <Trans />;
      case "Food":
        return <Food />;
      case "Activity":
        return <Activity />;
    }
  };
  const navigate = useNavigate();
  const moveToBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-[100%]">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-2">
          <div className="pt-8">
            <span className="text-[#3EC6C9] font-bold text-3xl">부산</span>
            <span className="text-[#898989] text-"> 으로의 ECO 여행</span>
          </div>
          <div className="pt-8 flex flex-row-reverse">
            <button onClick={moveToBack}>
              <img className="w-5" alt="뒤로가기" src="img/arrow.png" />
            </button>
          </div>
        </div>
        <div className="text-2xl ml-1"> 8월 15일(수) ~ 8월 16일(목)</div>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-4 text-[#898989] mt-10">
        <button onClick={() => changeCatetory("Lodge")}>
          <div>
            <img className="w-20 mx-auto" alt="lodgeStar" src="img/lodgeStar.png" />
          </div>
          <div>숙박</div>
        </button>
        <button onClick={() => changeCatetory("Trans")}>
          <div>
            <img className="w-20 mx-auto" alt="lodgeStar" src="img/transStar.png" />
          </div>
          <div>교통</div>
        </button>
        <button onClick={() => changeCatetory("Food")}>
          <div>
            <img className="w-16 mx-auto" alt="lodgeStar" src="img/foodStar.png" />
          </div>
          <div>먹을거리</div>
        </button>
        <button onClick={() => changeCatetory("Activity")}>
          <div>
            <img className="w-16 mx-auto" alt="lodgeStar" src="img/activityStar.png" />
          </div>
          <div>액티비티</div>
        </button>
      </div>
      <div className="w-full bg-[#F2FFFB]">{chooseCategory()}</div>
    </div>
  );
}

export default Result;

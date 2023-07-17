import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lodge from "./ResultComponents/Lodge";
import Trans from "./ResultComponents/Trans";
import Food from "./ResultComponents/Food";
import Activity from "./ResultComponents/Activity";
import ResultLoading from "../components/ResultLoading";

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

  const [loading, setLoading] = useState(true);
  function stop() {
    setLoading(false);
  }
  useEffect(() => {
    setTimeout(stop, 2000);
  }, []);

  return (
    <div className="w-[100%] font-sans">
      {loading ? <ResultLoading /> : null}
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-2">
          <div className="pt-8">
            <span className="text-[#3EC6C9] font-bold text-3xl">부산</span>
            <span className="text-[#898989] text-xs font-bold"> 으로의 ECO 여행</span>
          </div>
          <div className="pt-8 flex flex-row-reverse">
            <button onClick={moveToBack}>
              <img className="w-5" alt="뒤로가기" src="img/arrow.png" />
            </button>
          </div>
        </div>
        <div className="text-[18px] ml-1 font-bold"> 7월 19일(수) ~ 7월 20일(목)</div>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-4 text-[#898989] mt-6">
        <button onClick={() => changeCatetory("Lodge")}>
          <div>
            <img className="w-16 mx-auto mb-1" alt="lodgeStar" src="img/lodgeStar.png" />
          </div>
          <div>숙박</div>
          {category === "Lodge" && <hr className="border-[#3EC6C9] border-2" />}
        </button>
        <button onClick={() => changeCatetory("Trans")}>
          <div>
            <img className="w-16 mx-auto" alt="lodgeStar" src="img/transStar.png" />
          </div>
          <div>교통</div>
          {category === "Trans" && <hr className="border-[#3EC6C9] border-2" />}
        </button>
        <button onClick={() => changeCatetory("Food")}>
          <div>
            <img className="w-14 mx-auto mb-2" alt="lodgeStar" src="img/foodStar.png" />
          </div>
          <div>먹을거리</div>
          {category === "Food" && <hr className="border-[#3EC6C9] border-2" />}
        </button>
        <button onClick={() => changeCatetory("Activity")}>
          <div>
            <img className="w-[50px] mx-auto" alt="lodgeStar" src="img/activityStar.png" />
          </div>
          <div>액티비티</div>
          {category === "Activity" && <hr className="border-[#3EC6C9] border-2" />}
        </button>
      </div>
      <hr className="border-[#E6F7F8] border-1" />
      <div className="w-full bg-[#F2FFFB]">{chooseCategory()}</div>
    </div>
  );
}

export default Result;

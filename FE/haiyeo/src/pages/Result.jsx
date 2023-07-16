import React from "react";
import { useState } from "react";
import Lodge from "./ResultComponents/Lodge";
import Trans from "./ResultComponents/Trans";
import Food from "./ResultComponents/Food";
import Activity from "./ResultComponents/Activity";

function Result() {
  const [category, setCategory] = useState(Lodge);
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

  return (
    <div>
      <div>
        <div>
          <span className="text-[#3EC6C9] font-bold">부산</span>
          <span className="text-[#898989]">으로의 ECO 여행</span>
        </div>
        <div>8월 15일(수)~8월 16일(목)</div>
      </div>
      <div>
        <button onClick={() => changeCatetory("Lodge")}>
          <div>
            <img className="w-20" alt="lodgeStar" src="img/lodgeStar.png" />
          </div>
          <div>숙박</div>
        </button>
        <button onClick={() => changeCatetory("Trans")}>
          <div>
            <img className="w-20" alt="lodgeStar" src="img/transStar.png" />
          </div>
          <div>교통</div>
        </button>
        <button onClick={() => changeCatetory("Food")}>
          <div>
            <img className="w-16" alt="lodgeStar" src="img/foodStar.png" />
          </div>
          <div>먹을거리</div>
        </button>
        <button onClick={() => changeCatetory("Activity")}>
          <div>
            <img className="w-16" alt="lodgeStar" src="img/activityStar.png" />
          </div>
          <div>액티비티</div>
        </button>
      </div>
      <div>{chooseCategory()}</div>
    </div>
  );
}

export default Result;

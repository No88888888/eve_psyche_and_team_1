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
          <div>부산</div>
          <div>으로의 ECO 여행</div>
        </div>
        <div>8월 15일(수)~8월 16일(목)</div>
      </div>
      <div>
        <button onClick={() => changeCatetory("Lodge")}>숙박</button>
        <button onClick={() => changeCatetory("Trans")}>교통</button>
        <button onClick={() => changeCatetory("Food")}>먹을거리</button>
        <button onClick={() => changeCatetory("Activity")}>액티비티</button>
      </div>
      <div>{chooseCategory()}</div>
    </div>
  );
}

export default Result;

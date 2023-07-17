import React from "react";
import { useEffect, useState } from "react";
import CategoryBlocks from "./CategoryBlocks";
import axios from "axios";

function Food() {
  const [list, setLIst] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/food")
      .then(function (response) {
        setLIst(response);
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-2">
      {list.map((item, idx) => (
        <CategoryBlocks name={item.name} msg={item.msg} image={item.image} rating={item.rating} />
      ))}
    </div>
  );
}

export default Food;

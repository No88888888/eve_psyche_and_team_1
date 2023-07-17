import React from "react";
import { useEffect, useState } from "react";
import CategoryBlocks from "./CategoryBlocks";
import axios from "axios";

function Lodge() {
  const [alist, setLIst] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/accommodation")
      .then(function (response) {
        console.log(response.data);
        setLIst(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log(alist);
  // }, [alist]);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-2">
      {alist.map((item, idx) => (
        <CategoryBlocks name={item.name} msg={item.msg} image={item.image} rating={item.rating} />
      ))}
    </div>
    // <div></div>
  );
}

export default Lodge;

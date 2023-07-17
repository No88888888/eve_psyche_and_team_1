import React from "react";
import CategoryBlocks from "./CategoryBlocks";

function Lodge() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2">
      <CategoryBlocks />
      <CategoryBlocks />
      <CategoryBlocks />
      <CategoryBlocks />
    </div>
  );
}

export default Lodge;

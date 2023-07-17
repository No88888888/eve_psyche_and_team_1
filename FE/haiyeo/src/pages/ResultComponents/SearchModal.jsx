import React from "react";
import Swal from "sweetalert2";

function SearchModal() {
  const Swal = require("sweetalert2");

  Swal.fire({
    title: "ECO 여행정보를 검색중입니다!",
    html: "",
    timer: 3000,
    timerProgressBar: false,
    showDenyButton: false,
  });

  return <div>SearchModal</div>;
}

export default SearchModal;

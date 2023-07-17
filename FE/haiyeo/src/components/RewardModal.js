import React from "react";

function RewardModal(isOpen, closeModal) {
  return (
    // <div
    //   className="bg-[#666666] opacity-50"
    // >
    //   <div>
    //     <img src="/img/goods.jpg" alt="goods" />
    //   </div>
    //   <div>
    //     <span>친환경 화장품 교환권</span>
    //   </div>
    //   <div>
    //     <img src="/img/barcode.png" alt="barcode" />
    //   </div>
    //   <div>
    //     <span>쿠폰번호 : 3e4f22sd6eh69qs41d</span>
    //   </div>
    //   <button onClick={closeModal}>사용완료</button>
    // </div>
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          maxWidth: "100%",
          maxHeight: "100%",
          overflowY: "auto",
          backgroundColor: "#888888",
        }}
      >
        <div>
          <img src="/img/goods.jpg" alt="goods" />
        </div>
        <div>
          <span>친환경 화장품 교환권</span>
        </div>
        <div>
          <img src="/img/barcode.png" alt="barcode" />
        </div>
        <div>
          <span>쿠폰번호 : 3e4f22sd6eh69qs41d</span>
        </div>
        <button onClick={() => closeModal()}>사용완료</button>
      </div>
    </div>
  );
}

export default RewardModal;

import React from "react";
import styled from "styled-components";
function ResultLoading() {
  return (
    <div>
      <Background>
        <img src="/img/hana_earth.png" />
        <div className="font-bold">ECO 여행 정보 찾는중...</div>
      </Background>
    </div>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ResultLoading;
